import { input } from './input'

const inputAsArray = input.split('');


/* 
  Turns one giant array into 2d array
  Each row will contain 31 chars(aka fields)
*/
const map = [];
let rowFieldCount = 0;
inputAsArray.forEach((field, i) => {
  if (i % 31 === 0) {
    map.push([field]);
    rowFieldCount = 1;
  } else {
    map[map.length - 1].push(field)
    rowFieldCount++;
  }
});

const treeCountArray = [];
for (let index = 0; index < 5; index++) {
  let position_increment = 0;
  let row_increment = 1;
  if (index === 0) position_increment = 1;
  if (index === 1) position_increment = 3;
  if (index === 2) position_increment = 5;
  if (index === 3) position_increment = 7;
  if (index === 4) {
    position_increment = 1;
    row_increment = 2;
  }

  let treeCount = 0;
  let position = 0;
  for (let i = 0; i < map.length; i += row_increment) {
    if (map[i + row_increment] === undefined) break;

    position = (position + position_increment) % 31
    const field = map[i + row_increment][position];
    if (field === '#') treeCount++;
  }

  treeCountArray.push(treeCount);

}
console.log(treeCountArray);

console.log(
  treeCountArray.reduce((accumulator, currentValue) => accumulator * currentValue)
);








