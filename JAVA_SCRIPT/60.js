//sort method
//sort is mutable

//ascii table
//char : acii value

const numbers=[5,19,18,66,505,2];
//1st method
numbers.sort();
console.log(numbers);
//it sort assuming number as integer and than using ascii tables
//not suitable for sorting numbers

//2nd method using callback
numbers.sort((a,b)=>{return a-b;})
console.log(numbers);
//explanation
//for ascending order return a-b; 
//for descending order return b-a; 
//(a,b) a-b------>positive(b,a)
//(a,b) a-b------>negative)(a,b)

const userNames=['vinay','ajay','abcd','sunny','raj','ABC'];
userNames.sort();
console.log(userNames);
//dictionary good


//real life examples
const userCart=[
    {productId:01,productName:"phone",price:4000},
    {productId:02,productName:"AC",price:200},
    {productId:03,productName:"TV",price:50},
    {productId:04,productName:"A",price:10},
]
//product low to high

const lowToHigh=[...userCart].sort((a,b)=>{return (a.price-b.price)})
console.log(userCart);
console.log(lowToHigh);





