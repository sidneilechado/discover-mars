import { moveSpaceship } from './moves.js'
import { readData } from './input.js'

const { 
  firstSpaceshipPosition, 
  firstSpaceshipMoves, 
  initialPos, 
  secondSpaceshipMoves, 
  secondSpaceshipPosition
} = readData();

console.log(moveSpaceship(initialPos, firstSpaceshipPosition, firstSpaceshipMoves).join(' '))
console.log(moveSpaceship(initialPos, secondSpaceshipPosition, secondSpaceshipMoves).join(' '))
