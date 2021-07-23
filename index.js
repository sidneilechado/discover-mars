const firstLine = [5, 5]
const secondLine = [1, 2, 'N']
const thirdLine = ['L', 'M', 'L', 'M', 'L', 'M', 'L','M', 'M']
const fourthLine = [3, 3, 'E']
const fifthLine = ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']

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

for(let i = 0; i <= fifthLine.length; i++){
	switch(fifthLine[i]){
		case 'M':
			let moveM = moves[fourthLine[2]];
			fourthLine[0] += moveM[0];
			fourthLine[1] += moveM[1];
			break;
		case 'L':
			fourthLine[2] = rotationLeft[fourthLine[2]]
			break;
		case 'R':
			fourthLine[2] = rotationRight[fourthLine[2]]
			break;
		default:
			break;
	}
}

console.log(fourthLine)