//promise.resolve
//promise chaining

const myPromise=Promise.resolve(5);
// The promise.resolve() method in JS returns a Promise object that is resolved with a given value(5)

myPromise.then((value)=>{
    console.log(value);
})

// then()==it always return promise always even if you return something else

// function myPromise(){
//     return new Promise((resolve,reject)=>{
// resolve('vinay');
//     })
// }

// myPromise().then((value)=>
// {console.log(value);
// value=value+" sharma";
// return value;})
// //as we know that then() always return a promise then we can again apply then in returned promise
// .then((value)=>{
//     console.log(value);
//     value+=' is a good boy';
//     return value;
// })
// .then(value=>console.log(value))