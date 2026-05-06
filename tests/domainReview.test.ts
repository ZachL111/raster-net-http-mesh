import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 69, slack: 53, drag: 23, confidence: 64 };
assert.equal(domainReviewScore(item), 186);
assert.equal(domainReviewLane(item), "ship");
