//this keyword
const btn=document.querySelector(".btn-headline")

btn.addEventListener("click",function(){console.log("You Clicked Me");
console.log("Value of this");
console.log(this);})