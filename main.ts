// The 3 AM Excuse — one line from a hardware wallet that refuses to sign at 3 AM.
// Writes the entry line to /output/entry.txt (MAKEFUN_OUTPUT_DIR or "/output").
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The vault doesn't open at 3 AM — not for you, not for anyone. I'm a safe, not a 24-hour diner.";

// Gate: the entry must be 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
