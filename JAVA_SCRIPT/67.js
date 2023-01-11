//sets(it is also iterables)
//store data
//sets also have its own methods
//no index based access
//order is not guaratedd
//unique items only(no duplicates)

const numbers=new Set([1,2,3,1]);
console.log(numbers);
console.log(numbers[1]);//no index based access

//how to store data in empty set
const a=new Set();
const items=["itemX","itemY"]
a.add(1)
a.add(2)
a.add(5)
a.add(11)
a.add(3)
a.add(1)
a.add(["item1","item2"])
a.add(items)
console.log(a);

//to check if an element is present in a Set

console.log(a.has(1));
console.log(numbers.has(5));

console.log("Sets is iterable");
for(let element of a){console.log(element);}

//realistics example= to make collection of unique ids
//to find unique element of an array
const myArray=[1,2,7,7,1,6,9,4,5,8,65,7,1,1,];
const uniqueElement=new Set(myArray);
console.log(uniqueElement);

//to find length of set
let length=0;
for(let element of uniqueElement){
    // length=length+1;
    length++;
}
console.log(length);


