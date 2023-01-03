//for loop examples

//sum of first n natural no

let sum=0;
let n=40;
for(var i=0;i<=n;i++){
    sum=sum+i;
}
console.log(`value of i is ${i}`);//no error because var is global scope
console.log(sum);