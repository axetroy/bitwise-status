const ERROR_NOT_SAME_TYPE = new TypeError("Invalid type, currentStatus and targetStatus must be the same type");

/**
 * 判断是否处于某个状态下
 * @param {number|bigint} currentStatus
 * @param {number|bigint} targetStatus
 * @returns {boolean}
 */
function hasStatus(currentStatus, targetStatus) {
	if (typeof currentStatus !== typeof targetStatus) {
		throw ERROR_NOT_SAME_TYPE;
	}
	if (typeof currentStatus === "bigint") {
		return (currentStatus & targetStatus) !== 0n;
	}
	return (currentStatus & targetStatus) > 0;
}

/**
 * 添加状态
 * @param {number|bigint} currentStatus
 * @param {number|bigint} targetStatus
 * @returns {number|bigint}
 */
function addStatus(currentStatus, targetStatus) {
	if (typeof currentStatus !== typeof targetStatus) {
		throw ERROR_NOT_SAME_TYPE;
	}
	return currentStatus | targetStatus;
}

/**
 * 移除状态
 * @param {number|bigint} currentStatus
 * @param {number|bigint} removedStatus
 * @returns {number|bigint}
 */
function removeStatus(currentStatus, removedStatus) {
	if (typeof currentStatus !== typeof removedStatus) {
		throw ERROR_NOT_SAME_TYPE;
	}
	if (typeof currentStatus === "bigint") {
		return currentStatus & ~removedStatus;
	}
	return currentStatus & ~removedStatus;
}

export { hasStatus, addStatus, removeStatus };
export default { hasStatus, addStatus, removeStatus };
