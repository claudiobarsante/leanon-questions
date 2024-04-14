import { isOutOfBounds, pixel } from './paint-bucket-tool';

describe('paint-bucket-tool', () => {
	it('should return correct matrix for pixel(0,1), new color "o"', () => {
		const correct = [
			['.', 'o', 'o', 'o', '.', '.'],
			['.', 'o', '.', '.', '#', '.'],
			['.', 'o', 'o', 'o', '.', '.'],
			['.', 'o', '.', '.', '.', '.'],
		];

		const result = pixel({ row: 0, col: 1 }, 'o');
		expect(result).toEqual(correct);
	});

	it('should return correct matrix for pixel(1,3), new color "o"', () => {
		const correct = [
			['.', '#', '#', '#', '.', '.'],
			['.', '#', 'o', 'o', '#', '.'],
			['.', '#', '#', '#', '.', '.'],
			['.', '#', '.', '.', '.', '.'],
		];

		const result = pixel({ row: 1, col: 3 }, 'o');
		expect(result).toEqual(correct);
	});

	it('should return correct matrix for pixel(1,3), new color "#"', () => {
		const correct = [
			['.', '#', '#', '#', '.', '.'],
			['.', '#', '#', '#', '#', '.'],
			['.', '#', '#', '#', '.', '.'],
			['.', '#', '.', '.', '.', '.'],
		];

		const result = pixel({ row: 1, col: 3 }, '#');
		expect(result).toEqual(correct);
	});

	it('should return false for isOutOfBounds(matrix, 0, 0)', () => {
		const matrix = [
			['.', 'o', 'o', 'o', '.', '.'],
			['.', 'o', '.', '.', '#', '.'],
			['.', 'o', 'o', 'o', '.', '.'],
			['.', 'o', '.', '.', '.', '.'],
		];
		const result = isOutOfBounds(matrix, 0, 0);
		expect(result).toBe(false);
	});

	it('should return true for isOutOfBounds(matrix, 100, 300)', () => {
		const matrix = [
			['.', 'o', 'o', 'o', '.', '.'],
			['.', 'o', '.', '.', '#', '.'],
			['.', 'o', 'o', 'o', '.', '.'],
			['.', 'o', '.', '.', '.', '.'],
		];
		const result = isOutOfBounds(matrix, 100, 300);
		expect(result).toBe(true);
	});
});
