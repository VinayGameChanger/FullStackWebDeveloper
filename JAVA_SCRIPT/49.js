//lexical scope
//lexical environment where function is defined

const myVar="value1";
const myApp=()=>{
    const myFunc=()=>{
        const myVar="value69";
        console.log("inside myFunc",myVar);
    }
    console.log("inside myApp",myVar);
    myFunc();
}
myApp();