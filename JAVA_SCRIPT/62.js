//every method

const numbers=[2,4,6,8,10];
console.log(numbers.every((a)=>a%2===0));

//every return a booleans true or false if callback return true or false for each case


//realistic example

const userCart=[
    {productId:01,productName:"phone",price:4000},
    {productId:02,productName:"AC",price:22000},
    {productId:03,productName:"TV",price:5000},
]

console.log(userCart.every((item)=>item.price<100000));