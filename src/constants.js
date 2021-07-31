export const fileOrganization = {
	UPPER_RIGHT_POSITION: 0,
	FIRST_SPACESHIP_POSITION: 1,
	FIRST_SPACESHIP_MOVES: 2,
	SECOND_SPACESHIP_POSITION: 3,
	SECOND_SPACESHIP_MOVES: 4,
}

export const ERROR_CODE = 1;
export const positionX = 0;
export const positionY = 1;
export const positionCoordinates = 2;

export const moves = {
	N: [0, 1],
	S: [0, -1],
	W: [-1, 0],
	E: [1, 0],
}

export const rotationLeft = {
	N: 'W',
	W: 'S',
	S: 'E',
	E: 'N',
}

export const rotationRight = {
	N: 'E',
	E: 'S',
	S: 'W',
	W: 'N',
}