import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 92,
    "capacity": 90,
    "latency": 22,
    "risk": 13,
    "weight": 11,
    "score": 165,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 81,
    "capacity": 106,
    "latency": 15,
    "risk": 9,
    "weight": 13,
    "score": 204,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 79,
    "capacity": 86,
    "latency": 25,
    "risk": 23,
    "weight": 5,
    "score": 64,
    "decision": "review"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
