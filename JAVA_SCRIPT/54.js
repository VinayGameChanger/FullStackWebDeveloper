//callback functions
//if input of a function is function then this is called call back function

const myFunc2=(name)=>{
    console.log("Inside my func2");
    console.log(name);
}

const myFunc=function(callback){
    console.log("inside myFunc");
    callback("vinay");
}

myFunc(myFunc2);