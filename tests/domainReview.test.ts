function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 69, slack: 53, drag: 23, confidence: 64 };
equal(domainReviewScore(item), 186);
equal(domainReviewLane(item), "ship");
