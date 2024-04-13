/**
 * Compares two names, considering their case and accents.
 *
 * @param {string} searchName - The name to compare.
 * @param {string} foundName - The name to compare with.
 * @returns {string} - 'match' if the names are equal, 'ascending-order' if searchName is before foundName, 'descending-order' if searchName is after foundName.
 */
type CompareNamesResult = 'match' | 'ascending-order' | 'descending-order';
export function compareNames(searchName: string, foundName: string): CompareNamesResult {
	// 'ACCENT: a ≠ b, a ≠ á, a = A'
	// -- to find names regardeless their case
	const result = searchName.localeCompare(foundName, 'en', { sensitivity: 'accent' });

	let output: CompareNamesResult = 'ascending-order';
	if (result === 0) output = 'match'; //- names are equal
	if (result < 0) output = 'ascending-order'; // -- searchName is before foundName
	if (result > 0) output = 'descending-order'; // -- searchName is after foundName

	return output;
}

/**
 * Finds the phone number of a person in the phone book.
 *
 * @param {string} searchName - The name of the person to search for in the phone book.
 * @returns {string} - The phone number of the person if found, otherwise returns a message indicating that the phone number was not found.
 */

// -- Time: O(log n)
// -- Space: O(1)

const phoneBook = [
	{ phone: '+1987654321', name: 'Alice' },
	{ phone: '+1555555555', name: 'Bob' },
	{ phone: '+1333333333', name: 'Daniel' },
	{ phone: '+1999999999', name: 'David' },
	{ phone: '+1222222222', name: 'Emily' },
	{ phone: '+1666666666', name: 'Emma' },
	{ phone: '+1234567890', name: 'John' },
	{ phone: '+1777777777', name: 'Michael' },
	{ phone: '+1444444444', name: 'Olivia' },
	{ phone: '+1888888888', name: 'Sophia' },
];
export function findPhoneNumber(searchName: string): string {
	// -edge
	if (searchName.length === 0) return 'Please provide a name to search for a phone number';

	// -- using binary search for arrays that are sorted
	let left = 0;
	let right = phoneBook.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		const foundName = phoneBook[mid].name;

		const result = compareNames(searchName, foundName);

		if (result === 'match') return phoneBook[mid].phone;

		if (result === 'ascending-order') right = mid - 1;
		if (result === 'descending-order') left = mid + 1;
	}

	return `no phone number found for ${searchName}`;
}
