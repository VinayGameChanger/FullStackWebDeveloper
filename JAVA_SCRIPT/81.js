function hello(){
    console.log("hello World");
}
hello();


//javascript function===> function+object

console.log(hello.name); //to get name of function object like property

//you can add your own property in a function

hello.myOwnProperty="Value1"; //we can add key value like object in a function
console.log(hello.myOwnProperty);


//function give us free object {} and that object is called is called prototype

console.log(hello.prototype);
console.log(typeof hello.prototype);

//only function provide property {free object}
if(hello.prototype){
    console.log("prototype is present");
}else{console.log("prototype is absent");}

//try object
const obj={key1:"value1"};
if(obj.prototype){
    console.log("prototype is present");
}else{console.log("prototype is absent");}

//try array
const a=[1,2,3];
if(a.prototype){
    console.log("prototype is present");
}else{console.log("prototype is absent");}

//how to add property in a prototype
hello.prototype.key1="value1";
hello.prototype.key2="value2";
hello.prototype.myFunc=function(){console.log("sing a song");}
console.log(hello.prototype);
hello.prototype.myFunc();


///proto              vs         prototype
// store reference              free object{}
// given by object              givem by function