//function returning function

function myFunc(){
    const myFunc2=()=>{console.log("hello world");};
    return myFunc2;
}
const ans =myFunc();
console.log(ans);
ans();