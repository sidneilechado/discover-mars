import process from 'process'

const errorHandler = (message) => {
	console.log(message);
	process.exit(ERROR_CODE);
}

export const ERROR_CODE = 1;

export const validateUpperRightPosition = (position) => {
	if(position.length !== 2) {
		errorHandler('Invalid upper-right position');
	} else if(position[0] !== position[1]) {
		errorHandler('Terrain must be a rectangle');
	}
}

export const validateSpaceshipPositions = (position) => {
	const validPositions = ['N', 'S', 'W', 'E'];

	if(position.length !== 3) {
		errorHandler('Invalid spaceship position array length');
	} else if(!(validPositions.includes(position[2]))) {
		errorHandler('Invalid spaceship direction');
	} else if(position[0] < 0 || position[1] < 0) {
		errorHandler('Position cannot be lower than 0,0');
	}
}

export const validateSpaceshipMoves = (moves) => {
	const validMoves = ['L', 'R', 'M'];
	moves.forEach(move => {
		if(!(validMoves.includes(move))) {
			errorHandler('Invalid spaceship moves');
		}
	})
}

export const validateInput = (fileContent) => {
	validateUpperRightPosition(fileContent[0].split(' '))
	validateSpaceshipPositions(fileContent[1].split(' '))
	validateSpaceshipPositions(fileContent[3].split(' '))
	validateSpaceshipMoves(fileContent[2].split(''))
	validateSpaceshipMoves(fileContent[4].split(''))
}

export const validateOutput = (initialPos, position) => {
	if(position[0] > initialPos[0] || position[1] > initialPos[1]) {
		errorHandler('Spaceship made an invalid path');
	}
}