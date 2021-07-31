import { moveSpaceship } from './moves.js'
import { parsedData } from './input.js'

const { 
  firstSpaceshipPosition, 
  firstSpaceshipMoves, 
  upperRightPosition, 
  secondSpaceshipMoves, 
  secondSpaceshipPosition
} = parsedData();

console.log(moveSpaceship(upperRightPosition, firstSpaceshipPosition, firstSpaceshipMoves).join(' '))
console.log(moveSpaceship(upperRightPosition, secondSpaceshipPosition, secondSpaceshipMoves).join(' '))
