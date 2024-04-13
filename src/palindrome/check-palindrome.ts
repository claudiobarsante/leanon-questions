/**
 * Checks if the given word is a palindrome.
 *
 * @param {string} word - The word to be checked for palindrome.
 * @returns {boolean} - Returns true if the word is a palindrome, otherwise false.
 */
// -- Time: O(n)
// -- Space:O(1)
export function isPalindrome(word: string): boolean {
	// -- edges
	// -- empty strings or only one char
	if (word.length <= 1) return true;

	let left = 0;
	let right = word.length - 1;

	while (left < right) {
		const leftChar = word[left].toLowerCase();
		const rightChar = word[right].toLowerCase();

		if (leftChar !== rightChar) return false;

		left++;
		right--;
	}

	return true;
}
