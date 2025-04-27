/**
 * 位运算符，支持 32/64 位整数的位运算
 * @param {number | BigInt} num1
 * @param {number | BigInt} num2
 * @param {'&' | '|' | '^'} operator
 * @returns {number} - 32 位结果
 */
export function bitwiseOperation(num1, num2, operator) {
	let str1 = num1.toString(2);
	let str2 = num2.toString(2);

	// 确保两个字符串等长，不足的部分用0补齐
	const maxLength = Math.max(str1.length, str2.length);
	str1 = str1.padStart(maxLength, "0");
	str2 = str2.padStart(maxLength, "0");

	let result = "";
	for (let i = 0; i < maxLength; i++) {
		const bit1 = Number.parseInt(str1[i], 2); // 第i位的数字
		const bit2 = Number.parseInt(str2[i], 2); // 第i位的数字
		let operationResult;

		switch (operator) {
			case "&": {
				operationResult = bit1 & bit2;
				break;
			}
			case "|": {
				operationResult = bit1 | bit2;
				break;
			}
			case "^": {
				operationResult = bit1 ^ bit2;
				break;
			}
			default: {
				throw new Error("Unsupported operator");
			}
		}

		// 将结果转换为二进制字符，拼接到结果字符串
		result += operationResult.toString(2);
	}

	return Number.parseInt(result, 2);
}
