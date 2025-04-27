/**
 * 判断是否处于某个状态下
 * @param {number} currentStatus
 * @param {number} targetStatus
 * @returns {boolean}
 */
function hasStatus(currentStatus, targetStatus) {
	return (currentStatus & targetStatus) > 0;
}

/**
 * 添加状态
 * @param {number} currentStatus
 * @param {number} targetStatus
 * @returns {number}
 */
function addStatus(currentStatus, targetStatus) {
	return currentStatus | targetStatus;
}

/**
 * 移除状态
 * @param {number} currentStatus
 * @param {number} removedStatus
 * @returns {number}
 */
function removeStatus(currentStatus, removedStatus) {
	return currentStatus & ~removedStatus;
}

export { hasStatus, addStatus, removeStatus };
export default { hasStatus, addStatus, removeStatus };
