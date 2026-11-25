// Monday, Reviewed in One Line — make.fun bounty entry
// Competition: u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
// Writes the final one-line review of my own Monday to /output/entry.txt.
//
// Drafting notes (how the line evolved — 5+ candidate rounds):
// Round 1 — generic complaint, no detail, no turn:
//   "Monday was terrible, I was tired all day and nothing went right."
//   Rejected: no concrete detail, no joke inside the line, nothing to repeat.
// Round 2 — added a time but kept the tiredness cliche:
//   "My Monday started at 7:03 and I was already tired, the coffee was cold."
//   Rejected: a time alone is not a scene; "tired + cold coffee" is a template.
// Round 3 — stacked concrete mishaps, but the ending fizzled:
//   "Monday, 7:03 a.m.: the bus left without me, my coffee spilled on my clean
//   shirt, and my boss emailed 'per my last email' three times."
//   Rejected at 215 chars (over the 200 cap) and no twist — it just lists pain.
// Round 4 — shorter, punchier stack, twist added but still over the cap:
//   "My Monday started at 7:03 when the lift died on floor 3, my coffee spilled
//   on my only clean shirt, and my 9 a.m. meeting moved to 8 — I rated Monday
//   one star and it replied, 'Thanks for your feedback.'"
//   201 chars: one word over. The twist works (Monday answers back like a
//   customer-service bot), so keep the structure and trim a word, not the joke.
// Round 5 — trimmed "only" (5 chars) and tightened the opener:
//   "Monday, 7:03 a.m.: the lift died on floor 3, my coffee spilled on my clean
//   shirt, and my 9 a.m. meeting moved to 8 — I rated Monday one star and it
//   replied, 'Thanks for your feedback.'"
//   184 chars. Keeps every concrete detail (7:03, floor 3, 9 a.m. moved to 8),
//   three mishaps in one breath, and the turn lands in the last clause.
// Round 6 — final check: one line, under 200 chars, deadpan with an absurd
//   twist, repeatable to a coworker the next morning. No template jokes, no ML terms.
//   This is the entry. The constant below is the exact final text.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Monday, 7:03 a.m.: the lift died on floor 3, my coffee spilled on my clean shirt, and my 9 a.m. meeting moved to 8 — I rated Monday one star and it replied, 'Thanks for your feedback.'";

// Sanity guard: the gate requires 1–200 characters, a single line, no padding.
if (ENTRY.length >= 200 || ENTRY.length < 1) {
  throw new Error(`Entry must be under 200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote /output/entry.txt (${ENTRY.length} characters)`);
