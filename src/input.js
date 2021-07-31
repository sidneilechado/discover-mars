import fs from 'fs';
import validations from './validations.js';

const parseInt = (string) => {
	return Number.parseInt(string, 10)
}

const parseSpaceshipPositionArray = (position) => {
	position[0] = parseInt(position[0])
	position[1] = parseInt(position[1])

	return position
}


export const parsedData = () => {
	const fileContent = fs.readFileSync('../input.txt', 'utf-8').split('\n');

	const {
		firstSpaceshipMoves,
		firstSpaceshipPosition,
		secondSpaceshipMoves,
		secondSpaceshipPosition,
		upperRightPosition,
	} = validations.validateInput(fileContent);

	return {
		upperRightPosition: upperRightPosition.map(entry => parseInt(entry)),
		firstSpaceshipPosition: parseSpaceshipPositionArray(firstSpaceshipPosition),
		secondSpaceshipPosition: parseSpaceshipPositionArray(secondSpaceshipPosition),
		firstSpaceshipMoves,
		secondSpaceshipMoves,
	}
}
