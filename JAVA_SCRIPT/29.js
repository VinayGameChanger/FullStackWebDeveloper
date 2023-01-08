//Clone array

//how to concatenate two arrays

let array1=["item1","item2"];
let array2=array1;
console.log(array2===array1);//both are same array with same memory address(or pointer) so cloning failed 

console.log("Using copy paste in new array");

//Clone method 1 (create a new array)
let array3=["item3","item4"];
let array4=["item3","item4"];
console.log(array3===array4);//false as expected

console.log("Using slice");

//Clone method 2(Using slice method)
let array5=["item1","item2"];
let array6=array5.slice(0);
console.log(array5===array6);

console.log("Using spread operator");

//Clone method 3(using spread operator)
let array7=["item1","item2"];
let array8=[...array7];
console.log(array7===array8);
console.log(array7,array8);

console.log("Using concat");
//Clone method 4(using concat)
let array9=["item1","item2"];
let array10=[].concat(array9);
console.log(array9===array10);
console.log(array9,array10);


//how to add extra element after cloning
console.log("Add extra element after cloning");
console.log("Using slice and concat");
let array11=array10.slice(0).concat("itemx")
console.log(array11);

console.log("Add extra using spread operator");
let array12=[...array11,"itemY"];
console.log(array12);

console.log("Another method using concat");
let array13=["itemZ"].concat(array12);
console.log(array13);

