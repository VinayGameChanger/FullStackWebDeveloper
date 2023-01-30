//promise
//old name-future
//promise is that value which current doesnot known present but to be known in future

//produce promise
console.log("script start");

const bucket=['coffe','chips','vegetables','salt','rice'];
const friedRicePromise= new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&&bucket.includes("rice")&&bucket.includes("salt")){
        resolve("fried rice")
    }
    else{
        reject("couldnot cook it")
    }
})

//consume promise
//how to consume
//method1
// friedRicePromise.then(
//     //jab promise resolve hoga
//     (myFriedrice)=>{console.log('lets eat',myFriedrice);}
//     ,
//     //jab promise reject hoga
//     (error)=>{console.log(error);}
//     )

//method2
friedRicePromise.then(
    (myFriedrice)=>{console.log(myFriedrice);}
).catch((error)=>{console.log(error);}) 

setTimeout(()=>{
    console.log("Hello from setTimeout");
},0)

for(let i=0;i<=100;i++){
    console.log(Math.random());
}

console.log("script end");