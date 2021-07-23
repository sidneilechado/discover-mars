import { moveSpaceship } from './moves.js'
import { readData } from './input.js'

const data = readData();
console.log(moveSpaceship(data.firstSpaceshipPosition, data.firstSpaceshipMoves).join(' '))
console.log(moveSpaceship(data.secondSpaceshipPosition, data.secondSpaceshipMoves).join(' '))
