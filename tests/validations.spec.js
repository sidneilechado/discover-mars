import { jest, it, describe, expect } from '@jest/globals'
import {
	validateUpperRightPosition,
	validateSpaceshipPositions,
	validateSpaceshipMoves,
	validateOutput,
	ERROR_CODE,
} from '../validations.js'

describe('validateUpperRightPosition', () => {
	const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });

	it('Should exit when upperRight position arrays length is not equal 2', () => {
		validateUpperRightPosition([5, 5, 'itWillFail'])
		expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
	})

	it('Should exit when terrain is not a rectangle', () => {
		validateUpperRightPosition([1, 2])
		expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
	})
})

describe('validateSpaceshipPositions', () => {
	const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });

	it('Should exit when spaceship position arrays length is not equal 3', () => {
		validateSpaceshipPositions([1, 5, 'N', 'itWillFail'])
		expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
	})

	it('Should exit when theres an illegal direction on the array', () => {
		validateSpaceshipPositions([1, 2, 'X'])
		expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
	})

	it('Should exit if initial position is lower than 0,0', () => {
		validateSpaceshipPositions([1, -1, 'N'])
		expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
	})
})

describe('validateSpaceshipMoves', () => {
	const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });

	it('Should exit when theres an illegal spaceship move', () => {
		validateSpaceshipMoves(['LLLX'])
		expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
	})
})

describe('validateOutput', () => {
	const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });

	it('Should exit when position[0] is higher than upper right', () => {
		const upperRightPosition = [5, 5]
		const position = [6, 4]

		validateOutput(upperRightPosition, position)
		expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
	})

	it('Should exit when position[1] is higher than upper right', () => {
		const upperRightPosition = [5, 5]
		const position = [4, 6]
		
		validateOutput(upperRightPosition, position)
		expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
	})
})