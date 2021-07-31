import process from 'process'
import { 
	fileOrganization,
	ERROR_CODE,
	positionY,
	positionX,
	positionCoordinates,
} from './constants.js'

const { 
	FIRST_SPACESHIP_MOVES,
	FIRST_SPACESHIP_POSITION,
	SECOND_SPACESHIP_MOVES,
	SECOND_SPACESHIP_POSITION,
	UPPER_RIGHT_POSITION
} = fileOrganization;

const errorHandler = (errors) => {
	console.log(errors.flat());
	process.exit(ERROR_CODE);
}


const validateUpperRightPosition = (position) => {
	const errors = [];

	if(position.length !== 2) {
		errors.push('Invalid upper-right position');
	} 
	
	if(position[positionX] !== position[positionY]) {
		errors.push('Terrain must be a rectangle');
	}

	return errors;
}

const validateSpaceshipEntry = (position, moves, spaceship) => {
	const validPositions = ['N', 'S', 'W', 'E'];
	const validMoves = ['L', 'R', 'M'];

	const errors = [];

	if(position.length !== 3) {
		errors.push(`${spaceship} - Invalid spaceship position array length`);
	} 
	
	if(!validPositions.includes(position[positionCoordinates])) {
		errors.push(`${spaceship} - Invalid spaceship direction`);
	} 
	
	if(position[positionX] < 0 || position[positionY] < 0) {
		errors.push(`${spaceship} - Position cannot be lower than 0,0`);
	}

	if(moves.find(move => !validMoves.includes(move))){
		errors.push(`${spaceship} - Invalid spaceship moves`);
	}

	return errors;
}

const validateInput = (fileContent) => {
	const upperRightPosition = fileContent[UPPER_RIGHT_POSITION].split(' ');
	const firstSpaceshipPosition = fileContent[FIRST_SPACESHIP_POSITION].split(' ');
	const secondSpaceshipPosition = fileContent[SECOND_SPACESHIP_POSITION].split(' ');
	const firstSpaceshipMoves = fileContent[FIRST_SPACESHIP_MOVES].split('');
	const secondSpaceshipMoves = fileContent[SECOND_SPACESHIP_MOVES].split('');

	const errors = [
		validateUpperRightPosition(upperRightPosition),
		validateSpaceshipEntry(firstSpaceshipPosition, firstSpaceshipMoves, 'First Spaceship'),
		validateSpaceshipEntry(secondSpaceshipPosition, secondSpaceshipMoves, 'Second Spaceship'),
	]

	if(errors.flat().length){
		errorHandler(errors);
	}

	return {
		upperRightPosition,
		firstSpaceshipMoves,
		firstSpaceshipPosition,
		secondSpaceshipMoves,
		secondSpaceshipPosition,
	}
}

const validateOutput = (upperRightPosition, spaceshipFinalPosition) => {
	if(spaceshipFinalPosition[positionX] > upperRightPosition[positionX] || 
		spaceshipFinalPosition[positionY] > upperRightPosition[positionY]
	) {
		errorHandler(['Spaceship made an invalid path']);
	}
}

export default {
	errorHandler,
	validateInput,
	validateOutput,
	validateSpaceshipEntry,
	validateUpperRightPosition,
}