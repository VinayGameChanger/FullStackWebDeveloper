//function return promise

function ricePromise(){
    const bucket=['coffe','chips','vegetables','salt','rice'];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables")&&bucket.includes("rice")&&bucket.includes("salt")){
            resolve("fried rice")
        }
        else{
            reject("couldnot cook it")
        }
    })
}
ricePromise().then(
    (myFriedrice)=>{console.log(myFriedrice);}
    ).catch(
        (error)=>{console.log(error);})