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


let treeCount = 0;
let position = 0;
for (let i = 1; i < map.length; i++) {

  position = (position + 3) % 31
  const field = map[i][position];
  if (field === '#') treeCount++;

  map[i][position] = 'X';
  console.log(map[i].join(''), map[i].length);
}

console.log(treeCount);








