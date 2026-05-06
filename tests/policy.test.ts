function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
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
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
