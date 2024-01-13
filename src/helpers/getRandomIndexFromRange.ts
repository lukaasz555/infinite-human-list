export function getRandomIndexFromRange(limit: number, start = 0): number {
	return Math.floor(Math.random() * (limit - start + 1)) + start;
}
