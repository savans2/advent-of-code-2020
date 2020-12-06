import { instructions } from './data';

let validPasswordCount = 0;
instructions.forEach(instruction => {

  const instructionAsArray = instruction.split(' ');
  const minAndMax = instructionAsArray[0].split('-');

  const min = parseInt(minAndMax[0])  // 1
  const max = parseInt(minAndMax[1])  // 3
  const char = instructionAsArray[1].split(':')[0]; // "h"
  const passwordAsArray = instructionAsArray[2].split(''); // ["a","b","c","d","h"]

  let charRepeatCount = 0;
  passwordAsArray.forEach(pwChar => {
    if (char === pwChar) charRepeatCount++;
  })

  if (charRepeatCount >= min && charRepeatCount <= max) {
    validPasswordCount++;
  }


});
console.log(validPasswordCount);