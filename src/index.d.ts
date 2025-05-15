/**
 * 判断是否处于某个状态下
 * @param currentStatus - 当前的状态
 * @param targetStatus - 要判断的状态
 * @example
 * ```js
 * const currentStatus = 1 | 2;
 *
 * hasStatus(currentStatus, 1); // true
 * hasStatus(currentStatus, 2); // true
 * ```
 */
declare function hasStatus<T extends number | bigint>(currentStatus: T, targetStatus: T): boolean;

/**
 * 添加状态
 * @param currentStatus - 当前的状态
 * @param targetStatus - 要增加的状态
 * @example
 * ```js
 * let currentStatus = 1 | 2;
 *
 * currentStatus = addStatus(currentStatus, 4);
 *
 * console.log(currentStatus) // 7
 *
 * currentStatus = addStatus(currentStatus, 8);
 *
 * console.log(currentStatus) // 15
 * ```
 */
declare function addStatus<T extends number | bigint>(currentStatus: T, targetStatus: T): T extends bigint ? bigint : number;

/**
 * 添加状态
 * @param currentStatus - 当前的状态
 * @param removedStatus - 要移除的状态
 * @example
 * ```js
 * let currentStatus = 1 | 2;
 *
 * currentStatus = removeStatus(currentStatus, 1);
 *
 * console.log(currentStatus) // 2
 *
 * currentStatus = removeStatus(currentStatus, 2);
 *
 * console.log(currentStatus) // 0
 * ```
 */
declare function removeStatus<T extends number | bigint>(currentStatus: T, removedStatus: T): T extends bigint ? bigint : number;

export { addStatus, hasStatus, removeStatus };
