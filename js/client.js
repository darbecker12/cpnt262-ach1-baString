// Number of characters of a string
let string1 = "Flames";
console.log("Before checking characters", string1);
const lenString = string1.length;
console.log("After checking the length of", string1, lenString);

// Substring of a string
let string2 = "Calgary Flames";
console.log("Before getting substring of", string2);
const substring2 = string2.substring(0,8);
console.log("After getting substring", substring2);

// Showing First and Last Character of String
let string3 = "Flames";
console.log("Before getting the first and last letters of", string3);
const fstring = string3[0];
const lstring = string3[5];
console.log("First letter is", fstring, "Last letter is", lstring);

// Concatenate strings
let string4 = "Calgary";
let string5 = "Flames";
console.log("Before concatenating. First word", string4, "Second Word", string5);
const concstring = string4.concat(' ', string5);
console.log("After concatenating strings,", concstring);