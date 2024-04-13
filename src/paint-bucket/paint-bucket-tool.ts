type Directions = {
	[direction: string]: number[];
};
const directions: Directions = {
	up: [-1, 0],
	right: [0, 1],
	down: [1, 0],
	left: [0, -1],
};

function getBaseMatrix() {
	const base = [
		['.', '#', '#', '#', '.', '.'],
		['.', '#', '.', '.', '#', '.'],
		['.', '#', '#', '#', '.', '.'],
		['.', '#', '.', '.', '.', '.'],
	];
	return base;
}

/**
 * Checks if a given row and column index are within the bounds of a 2D matrix.
 *
 * @param matrix - the 2D matrix to check
 * @param row - the row index to check
 * @param col - the column index to check
 * @returns false if the row and column are within bounds, true if the row or col is out of bounds
 */
export function checkBounds(matrix: string[][], row: number, col: number) {
	const isOutOfBounds = row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length;
	return isOutOfBounds;
}

/**
 * paints a flood fill on a 2d matrix
 * @param matrix - the 2d matrix to paint on
 * @param row - the row index of the starting pixel
 * @param col - the column index of the starting pixel
 * @param currentColor - the color of the current pixel
 * @param newColor - the color to paint the filled area with
 * @param visited - a set of visited positions to prevent cycles
 */
type Paint = {
	matrix: string[][];
	row: number;
	col: number;
	currentColor: string;
	newColor: string;
	visited: Set<string>;
};
function paint({ matrix, row, col, currentColor, newColor, visited }: Paint) {
	// -- base case
	const isOutOfBounds = checkBounds(matrix, row, col);
	if (isOutOfBounds) return;

	const isColorDifferent = matrix[row][col] !== currentColor;
	if (isColorDifferent) return;

	const position = JSON.stringify({ row, col });

	if (visited.has(position)) return;

	visited.add(position);

	matrix[row][col] = newColor;

	for (let direction in directions) {
		// -- DFS
		const [x, y] = directions[direction];
		paint({ matrix, row: row + x, col: col + y, currentColor, newColor, visited });
	}
}

/**
 *
 * @param startPixel - the row and col index of the starting pixel
 * @param newColor - the color to paint the filled area with
 * @returns - updated 2d matrix
 */

type Pixel = {
	row: number;
	col: number;
};
// -- Time:O(n)
//-- Space:O(n)
export function pixel(startPixel: Pixel, newColor: string) {
	const matrix = getBaseMatrix();

	const { row, col } = startPixel;

	// --edges
	const isOutOfBounds = checkBounds(matrix, row, col);
	if (isOutOfBounds) return;

	const visited = new Set<string>();

	const currentColor = matrix[row][col];

	paint({ matrix, row, col, currentColor, newColor, visited });

	return matrix;
}
