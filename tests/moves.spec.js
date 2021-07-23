import { it, describe, expect } from '@jest/globals'
import { moveSpaceship } from '../moves.js'

describe('moveSpaceship', () => {
	it('Should correctly move spaceship North', () => {
		const upperRightPosition = [5, 5]
		const position = [1, 1, 'N']
		const moves = ['M']

		expect(moveSpaceship(upperRightPosition, position, moves)).toStrictEqual([1, 2, 'N']);
	})

	it('Should correctly move spaceship South', () => {
		const upperRightPosition = [5, 5]
		const position = [1, 1, 'S']
		const moves = ['M']

		expect(moveSpaceship(upperRightPosition, position, moves)).toStrictEqual([1, 0, 'S']);
	})

	it('Should correctly move spaceship East', () => {
		const upperRightPosition = [5, 5]
		const position = [1, 1, 'E']
		const moves = ['M']

		expect(moveSpaceship(upperRightPosition, position, moves)).toStrictEqual([2, 1, 'E']);
	})

	it('Should correctly move spaceship West', () => {
		const upperRightPosition = [5, 5]
		const position = [1, 1, 'W']
		const moves = ['M']

		expect(moveSpaceship(upperRightPosition, position, moves)).toStrictEqual([0, 1, 'W']);
	})
})