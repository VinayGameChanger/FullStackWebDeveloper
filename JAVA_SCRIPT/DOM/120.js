//intro to events
//-kuch kaam hona ya kuch action hona example press a button

//click

//event add karne ke teen tarike hai
//first Method using attribute adddition in html file onclick="console.log("You Clicked Me !!!")"


//second Method
// const btn=document.querySelector(".btn-headline")
// console.dir(btn);
// btn.onclick=function(){console.log("You Clicked Me !!!");}

//third Method
const btn=document.querySelector(".btn-headline")
// function clickMe(){console.log("You clicked me");}
// btn.addEventListener("click",clickMe)

// using arrow function
btn.addEventListener("click",()=>console.log("You clicked Me"))


