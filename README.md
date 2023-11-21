# Visualization of Recursive Functions' Call Stack using ASCII Art

## Get max value in an array

```javascript
function recursiveMax(array, index = 0, max = array[0]) {
	if (index === array.length) return max;
	if (array[index] > max) max = array[index];
	return recursiveMax(array, index + 1, max);
}
```

```plaintext
recursiveMax([3, 1, 4, 1, 5, 9], 0, 3)
|-- recursiveMax([3, 1, 4, 1, 5, 9], 1, 3)
|   |-- recursiveMax([3, 1, 4, 1, 5, 9], 2, 3)
|   |   |-- recursiveMax([3, 1, 4, 1, 5, 9], 3, 4)
|   |   |   |-- recursiveMax([3, 1, 4, 1, 5, 9], 4, 4)
|   |   |   |   |-- recursiveMax([3, 1, 4, 1, 5, 9], 5, 5)
|   |   |   |   |   |-- recursiveMax([3, 1, 4, 1, 5, 9], 6, 9)
|   |   |   |   |   |   `-- return 9
|   |   |   |   |   `-- return 9
|   |   |   |   `-- return 9
|   |   |   `-- return 9
|   |   `-- return 9
|   `-- return 9
`-- return 9
```

## Linear search

```javascript
function recursiveLinearSearch(array, target, index = 0) {
	if (index === array.length) return -1;
	if (array[index] === target) return index;
	return recursiveLinearSearch(array, target, index + 1);
}
```

Find position of 9

```plaintext
recursiveLinearSearch([5, 3, 9, 6, 2], 9, 0)
|-- recursiveLinearSearch([5, 3, 9, 6, 2], 9, 1)
|   |-- recursiveLinearSearch([5, 3, 9, 6, 2], 9, 2)
|   |   `-- return 2 (base case: target found at index 2)
|   `-- return 2
`-- return 2
```

If the target is not found

```plaintext
recursiveLinearSearch([5, 3, 9, 6, 2], 1, 0)
|-- recursiveLinearSearch([5, 3, 9, 6, 2], 1, 1)
|   |-- recursiveLinearSearch([5, 3, 9, 6, 2], 1, 2)
|   |   |-- recursiveLinearSearch([5, 3, 9, 6, 2], 1, 3)
|   |   |   |-- recursiveLinearSearch([5, 3, 9, 6, 2], 1, 4)
|   |   |   |   |-- recursiveLinearSearch([5, 3, 9, 6, 2], 1, 5)
|   |   |   |   |   `-- return -1 (base case: target not found)
|   |   |   |   `-- return -1
|   |   |   `-- return -1
|   |   `-- return -1
|   `-- return -1
`-- return -1
```

## Get number from Fibonacci Sequence

```javascript
function recursiveFibonacci(n) {
	if (n <= 1) return n;
	return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
```

```plaintext
recursiveFibonacci(5)
|-- recursiveFibonacci(4)
|   |-- recursiveFibonacci(3)
|   |   |-- recursiveFibonacci(2)
|   |   |   |-- recursiveFibonacci(1)
|   |   |   |   `-- return 1
|   |   |   `-- recursiveFibonacci(0)
|   |   |       `-- return 0
|   |   `-- recursiveFibonacci(1)
|   |       `-- return 1
|   `-- recursiveFibonacci(2)
|       |-- recursiveFibonacci(1)
|       |   `-- return 1
|       `-- recursiveFibonacci(0)
|           `-- return 0
`-- recursiveFibonacci(3)
    |-- recursiveFibonacci(2)
    |   |-- recursiveFibonacci(1)
    |   |   `-- return 1
    |   `-- recursiveFibonacci(0)
    |       `-- return 0
    `-- recursiveFibonacci(1)
        `-- return 1
```

## Get factorial of a number

```javascript
function recursiveFactorial(n) {
	if (n === 1) return 1;
	return n * recursiveFactorial(n - 1);
}
```

```plaintext
recursiveFactorial(5)
|-- recursiveFactorial(4)
|   |-- recursiveFactorial(3)
|   |   |-- recursiveFactorial(2)
|   |   |   |-- recursiveFactorial(1)
|   |   |   |   `-- return 1
|   |   |   `-- return 2
|   |   `-- return 6
|   `-- return 24
`-- return 120
```

## Binary Search

```javascript
function recursiveBinary(array, target, left = 0, right = array.length - 1) {
	if (left > right) return -1;
	let mid = Math.floor((left + right) / 2);
	if (array[mid] === target) return mid;
	if (array[mid] < target) return recursiveBinary(array, target, mid + 1, right);
	else return recursiveBinary(array, target, left, mid - 1);
}
```

```plaintext
recursiveBinary([1, 2, 3, 4, 5, 6, 7, 8, 9], 5, 0, 8)
|-- recursiveBinary([1, 2, 3, 4, 5, 6, 7, 8, 9], 5, 5, 8)
|   |-- recursiveBinary([1, 2, 3, 4, 5, 6, 7, 8, 9], 5, 5, 6)
|   |   |-- recursiveBinary([1, 2, 3, 4, 5, 6, 7, 8, 9], 5, 5, 5)
|   |   |   `-- return 5 (base case: target found at index 5)
|   |   `-- return 5
|   `-- return 5
`-- return 5
```

If not found

```plaintext
recursiveBinary([1, 2, 3, 4, 5, 6, 7, 8, 9], 10, 0, 8)
|-- recursiveBinary([1, 2, 3, 4, 5, 6, 7, 8, 9], 10, 5, 8)
|   |-- recursiveBinary([1, 2, 3, 4, 5, 6, 7, 8, 9], 10, 5, 6)
|   |   |-- recursiveBinary([1, 2, 3, 4, 5, 6, 7, 8, 9], 10, 5, 5)
|   |   |   `-- return -1 (base case: target not found)
|   |   `-- return -1
|   `-- return -1
`-- return -1
```

## Calculate power of a number

```javascript
function recursivePower(base, exponent) {
	if (exponent === 0) return 1;
	return base * recursivePower(base, exponent - 1);
}
```

```plaintext
recursivePower(2, 3) ---> 2 * 4
|-- recursivePower(2, 2) ---> 2 * 2
|   |-- recursivePower(2, 1) ---> 2 * 1
|   |   |-- recursivePower(2, 0) ---> 1
|   |   |   `-- return 1
|   |   `-- return 2
|   `-- return 4
`-- return 8
```

## Check if balanced brackets

```javascript
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
```

Balanced

```plaintext
recursiveBalancedBrackets("{()}")
|-- recursiveBalancedBrackets("{()}", ["{"], 1)
|   |-- recursiveBalancedBrackets("{()}", ["{", "("], 2)
|   |   |-- recursiveBalancedBrackets("{()}", ["{"], 3) // "(" popped from stack
|   |   |   |-- recursiveBalancedBrackets("{()}", [], 4) // "{" popped from stack
|   |   |   |   |-- recursiveBalancedBrackets("{()}", [], 5)
|   |   |   |   |   `-- return true // stack is empty
|   |   |   |   `-- return true
|   |   |   `-- return true
|   |   `-- return true
|   `-- return true
`-- return true
```

Not balanced

```plaintext
recursiveBalancedBrackets("{}{}")
|-- recursiveBalancedBrackets("{}{}", ["{"], 1)
|   |-- recursiveBalancedBrackets("{}{}", [], 2) // "{" popped from stack
|   |   |-- recursiveBalancedBrackets("{}{}", ["{"], 3)
|   |   |   |-- recursiveBalancedBrackets("{}{}", [], 4) // "{" popped from stack
|   |   |   |   |-- recursiveBalancedBrackets("{}{}", [], 5)
|   |   |   |   |   `-- return true // stack is empty
|   |   |   |   `-- return true
|   |   |   `-- return true
|   |   `-- return true
|   `-- return true
`-- return true
```
