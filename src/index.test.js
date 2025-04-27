import assert from "node:assert";
import test, { describe } from "node:test";

import { addStatus, hasStatus, removeStatus } from "./index.js";

describe("addStatus", () => {
	test("should add a new status to the current status", () => {
		const CURRENT_STATUS = 0b0010; // 2 in binary
		const TARGET_STATUS = 0b0100; // 4 in binary
		const EXPECTED_STATUS = 0b0110; // 6 in binary

		assert.equal(addStatus(CURRENT_STATUS, TARGET_STATUS), EXPECTED_STATUS);
	});

	test("should not change the status if the target status is already present", () => {
		const CURRENT_STATUS = 0b0110; // 6 in binary
		const TARGET_STATUS = 0b0010; // 2 in binary
		const EXPECTED_STATUS = 0b0110; // 6 in binary

		assert.equal(addStatus(CURRENT_STATUS, TARGET_STATUS), EXPECTED_STATUS);
	});

	test("should add multiple statuses correctly", () => {
		const CURRENT_STATUS = 0b0001; // 1 in binary
		const TARGET_STATUS = 0b0110; // 6 in binary
		const EXPECTED_STATUS = 0b0111; // 7 in binary

		assert.equal(addStatus(CURRENT_STATUS, TARGET_STATUS), EXPECTED_STATUS);
	});

	test("should add a new status to the current status", () => {
		const CURRENT_STATUS = 0b0010; // 2 in binary
		const TARGET_STATUS = 0b0100; // 4 in binary
		const EXPECTED_STATUS = 0b0110; // 6 in binary

		assert.equal(addStatus(CURRENT_STATUS, TARGET_STATUS), EXPECTED_STATUS);
	});
});

describe("removeStatus", () => {
	test("should remove a status from the current status", () => {
		const CURRENT_STATUS = 0b0110; // 6 in binary
		const REMOVED_STATUS = 0b0010; // 2 in binary
		const EXPECTED_STATUS = 0b0100; // 4 in binary

		assert.equal(removeStatus(CURRENT_STATUS, REMOVED_STATUS), EXPECTED_STATUS);
	});

	test("should not change the status if the removed status is not present", () => {
		const CURRENT_STATUS = 0b0100; // 4 in binary
		const REMOVED_STATUS = 0b0010; // 2 in binary
		const EXPECTED_STATUS = 0b0100; // 4 in binary

		assert.equal(removeStatus(CURRENT_STATUS, REMOVED_STATUS), EXPECTED_STATUS);
	});

	test("should remove multiple statuses correctly", () => {
		const CURRENT_STATUS = 0b0111; // 7 in binary
		const REMOVED_STATUS = 0b0011; // 3 in binary
		const EXPECTED_STATUS = 0b0100; // 4 in binary

		assert.equal(removeStatus(CURRENT_STATUS, REMOVED_STATUS), EXPECTED_STATUS);
	});
});

describe("hasStatus", () => {
	test("should return true if the current status includes the target status", () => {
		const CURRENT_STATUS = 0b0110; // 6 in binary
		const TARGET_STATUS = 0b0010; // 2 in binary

		assert.equal(hasStatus(CURRENT_STATUS, TARGET_STATUS), true);
	});

	test("should return false if the current status does not include the target status", () => {
		const CURRENT_STATUS = 0b0100; // 4 in binary
		const TARGET_STATUS = 0b0010; // 2 in binary

		assert.equal(hasStatus(CURRENT_STATUS, TARGET_STATUS), false);
	});

	test("should return true if the current status includes multiple target statuses", () => {
		const CURRENT_STATUS = 0b0111; // 7 in binary
		const TARGET_STATUS = 0b0011; // 3 in binary

		assert.equal(hasStatus(CURRENT_STATUS, TARGET_STATUS), true);
	});

	test("should return false if the current status does not include any of the target statuses", () => {
		const CURRENT_STATUS = 0b0100; // 4 in binary
		const TARGET_STATUS = 0b1000; // 8 in binary

		assert.equal(hasStatus(CURRENT_STATUS, TARGET_STATUS), false);
	});
});
