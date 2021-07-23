import { validateOutput } from "./validations.js";

const moves = {
	N: [0, 1],
	S: [0, -1],
	W: [-1, 0],
	E: [1, 0],
}

const rotationLeft = {
	N: 'W',
	W: 'S',
	S: 'E',
	E: 'N',
}

const rotationRight = {
	N: 'E',
	E: 'S',
	S: 'W',
	W: 'N',
}

export const moveSpaceship = (initialPos, position, spaceshipMoves) => {
	for(let i = 0; i <= spaceshipMoves.length; i++){
		switch(spaceshipMoves[i]){
			case 'M':
				let moveM = moves[position[2]];
				position[0] += moveM[0];
				position[1] += moveM[1];
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

	validateOutput(initialPos, position);
	return position;
}