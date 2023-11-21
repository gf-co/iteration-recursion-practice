// Following are some algorithms implemented using iteration (for loop, while loop) with their recursion equivalents

// Get countdown
function forLoopCountdown(n) {
	let result = [];
	for (let i = 1; i <= n; i++) {
		result.push(i);
	}
	return result;
}

function whileLoopCountdown(n) {
	let result = [];
	let i = 1;
	while (i <= n) {
		result.push(i);
		i++;
	}
	return result;
}

function recursiveCountdown(n) {
	if (n === 0) {
		return [];
	}
	let result = recursiveCountdown(n - 1);
	result.push(n);
	return result;
}

// Get reverse countdown
function forLoopReverseCountdown(n) {
	let result = [];
	for (let i = n; i > 0; i--) {
		result.push(i);
	}
	return result;
}

function whileLoopReverseCountdown(n) {
	let result = [];
	let i = n;
	while (i > 0) {
		result.push(i);
		i--;
	}
	return result;
}

function recursiveReverseCountdown(n) {
	if (n === 0) {
		return [];
	}
	let result = [n].concat(recursiveReverseCountdown(n - 1));
	return result;
}

// Get sum of array
function forLoopSum(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

function whileLoopSum(array) {
	let i = 0;
	let sum = 0;
	while (i < array.length) {
		sum += array[i];
		i++;
	}
	return sum;
}

function recursiveSum(array, index = 0) {
	if (index === array.length) return 0;
	return array[index] + recursiveSum(array, index + 1);
}

// Get value of n! (Factorial)
function forLoopFactorial(n) {
	let product = 1;
	for (let i = 1; i <= n; i++) {
		product *= i;
	}
	return product;
}

function whileLoopFactorial(n) {
	let i = 1;
	let product = 1;
	while (i <= n) {
		product *= i;
		i++;
	}
	return product;
}

function recursiveFactorial(n) {
	if (n === 1) return 1;
	return n * recursiveFactorial(n - 1);
}

// Get value of nth Fibonacci number
function forLoopFibonacci(n) {
	let a = 0;
	let b = 1;
	for (let i = 2; i <= n; i++) {
		let temp = a + b;
		a = b;
		b = temp;
	}
	return b;
}

function whileLoopFibonacci(n) {
	let i = 2;
	let a = 0;
	let b = 1;
	while (i <= n) {
		let temp = a + b;
		a = b;
		b = temp;
		i++;
	}
	return b;
}

function recursiveFibonacci(n) {
	if (n <= 1) return n;
	return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// Get maximum element in array
function forLoopMax(array) {
	let max = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] > max) max = array[i];
	}
	return max;
}
function whileLoopMax(array) {
	let max = array[0];
	let i = 1;
	while (i < array.length) {
		if (array[i] > max) max = array[i];
		i++;
	}
}
function recursiveMax(array, index = 0, max = array[0]) {
	if (index === array.length) return max;
	if (array[index] > max) max = array[index];
	return recursiveMax(array, index + 1, max);
}

// Linear search
function forLoopLinearSearch(array, target) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) return i;
	}
	return -1;
}
function whileLoopLinearSearch(array, target) {
	let i = 0;
	while (i < array.length) {
		if (array[i] === target) return i;
		i++;
	}
	return -1;
}
function recursiveLinearSearch(array, target, index = 0) {
	if (index === array.length) return -1;
	if (array[index] === target) return index;
	return recursiveLinearSearch(array, target, index + 1);
}

// Binary Search
function whileLoopBinary(array, target) {
	let left = 0;
	let right = array.length - 1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (array[mid] === target) return mid;
		if (array[mid] < target) left = mid + 1;
		else right = mid - 1;
	}
	return -1;
}
function recursiveBinary(array, target, left = 0, right = array.length - 1) {
	if (left > right) return -1;
	let mid = Math.floor((left + right) / 2);
	if (array[mid] === target) return mid;
	if (array[mid] < target) return recursiveBinary(array, target, mid + 1, right);
	else return recursiveBinary(array, target, left, mid - 1);
}

// Get power of a number
function forLoopPower(base, exponent) {
	let result = 1;
	for (let i = 0; i < exponent; i++) {
		result *= base;
	}
	return result;
}
function whileLoopPower(base, exponent) {
	let result = 1;
	let i = 0;
	while (i < exponent) {
		result *= base;
		i++;
	}
	return result;
}
function recursivePower(base, exponent) {
	if (exponent === 0) return 1;
	return base * recursivePower(base, exponent - 1);
}

// Check if balanced brackets
const openingBrackets = ["(", "[", "{"];
const closingBrackets = [")", "]", "}"];
function forLoopBalancedBrackets(string) {
	let stack = [];
	for (let i = 0; i < string.length; i++) {
		if (openingBrackets.includes(string[i])) {
			stack.push(string[i]);
		} else if (closingBrackets.includes(string[i])) {
			let openingBracket = stack.pop();
			if (openingBrackets.indexOf(openingBracket) !== closingBrackets.indexOf(string[i])) {
				return false;
			}
		}
	}
	return stack.length === 0;
}
function whileLoopBalancedBrackets(string) {
	let stack = [];
	let i = 0;
	while (i < string.length) {
		if (openingBrackets.includes(string[i])) {
			stack.push(string[i]);
		} else if (closingBrackets.includes(string[i])) {
			let openingBracket = stack.pop();
			if (openingBrackets.indexOf(openingBracket) !== closingBrackets.indexOf(string[i])) {
				return false;
			}
		}
		i++;
	}
	return stack.length === 0;
}
function recursiveBalancedBrackets(string, stack = [], index = 0) {
	if (index === string.length) return stack.length === 0;
	if (openingBrackets.includes(string[index])) {
		stack.push(string[index]);
	} else if (closingBrackets.includes(string[index])) {
		let openingBracket = stack.pop();
		if (openingBrackets.indexOf(openingBracket) !== closingBrackets.indexOf(string[index])) {
			return false;
		}
	}
	return recursiveBalancedBrackets(string, stack, index + 1);
}

// Print results
function printTestResult(testFunction, expected, args) {
	let result = testFunction(...args);
	console.log(`Test ${testFunction.name}(${args.join(", ")}): ${JSON.stringify(result)}`);
	console.log(`Expected: ${JSON.stringify(expected)}`);
	console.log(`Pass: ${JSON.stringify(result) === JSON.stringify(expected)}\n`);
}

printTestResult(forLoopCountdown, [1, 2, 3, 4, 5], [5]);
printTestResult(whileLoopCountdown, [1, 2, 3, 4, 5], [5]);
printTestResult(recursiveCountdown, [1, 2, 3, 4, 5], [5]);

printTestResult(forLoopReverseCountdown, [5, 4, 3, 2, 1], [5]);
printTestResult(whileLoopReverseCountdown, [5, 4, 3, 2, 1], [5]);
printTestResult(recursiveReverseCountdown, [5, 4, 3, 2, 1], [5]);

printTestResult(forLoopSum, 15, [[1, 2, 3, 4, 5]]);
printTestResult(whileLoopSum, 15, [[1, 2, 3, 4, 5]]);
printTestResult(recursiveSum, 15, [[1, 2, 3, 4, 5]]);

printTestResult(forLoopFactorial, 120, [5]);
printTestResult(whileLoopFactorial, 120, [5]);
printTestResult(recursiveFactorial, 120, [5]);

printTestResult(forLoopFibonacci, 5, [5]);
printTestResult(whileLoopFibonacci, 5, [5]);
printTestResult(recursiveFibonacci, 5, [5]);

printTestResult(forLoopMax, 5, [[1, 2, 3, 4, 5]]);
printTestResult(whileLoopMax, 5, [[1, 2, 3, 4, 5]]);
printTestResult(recursiveMax, 5, [[1, 2, 3, 4, 5]]);

printTestResult(forLoopLinearSearch, 2, [[1, 2, 3, 4, 5], 3]);
printTestResult(whileLoopLinearSearch, 2, [[1, 2, 3, 4, 5], 3]);
printTestResult(recursiveLinearSearch, 2, [[1, 2, 3, 4, 5], 3]);

printTestResult(whileLoopBinary, 2, [[1, 2, 3, 4, 5], 3]);
printTestResult(recursiveBinary, 2, [[1, 2, 3, 4, 5], 3]);

printTestResult(forLoopPower, 8, [2, 3]);
printTestResult(whileLoopPower, 8, [2, 3]);
printTestResult(recursivePower, 8, [2, 3]);

printTestResult(forLoopBalancedBrackets, true, ["(())"]);
printTestResult(whileLoopBalancedBrackets, true, ["(())"]);
printTestResult(recursiveBalancedBrackets, true, ["(())"]);
