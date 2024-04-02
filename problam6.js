The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 



1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000


// solve this problem javascript



function convert(s, numRows) {
	if (numRows === 1) return s;

	const rows = new Array(numRows).fill("");
	let row = 0;
	let direction = 1; // Direction: 1 for down, -1 for up

	for (let i = 0; i < s.length; i++) {
		rows[row] += s[i];
		if (row === 0) {
			direction = 1; // Change direction to down when reaching the top row
		} else if (row === numRows - 1) {
			direction = -1; // Change direction to up when reaching the bottom row
		}
		row += direction; // Move to the next row
	}

	return rows.join("");
}

// Test cases
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
console.log(convert("A", 1)); // Output: "A"
