import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const files = execFileSync("rg", ["--files", "src/content", "src/data", "src/components"], {
  encoding: "utf8",
})
  .trim()
  .split("\n")
  .filter((file) => /\.(?:ts|tsx)$/.test(file));

const rules = [
  ["generic superlative", /\b(?:superior|outstanding|premium|innovative)\b/giu],
  ["marketing cliché", /\b(?:industry-leading|state-of-the-art|one-stop|best-in-class|cutting-edge)\b/giu],
  ["generic recommendation", /\b(?:ideal|perfect) for\b/giu],
  ["lifestyle cliché", /seamless indoor[- ]outdoor|whisper[- ]quiet|top choice/giu],
  ["Russian generic superlative", /(?:превосход\w*|премиальн\w*|инновационн\w*|идеальн\w*|флагман\w*)/giu],
  ["incorrect IGU wording", /(?:двойн\w*|тройн\w*)\s+(?:\w+\s+){0,2}стеклопакет\w*/giu],
  ["unresolved Chinese copy", /[\u3400-\u9fff]/gu],
  ["ambiguous glazing label", /Max Glass/gu],
];

const failures = [];

for (const file of files) {
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, index) => {
    for (const [label, pattern] of rules) {
      pattern.lastIndex = 0;
      if (pattern.test(line)) failures.push(`${file}:${index + 1} [${label}] ${line.trim()}`);
    }
  });
}

if (failures.length) {
  console.error(`Content style check failed with ${failures.length} issue(s):`);
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Content style check passed across ${files.length} source files.`);
