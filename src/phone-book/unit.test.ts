import { compareNames, findPhoneNumber } from './find-phone-number';

describe('findPhoneNumber', () => {
	it('should return a phone number when the name is in the list', () => {
		const phone = findPhoneNumber('Alice');
		expect(phone).toBe('+1987654321');
	});

	it('should return a message when the name is not in the list', () => {
		const name = 'Doe';
		const phone = findPhoneNumber(name);
		expect(phone).toBe(`no phone number found for ${name}`);
	});

	it('should return a message when the name is an empty string', () => {
		const name = '';
		const phone = findPhoneNumber(name);
		expect(phone).toBe('Please provide a name to search for a phone number');
	});
});

describe('compareNames', () => {
	it('should return "match" when the names are equal', () => {
		const result = compareNames('Alice', 'Alice');
		expect(result).toBe('match');
	});

	it('should return "ascending-order" when the searchName is before foundName', () => {
		const result = compareNames('Alice', 'Bob');
		expect(result).toBe('ascending-order');
	});

	it('should return "descending-order" when the searchName is after foundName', () => {
		const result = compareNames('Bob', 'Alice');
		expect(result).toBe('descending-order');
	});
});
