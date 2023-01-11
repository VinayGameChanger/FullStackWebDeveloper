//some method
const numbers=[4,8,9,70,10];

//kya ek bhi number asa hai jo odd hai

console.log(numbers.some((a)=>a%2!==0))

//realistic example


const userCart=[
    {productId:01,productName:"phone",price:4000},
    {productId:02,productName:"AC",price:22000},
    {productId:03,productName:"TV",price:5000},
    {productId:03,productName:"macbook",price:250000},
]
//koi bhi item ek lakh se mehenga hai

console.log(userCart.some(({price})=>price>100000));