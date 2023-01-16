//closure Application

//(a) function return (b) function
//if we call (a) function it return hi,you called me if we call again it return paresan matt kar baar baar

function func(){
    let counter=0;
    return function(){
        if (counter==0){console.log("You called me");
    counter++;}else console.log("paresan matt kar");
    }
}
const ans=func();
ans();
ans();