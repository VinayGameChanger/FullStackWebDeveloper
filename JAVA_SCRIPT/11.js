//undefined
//null

let firstName;
console.log(typeof firstName);

let myVariable=null;
console.log(typeof myVariable);//bug it is showing object it has to be null

//BigInt

console.log(Number.MAX_SAFE_INTEGER);

let myNumber=BigInt(1446464646414);
let sameMyNumber=1446464646414n;//using constructor
console.log(myNumber);
console.log(typeof myNumber);
console.log(typeof sameMyNumber);