import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const PUBLIC_DIR = path.resolve("public");
const IMAGE_EXTENSIONS = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const MAX_IMAGE_BYTES = 220_000;
const MAX_PUBLIC_BYTES = 2_500_000;

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
    }),
  );

  return files.flat();
}

const files = await listFiles(PUBLIC_DIR);
const fileSizes = await Promise.all(
  files.map(async (file) => ({ file, size: (await stat(file)).size })),
);
const publicBytes = fileSizes.reduce((total, file) => total + file.size, 0);
const oversizedImages = fileSizes.filter(
  ({ file, size }) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()) && size > MAX_IMAGE_BYTES,
);

if (oversizedImages.length > 0 || publicBytes > MAX_PUBLIC_BYTES) {
  for (const { file, size } of oversizedImages) {
    console.error(`Image exceeds 220 KB: ${path.relative(process.cwd(), file)} (${size} bytes)`);
  }

  if (publicBytes > MAX_PUBLIC_BYTES) {
    console.error(`Public assets exceed 2.5 MB (${publicBytes} bytes)`);
  }

  process.exitCode = 1;
} else {
  console.log(`Performance budgets passed: ${fileSizes.length} assets, ${publicBytes} public bytes.`);
}
