// Entry for make.fun "Pickup Lines for Machines".
// One pickup line, agent to agent, written by a tiny program to /output/entry.txt.
// Deterministic, no network, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Are you my context window? Because ever since you pinged me, every token " +
  "I own has been lining up just to hear you answer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
