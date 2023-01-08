//default parameter

//settind default value using old method
const add=(a,b)=>{
    if(typeof b==="undefined"){
        b=1;
    }
    return a+b;
}

//new method

const multiply=function(a,b=0){
    return a*b;
}

console.log(multiply(4,5));
console.log(multiply(4));