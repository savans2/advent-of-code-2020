import { instructions } from './data';

let validPasswordCount = 0;
instructions.forEach(instruction => {

  const instructionAsArray = instruction.split(' ');
  const positions = instructionAsArray[0].split('-');

  const positionOne = parseInt(positions[0])  // 1
  const positionTwo = parseInt(positions[1])  // 3
  const char = instructionAsArray[1].split(':')[0]; // "h"
  const passwordAsArray = instructionAsArray[2].split(''); // ["a","b","c","d","h"]

  const isAtFirstPosition = char === passwordAsArray[positionOne - 1] && !(char == passwordAsArray[positionTwo - 1]);
  const isAtSecondPosition = char == passwordAsArray[positionTwo - 1] && !(char === passwordAsArray[positionOne - 1]);

  if (isAtFirstPosition || isAtSecondPosition) validPasswordCount++;

});
console.log(validPasswordCount);