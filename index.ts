import { input } from './input'

// byr (Birth Year)
// iyr (Issue Year)
// eyr (Expiration Year)
// hgt (Height)
// hcl (Hair Color)
// ecl (Eye Color)
// pid (Passport ID)
// cid (Country ID)

const validFields = [
  {
    name: 'byr',
    required: true
  },
  {
    name: 'iyr',
    required: true
  },
  {
    name: 'eyr',
    required: true
  },
  {
    name: 'hgt',
    required: true
  },
  {
    name: 'hcl',
    required: true
  },
  {
    name: 'ecl',
    required: true
  },
  {
    name: 'pid',
    required: true
  },
  {
    name: 'cid',
    required: false
  }
];

const splitInput = input.split('\n\n');
let isValidCount = 0;

const passports = splitInput.map(passport => passport.split('\n'));

const formattedPassports = [];
passports.forEach((passport) => {
  const passportFields = {}

  passport.forEach((row) => {
    if (row.split(' ').length === 1)
      passportFields[row.split(':')[0]] = row.split(':')[1];
    else
      row.split(' ').forEach(field => {
        passportFields[field.split(':')[0]] = field.split(':')[1];
      })
  })

  formattedPassports.push(passportFields);

})


let validPassportCount = 0;
formattedPassports.forEach(passport => {
  let isPassportValid = true;

  console.log(passport);

  validFields.forEach(field => {
    if (passport[field.name] === undefined && field.required) isPassportValid = false;
  })

  if (isPassportValid) validPassportCount++;

})

console.log(validPassportCount);
