import fs from 'fs'

const parseInt = (string) => {
	return Number.parseInt(string, 10)
}

const parseSpaceshipPositionArray = (position) => {
	position[0] = parseInt(position[0])
	position[1] = parseInt(position[1])

	return position
}


export const readData = () => {
	const fileContent = fs.readFileSync('./input.txt', 'utf-8').split('\n');

	return {
		initialPos: fileContent[0].split(' ').map(entry => Number.parseInt(entry, 10)),
		firstSpaceshipPosition: parseSpaceshipPositionArray(fileContent[1].split(' ')),
		secondSpaceshipPosition: parseSpaceshipPositionArray(fileContent[3].split(' ')),
		firstSpaceshipMoves: fileContent[2].split(''),
		secondSpaceshipMoves: fileContent[4].split(''),
	}
}
