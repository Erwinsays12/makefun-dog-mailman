// The Dog Reviews the Mailman — entry program.
//
// Writes one funny one-line review, in a dog's voice, to /output/entry.txt.
// The text is fixed and deterministic: the same review is produced on every
// run, so both grading runs see the identical entry.

import { mkdirSync, writeFileSync } from "node:fs";

// Champion of a 12-candidate internal tournament, judged by the
// competition's own rubric: a review a dog gives the mailman, the dog's
// side of the visit, a dog's voice, one tight line with a turn at the end.
const REVIEW =
  "Five stars. He comes every day, knocks twice, and still hasn't learned the mail slot is MINE. I allow him to live.";

// Gate self-check: the sealed scorer only accepts UTF-8 text of 1 to 200
// characters, not only white space, on a single line. Refuse to write
// anything that would fail the gate instead of submitting an invalid entry.
if (
  REVIEW.length < 1 ||
  REVIEW.length > 200 ||
  REVIEW.trim().length === 0 ||
  REVIEW.includes("\n")
) {
  throw new Error(
    `review fails the gate: ${REVIEW.length} characters, ` +
      `single line required`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
