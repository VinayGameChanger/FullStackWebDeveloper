//hoisting
//in function declaration we can call function even before initialization but not in case of expression and arrow function

hello();//call before even initialization
function hello(){
    console.log("Hello World");
}
//this behaviour is called hoisting