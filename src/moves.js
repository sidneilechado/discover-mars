import validations from "./validations.js";
import {
	moves,
	rotationLeft,
	rotationRight,
	positionX,
	positionY,
	positionCoordinates,
} from './constants.js'

export const moveSpaceship = (upperRightPosition, position, spaceshipMoves) => {
	for(let i = 0; i <= spaceshipMoves.length; i++){
		switch(spaceshipMoves[i]){
			case 'M':
				let moveM = moves[position[positionCoordinates]];
				position[positionX] += moveM[positionX];
				position[positionY] += moveM[positionY];
				break;
			case 'L':
				position[2] = rotationLeft[position[2]]
				break;
			case 'R':
				position[2] = rotationRight[position[2]]
				break;
			default:
				break;
		}
	}

	validations.validateOutput(upperRightPosition, position);
	return position;
}