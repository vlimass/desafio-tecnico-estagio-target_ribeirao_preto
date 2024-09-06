function checkAsInString(str) {
  const lowerCaseStr = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < lowerCaseStr.length; i++) {
    if(lowerCaseStr[i] === 'a') {
      count++;
    }
  } 

  if (count > 0) {
    return `A letra 'a' ocorre na string ${count} veze(s).`;
  } 

  return "A letra 'a' não ocorre na string.";
}

// CASES:
const str1 = 'amor';
const str2 = 'Amor';
const str3 = 'Moro';
const str4 = 'oefefrewr2342d20ajcjwoidwejafj23a8r2w1';
const str5 = 'oefefrewr2342d20jcjwoidwejfj238r2w1';

console.log(checkAsInString(str1)); // A letra 'a' ocorre na string 1 veze(s).
console.log(checkAsInString(str2)); // A letra 'a' ocorre na string 1 veze(s).
console.log(checkAsInString(str3)); // A letra 'a' não ocorre na string.
console.log(checkAsInString(str4)); // A letra 'a' ocorre na string 3 veze(s).
console.log(checkAsInString(str5)); // A letra 'a' não ocorre na string.