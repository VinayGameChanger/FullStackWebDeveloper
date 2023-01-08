//rest parameters
// function myFunc(a,b,...c){
//     console.log("value of a is ",a);
//     console.log("value of b is ",b);
//     console.log("value of c is ",c);
// }
// myFunc(1,4,66,3,5443,4);

//add all function

let total=0;
function addAll(...a){
    for(let key of a){
        total=total+key; 
    }
    return total;
}
console.log(addAll(1,2,5,77));