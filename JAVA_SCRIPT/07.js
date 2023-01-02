//trim(it gives new string without spaces)

let alphabets = "    abcDefghijklmnoPQRStuvwxyZ    "
console.log(alphabets.length);


alphabets=alphabets.trim();
console.log(alphabets.length);


//toUpperCase() //it also give a new string

let upperCaseAlphabets=alphabets.toUpperCase();
console.log(upperCaseAlphabets);

//toLowerCase() //it also give a new string

console.log(alphabets.toLowerCase());

//slice() // it also give a new string
// Start index --inclued
//End index ---not included

//first 10 character from alphabets
console.log(alphabets.slice(0,10));
