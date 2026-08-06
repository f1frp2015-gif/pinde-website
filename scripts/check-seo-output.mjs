import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const APP_OUTPUT = path.resolve(".next/server/app");
const CANONICAL_ORIGIN = "https://pindesys.com";
const RETIRED_DOMAINS = ["pinde-alu.com", "pindesye.com"];

async function listHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return listHtml(entryPath);
      return entry.name.endsWith(".html") ? [entryPath] : [];
    }),
  );

  return nested.flat();
}

function countMatches(value, expression) {
  return value.match(expression)?.length ?? 0;
}

function validatePage(file, html, locale) {
  const relative = path.relative(APP_OUTPUT, file);
  const failures = [];

  if (!html.includes(`<html lang="${locale}"`)) failures.push(`html lang must be ${locale}`);
  if (countMatches(html, /<title>/g) !== 1) failures.push("must contain exactly one title");
  if (countMatches(html, /<meta name="description"/g) !== 1) failures.push("must contain exactly one meta description");
  if (countMatches(html, /<link rel="canonical"/g) !== 1) failures.push("must contain exactly one canonical link");
  if (countMatches(html, /<h1(?:\s|>)/g) !== 1) failures.push("must contain exactly one h1");

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"\/>/)?.[1];
  if (!canonical?.startsWith(`${CANONICAL_ORIGIN}/${locale}`)) {
    failures.push("canonical must use the matching localized pindesys.com URL");
  }
  if (canonical?.includes("?") || canonical?.includes("#") || canonical?.includes("dpl=")) {
    failures.push("canonical must not contain query parameters or fragments");
  }

  for (const alternate of ["en", "ru", "x-default"]) {
    if (!html.includes(`<link rel="alternate" hrefLang="${alternate}"`)) {
      failures.push(`missing ${alternate} hreflang`);
    }
  }

  for (const retiredDomain of RETIRED_DOMAINS) {
    if (html.includes(retiredDomain)) failures.push(`contains retired domain ${retiredDomain}`);
  }

  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const jsonLdTypes = [];
  if (jsonLdBlocks.length === 0) failures.push("missing JSON-LD");
  for (const [, json] of jsonLdBlocks) {
    try {
      const parsed = JSON.parse(json);
      if (typeof parsed?.["@type"] === "string") jsonLdTypes.push(parsed["@type"]);
    } catch {
      failures.push("contains invalid JSON-LD");
      break;
    }
  }

  const isProductPage = (relative.includes("/systems/aluminium/") && !relative.endsWith("/systems/aluminium/comparison.html"))
    || /\/systems\/frp\/(xd75|pd95|fd90|fdtl140)\.html$/.test(relative);
  if (isProductPage) {
    if (!html.includes('<meta name="keywords"')) failures.push("product page is missing differentiated keyword metadata");
    if (!jsonLdTypes.includes("Product")) failures.push("product page is missing Product JSON-LD");
    if (!jsonLdTypes.includes("FAQPage")) failures.push("product page is missing FAQPage JSON-LD");
  }

  return failures.map((failure) => `${relative}: ${failure}`);
}

const localizedFiles = [];
for (const locale of ["en", "ru"]) {
  localizedFiles.push({ file: path.join(APP_OUTPUT, `${locale}.html`), locale });
  const nestedFiles = await listHtml(path.join(APP_OUTPUT, locale));
  localizedFiles.push(...nestedFiles.map((file) => ({ file, locale })));
}

const failures = [];
for (const { file, locale } of localizedFiles) {
  const html = await readFile(file, "utf8");
  failures.push(...validatePage(file, html, locale));
}

const sitemap = await readFile(path.join(APP_OUTPUT, "sitemap.xml.body"), "utf8");
if (sitemap.includes("<lastmod>")) failures.push("sitemap.xml: lastmod must be omitted unless backed by real content dates");
if (!sitemap.includes("hreflang=\"en\"") || !sitemap.includes("hreflang=\"ru\"") || !sitemap.includes("hreflang=\"x-default\"")) {
  failures.push("sitemap.xml: missing localized alternates");
}
if (!sitemap.includes("<image:loc>")) failures.push("sitemap.xml: missing product image entries");

const robots = await readFile(path.join(APP_OUTPUT, "robots.txt.body"), "utf8");
if (!robots.includes(`Host: ${CANONICAL_ORIGIN}`)) failures.push("robots.txt: missing canonical host");
if (!robots.includes(`Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`)) failures.push("robots.txt: missing canonical sitemap");
if (!robots.includes("Disallow: /api/")) failures.push("robots.txt: API routes must be excluded from crawling");

if (failures.length > 0) {
  for (const failure of failures) console.error(failure);
  process.exitCode = 1;
} else {
  console.log(`SEO output checks passed for ${localizedFiles.length} localized pages.`);
}
