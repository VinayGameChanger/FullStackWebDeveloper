//function inside function

function app(){
    console.log("Hello from app function");
    const multiply=(a,b)=>a*b;
    const add=function(a,b){return a+b;}
    console.log(multiply(3,5));
    console.log(add(3,5));
}
app();