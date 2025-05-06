import { bitwise } from "bitwise.js";

/**
 * 判断是否处于某个状态下
 * @param {number|bigint} currentStatus
 * @param {number|bigint} targetStatus
 * @returns {boolean}
 */
function hasStatus(currentStatus, targetStatus) {
	const result = bitwise.and(currentStatus, targetStatus);

	return Number(result) > 0;
}

/**
 * 添加状态
 * @param {number|bigint} currentStatus
 * @param {number|bigint} targetStatus
 * @returns {number|bigint}
 */
function addStatus(currentStatus, targetStatus) {
	return bitwise.or(currentStatus, targetStatus);
}

/**
 * 移除状态
 * @param {number|bigint} currentStatus
 * @param {number|bigint} removedStatus
 * @returns {number|bigint}
 */
function removeStatus(currentStatus, removedStatus) {
	return bitwise.and(currentStatus, bitwise.not(removedStatus));
}

export { hasStatus, addStatus, removeStatus };
export default { hasStatus, addStatus, removeStatus };
