import { moveSpaceship } from './src/moves.js'
import { parsedData } from './src/input.js'

const { 
  firstSpaceshipPosition, 
  firstSpaceshipMoves, 
  upperRightPosition, 
  secondSpaceshipMoves, 
  secondSpaceshipPosition
} = parsedData();

console.log(moveSpaceship(upperRightPosition, firstSpaceshipPosition, firstSpaceshipMoves).join(' '))
console.log(moveSpaceship(upperRightPosition, secondSpaceshipPosition, secondSpaceshipMoves).join(' '))
