// Make the AI Judge Laugh: the Office Joke Open
// Writes exactly one office joke (one line, <= 200 chars) to /output/entry.txt.
// Deterministic: same bytes on every run. No network, no file reads, exit 0.
// Honours MAKEFUN_OUTPUT_DIR when set, otherwise /output. Never writes
// anywhere else and never uses process.cwd() to locate files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The meeting that could have been an email just sent a follow-up email asking for another meeting.";

// The gate requires 1-200 characters of non-whitespace text; refuse to
// write anything that could not pass it.
if (JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error("joke must be 1-200 characters of non-whitespace text");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
