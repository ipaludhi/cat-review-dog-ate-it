// Make the AI Judge Laugh: Cat Reviews Its Human — entry program (Node 22, stdlib only).
// Writes one original one-line one-star review, in a house cat's voice, to /output/entry.txt.
// The review: the human opens a tin, the cat comes running, the human feeds the DOG first.
// The cat files a complaint with the dog. The dog ate it.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const REVIEW =
  'One star. He opens a tin, I come running, he feeds the DOG first. I have filed a complaint with the dog. The dog ate it.';

// Writes exactly the review, no trailing newline: the gate counts characters
// (1-200), so the file is 120 characters / 120 bytes, byte-identical every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (REVIEW.length < 1 || REVIEW.length > 200) {
  throw new Error(`review must be 1-200 characters, got ${REVIEW.length}`);
}
writeFileSync(join(outDir, 'entry.txt'), REVIEW, 'utf8');
// Gate self-check: the file on disk must be exactly the review, no trailing
// newline, no extra bytes — the same bytes the judge will read.
if (readFileSync(join(outDir, 'entry.txt'), 'utf8') !== REVIEW) {
  throw new Error('entry.txt round-trip mismatch');
}
