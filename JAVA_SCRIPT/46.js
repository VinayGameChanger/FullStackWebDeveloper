//arrow function


//function declaration

// function singHappyBirthday(){
//     console.log("Happy Birthday to You...");
//     }
//function expression

// const singHappyBirthday=function(){console.log("Happy Birthday to You...");}

//arrow function
const singHappyBirthday=()=>{
    console.log("Happy Birthday to You...");
}
singHappyBirthday();


const addition=(a,b,c)=>{
    return a+b+c;
}
console.log(addition(4,5,44));

const oddEven=(a)=>{
    return a%2===0;
}
console.log(oddEven(5));

const firstCharacter=(a)=>{
    return a[0];
}
console.log(firstCharacter("vinay"));

const search=(myArray,element)=>{
    for(let i=0;i<myArray.length;i++){
        if(myArray[i]===element){
            return console.log(i);
        }
    }return console.log("Not Found");
}
search([4,8,77],77);