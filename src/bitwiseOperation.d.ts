/**
 * 支持 64 位的位运算
 * @example
 * ```js
 * bitwiseOperation(1, 2, '|') // 3
 * bitwiseOperation(1, 2n, '|') // 3
 * bitwiseOperation(1, Math.pow(32), '|') // 4294967297
 * ```
 */
declare function bitwiseOperation(num1: number | bigint, num2: number | bigint, operator: "|" | "&" | "^"): number;

export { bitwiseOperation };
