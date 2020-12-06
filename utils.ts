export const convertArrayToObject = (array, value) => {
  const obj = {};

  array.forEach(element => {
    obj[element] = value - element
  });
  return obj;
};