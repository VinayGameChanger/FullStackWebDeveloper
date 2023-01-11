//reduce method

const numbers=[5,2,8,4,5];

//aim: sum of the number

const sum=numbers.reduce((accumulator,cuurentValue)=>{return accumulator+cuurentValue;},0);
console.log(sum);

//accumulator      currentValue   return
//0(initial value) 5               5
//5                2               7           
//7                8              15           
//15               4              19           
//19               5         24 (final ans)         

//add price of cart

const userCart=[
    {productId:01,productName:"phone",price:4000},
    {productId:02,productName:"AC",price:22000},
    {productId:03,productName:"TV",price:5000},
]
const totalPrice=userCart.reduce((total,{price})=>
{return total+price;},0);
console.log(totalPrice);