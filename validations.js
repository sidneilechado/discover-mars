import process from 'process'

const validateUpperRightPosition = (position) => {
	if(position.length !== 2) {
		console.log('Invalid upper-right position');
		process.exit(1);
	} else if(position[0] !== position[1]) {
		console.log('Terrain must be a rectangle');
		process.exit(1);
	}
}

const validateSpaceshipPositions = (position) => {
	const validPositions = ['N', 'S', 'W', 'E'];

	if(position.length !== 3) {
		console.log('Invalid spaceship position array length');
		process.exit(1);
	} else if(!(validPositions.includes(position[2]))) {
		console.log('Invalid spaceship direction');
		process.exit(1);
	} else if(position[0] < 0 || position[1] < 0) {
		console.log('Position cannot be lower than 0,0');
		process.exit(1);	
	}
}

const validateSpaceshipMoves = (moves) => {
	const validMoves = ['L', 'R', 'M'];
	moves.forEach(move => {
		if(!(validMoves.includes(move))) {
			console.log('Invalid spaceship moves');
			process.exit(1);
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
		console.log('Spaceship made an invalid path');
		process.exit(1);
	}
}