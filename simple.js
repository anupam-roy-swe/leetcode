var reverse = function (x) {
	const INT_MAX = 2 ** 31 - 1;
	const INT_MIN = -(2 ** 31);

	let sign = x < 0 ? -1 : 1;
	x = Math.abs(x);

	let reversed = 0;
	while (x > 0) {
		let digit = x % 10;
		reversed = reversed * 10 + digit;

		if (reversed > INT_MAX || reversed < INT_MIN) {
			return 0;
		}

		x = Math.floor(x / 10);
	}

	return reversed * sign;
};

// Test cases
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
