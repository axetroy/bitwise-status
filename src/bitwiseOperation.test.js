import assert from "node:assert";
import test from "node:test";

import { bitwiseOperation } from "./bitwiseOperation.js";

test("bitwiseOperation |", (t) => {
	assert.strictEqual(bitwiseOperation(1, 2, "|"), 3);

	// 32 bit
	for (let i = 0; i < 64; i++) {
		if (i < 32) {
			const expectedValue = 1 | ((i === 0 ? 0 : 2 ** i) + 1);

			assert.strictEqual(1 | (2 ** i), expectedValue);
		} else {
			// 超出 32 位，则内置的引擎不支持
			// 请求的结果都为 1
			assert.strictEqual(1 | (2 ** i), 1);
		}

		assert.strictEqual(bitwiseOperation(1, 2 ** i, "|"), (i === 0 ? 0 : 2 ** i) + 1);
	}

	// 64 bit
	for (let i = 0; i < 64; i++) {
		if (i < 32) {
			const expectedValue = 1 | ((i === 0 ? 0 : 2 ** i) + 1);

			assert.strictEqual(1 | (2 ** i), expectedValue);
		} else {
			// 超出 32 位，则内置的引擎不支持
			// 请求的结果都为 1
			assert.strictEqual(1 | (2 ** i), 1);
		}

		assert.strictEqual(bitwiseOperation(1, BigInt(2 ** i), "|"), (i === 0 ? 0 : 2 ** i) + 1);
	}
});
