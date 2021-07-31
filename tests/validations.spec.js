import { it, describe, expect } from '@jest/globals'
import validations from '../src/validations.js'

const {
	validateUpperRightPosition,
	validateSpaceshipEntry,
} = validations;

describe('validateUpperRightPosition', () => {
	it('Should exit when upperRight position arrays length is not equal 2', () => {
		const errors = validateUpperRightPosition([5, 5, 'itWillFail']);
		expect(errors).toStrictEqual(['Invalid upper-right position'])
	})

	it('Should exit when terrain is not a rectangle', () => {
		const errors = validateUpperRightPosition([1, 2])
		expect(errors).toStrictEqual(['Terrain must be a rectangle'])
	})
})

describe('validateSpaceshipEntry', () => {
	const spaceship = 'First Spaceship';

	it('Should return error message when spaceship position arrays length is not equal 3', () => {
		const position = [1, 5, 'N', 'itWillFail'];
		const moves = ['M', 'L', 'R']
		const errors = validateSpaceshipEntry(position, moves, spaceship)

		expect(errors).toStrictEqual([`${spaceship} - Invalid spaceship position array length`])
	})

	it('Should return error message when theres an illegal direction on the array', () => {
		const position = [1, 5, 'X'];
		const moves = ['M', 'L', 'R']
		const errors = validateSpaceshipEntry(position, moves, spaceship)

		expect(errors).toStrictEqual([`${spaceship} - Invalid spaceship direction`])
	})

	it('Should return error message if initial position is lower than 0,0', () => {
		const position = [1, -3, 'N'];
		const moves = ['M', 'L', 'R']
		const errors = validateSpaceshipEntry(position, moves, spaceship)

		expect(errors).toStrictEqual([`${spaceship} - Position cannot be lower than 0,0`])
	})

	it('Should return error message when theres an illegal spaceship move', () => {
		const position = [1, 3, 'N'];
		const moves = ['M', 'L', 'R', 'X']
		const errors = validateSpaceshipEntry(position, moves, spaceship)

		expect(errors).toStrictEqual([`${spaceship} - Invalid spaceship moves`])
	})
})