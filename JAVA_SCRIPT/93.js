//compilation


//step 1 compilation phase
//(a)tokenizing/lexical-code is cut in various small chunks
//(b)parsing-small chunk are readed and converted to abstract syntax tree 
//(c)code generation--

// Step 2 code execution phase
//in javascript code executes inside execution context .first global execution context is created

//why compilation
//(1)early error checking- check error before executing
//(2)determining appropriate scope of variable 
// above two steps require

//how javascript code executes

//what is global execution context?
//what is local execution context?
//closures

console.log(this);
console.log(window);
console.log(firstName);
var firstName="vinay";
console.log(firstName);