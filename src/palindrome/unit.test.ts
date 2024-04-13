import { isPalindrome } from './check-palindrome';

describe('isPalindrome', () => {
	//const isPalindrome = require('./check-palindrome');
	it('should return true for an empty string', () => {
		const emptyString = '';
		const result = isPalindrome(emptyString);
		expect(result).toBe(true);
	});
	it('should return true for a single character string', () => {
		const singleChar = 'a';
		const result = isPalindrome(singleChar);
		expect(result).toBe(true);
	});
	it('should return true for a palindrome', () => {
		const palindrome = 'racecar';
		const result = isPalindrome(palindrome);
		expect(result).toBe(true);
	});
	it('should return false for a non-palindrome', () => {
		const nonPalindrome = 'world';
		const result = isPalindrome(nonPalindrome);
		expect(result).toBe(false);
	});
});
