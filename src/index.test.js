import assert from "node:assert";
import test, { describe } from "node:test";

import { addStatus, hasStatus, removeStatus } from "./index.js";

describe("bitwise-status", () => {
	describe("type: number", () => {
		test("hasStatus", () => {
			assert.equal(hasStatus(0b1010, 0b0010), true);
			assert.equal(hasStatus(0b1010, 0b1000), true);
			assert.equal(hasStatus(0b1010, 0b0100), false);
		});
		test("addStatus", () => {
			assert.equal(addStatus(0b1000, 0b0010), 0b1010);
			assert.equal(addStatus(0b1010, 0b0100), 0b1110);
		});
		test("removeStatus", () => {
			assert.equal(removeStatus(0b1010, 0b0010), 0b1000);
			assert.equal(removeStatus(0b1110, 0b0100), 0b1010);
		});
	});

	describe("type: bigint", () => {
		test("hasStatus", () => {
			assert.equal(hasStatus(0b1010n, 0b0010n), true);
			assert.equal(hasStatus(0b1010n, 0b1000n), true);
			assert.equal(hasStatus(0b1010n, 0b0100n), false);
		});
		test("addStatus", () => {
			assert.equal(addStatus(0b1000n, 0b0010n), 0b1010n);
			assert.equal(addStatus(0b1010n, 0b0100n), 0b1110n);
		});
		test("removeStatus", () => {
			assert.equal(removeStatus(0b1010n, 0b0010n), 0b1000n);
			assert.equal(removeStatus(0b1110n, 0b0100n), 0b1010n);
		});
	});
});
