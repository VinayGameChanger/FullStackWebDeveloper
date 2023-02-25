// // 5.1
// let btn=document.createElement('button');
// btn.innerText='Click Me';
// document.body.appendChild(btn)

// // 5.2
// document.title='change title';


// // 5.3
// let todo1='get groceries';
// let todo2='Wash Car';
// let todo3='Make dinner';

// let element= document.createElement('div');
// element.innerText=todo3;
// document.body.appendChild(element);

// element= document.createElement('div');
// element.innerText=todo2;
// document.body.appendChild(element);

// element= document.createElement('div');
// element.innerText=todo1;
// document.body.appendChild(element);

// 6.1
// function greeting(firstName){
//   alert("hello "+firstName);
// }

// greeting('vinay')

// 6.2

// function toUpper(str){
//   let up=str.toUpperCase();
//   alert(up)
// }

// toUpper('vinay')

//6.3

// function inchToCm(length){
//   alert(length*2.54)
// }
// inchToCm(50);

// 7
// 7.1

// function toUpper(arrayOfStr){
//    let UpperCaseArr= new Array(); //using constructor function
//    arrayOfStr.forEach((param)=>{
//     UpperCaseArr.push(param.toUpperCase())
//    })  
//    console.log(UpperCaseArr); 
// }

// toUpper(['vinay','sunny'])

// 7.2

// function arrayDouble(arr){
//   let double=[];
//   arr.forEach((param)=>{
//     double.push(param);
//     double.push(param);
//   })
//   console.log(double);
// }
// arrayDouble(['vinay','sharma'])

//7.3

// function arraySum(arrtoSum){
//   let total=0;
//   arrtoSum.forEach((param)=>{
//     total=total+param;
//   })
//   console.log(total);
// }

// arraySum([1,2,3])



// 8

// 8.1

// function change() {
//   let textBox = document.getElementById('todo-btn');
//   textBox.innerText = 'Done';
// }


//8.2
// let count=0;

// function plus1(){
//   let textBox=document.getElementById('counter');
//   count+=1;
//   textBox.innerText=count;
// }
// function minus1(){
//   let textBox=document.getElementById('counter');
//   count-=1;
//   textBox.innerText=count;
// }

// 8.4

// function save(){
//   let inputElement=document.querySelector('.add-note');
//   let outputElement=document.createElement('div');
//   outputElement.innerText=inputElement.value;
//   document.body.appendChild(outputElement);
// }

// 9

// let add=document.querySelector('.item1');
// console.log(add.innerText);


// const cart = document.querySelector('#cart');



// function add(data){
//   const newDiv =document.createElement('div');
//   newDiv.innerText=data;
//   cart.appendChild(newDiv)
// }

// function clearCart(){
//  cart.innerHTML="";
// }

// 9.2

// const inputData=document.querySelector('.txt-box');
// const outputData=document.querySelector('.result')
// const element=document.createElement('div');

// function convertCm(){
// element.innerText=(+inputData.value)*2.54;
// outputData.appendChild(element);
// }

// function convertInch(){
//   element.innerText=(+inputData.value)/2.54;
//   outputData.appendChild(element);
// }



// 10

// function cartTotal(cartArray){
//   let total=0;
//   cartArray.forEach((data)=>{
//     total=total+data.price;
//   })
//   console.log(total);
// }

// cartTotal([{name:'Apple',price:10},{name:'orange',price:55},{name:'banana',price:4}]);

//10.2

// const receipt = document.querySelector('.receipt');

// function displayReceipt(arrayOfObjData) {
//   let total=0;
//   arrayOfObjData.forEach((data) => {
//     let element = document.createElement('div');
//     element.innerText = data.name + " $" + data.price + '*' + data.qty+'= $' +data.price*data.qty;
//     receipt.appendChild(element);
//     total=total+(data.price*data.qty);
//   })
//   let cartTotal=document.createElement('div');
//   cartTotal.innerText='Cart total = $'+total;
//   receipt.appendChild(cartTotal);

// }
// displayReceipt([{
//   name: 'Apple',
//   price: 10,
//   qty: 5
// }, {
//   name: 'orange',
//   price: 55,
//   qty: 5
// }, {
//   name: 'banana',
//   price: 4,
//   qty: 5
// }])



// 11

function createCart(items){
let total=0;
// Object.keys return an array of keys
Object.keys(items).forEach((item)=>{
let element=document.createElement('div');
element.innerText=item;
document.body.appendChild(element);
})
}

createCart({apple:3,orange:5,egg:2})