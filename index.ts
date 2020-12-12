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
    required: true,
  },
  {
    name: 'iyr',
    required: true,
  },
  {
    name: 'eyr',
    required: true,
  },
  {
    name: 'hgt',
    required: true,
  },
  {
    name: 'hcl',
    required: true,
  },
  {
    name: 'ecl',
    required: true,
  },
  {
    name: 'pid',
    required: true,
  },
  {
    name: 'cid',
    required: false
  }
];

const splitInput = input.split('\n\n');

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

  validFields.forEach(field => {
    if (field.required && passport[field.name] === undefined) isPassportValid = false;
    else {

      switch (field.name) {
        case 'byr':
          if (passport[field.name].length < 4) isPassportValid = false;
          if (parseInt(passport[field.name]) < 1920) isPassportValid = false;
          if (parseInt(passport[field.name]) > 2002) isPassportValid = false;
          break;
        case 'iyr':
          if (passport[field.name].length < 4) isPassportValid = false;
          if (parseInt(passport[field.name]) < 2010) isPassportValid = false;
          if (parseInt(passport[field.name]) > 2020) isPassportValid = false;
          break;
        case 'eyr':
          if (passport[field.name].length < 4) isPassportValid = false;
          if (parseInt(passport[field.name]) < 2020) isPassportValid = false;
          if (parseInt(passport[field.name]) > 2030) isPassportValid = false;
          break;
        case 'hgt':
          const value = parseInt(passport[field.name]);
          const metric = passport[field.name].includes('cm') ? 'cm' : 'in'
          if (metric === 'cm') {
            if (value < 150) isPassportValid = false;
            if (value > 193) isPassportValid = false;
          } else {
            if (value < 50) isPassportValid = false;
            if (value > 76) isPassportValid = false;
          }
          break;
        case 'hcl':
          const validColorChars = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
          const color = passport[field.name].split('');

          if (color.length < 7 || color.length > 7) isPassportValid = false;
          if (color[0] !== '#') isPassportValid = false;
          color.forEach((char, i) => {
            if (i !== 0)
              if (validColorChars.indexOf(char) === -1) isPassportValid = false;
          });
          break;
        case 'ecl':
          const validEyeColor = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
          if (validEyeColor.indexOf(passport[field.name]) === -1) isPassportValid = false;
          break;
        case 'pid':
          if (passport[field.name].length < 9 || passport[field.name].length > 9) isPassportValid = false;
          break;
      }
    }
  })

  if (isPassportValid) validPassportCount++;

})

console.log(validPassportCount);
