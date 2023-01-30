const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading");

function changeText(element,text,color,delay){
    return new Promise((resolve,reject)=>
    setTimeout(()=>{
        if(element){
            element.textContent=text;
            element.style.color=color;
            resolve();
        }else{reject('element not found');}
        },delay)
        )
    }
//this changetext function wil return promise then we can apply then in returned promise
// changeText(heading1,"one","violet",1000).then(()=>{
//     return changeText(heading2,"two","indigo",1000)
// })
// .then(()=>{
//     return changeText(heading3,"three","blue",1000)
// })
// .then(()=>{
//     return changeText(heading4,"four","green",1000)
// })
// .then(()=>{
//     return changeText(heading5,"five","yellow",1000)
// })
// .then(()=>{
//     return changeText(heading6,"six","orange",1000)
// })
// .then(()=>{
//     return changeText(heading7,"seven","red",1000)
// })
//simpler if we use arrow and want to return in one line we can remove curly braces
changeText(heading1,"one","violet",1000)
    .then(()=> changeText(heading2,"two","indigo",1000))
    .then(()=> changeText(heading3,"three","blue",1000))
    .then(()=> changeText(heading4,"four","green",1000))
    .then(()=> changeText(heading5,"five","yellow",1000))
    .then(()=> changeText(heading6,"six","orange",1000))
    .then(()=> changeText(heading7,"seven","red",1000))
    .catch((error)=>alert(error))