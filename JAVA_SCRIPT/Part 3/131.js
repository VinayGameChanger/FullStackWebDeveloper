//setInterval()

// console.log("script Start");
// setInterval(()=>{
//     console.log(Math.random());
// },2000)
// console.log("Script End");

//setInterval.html
const body=document.body;
const btn=document.querySelector(".btn")

const setId=setInterval(()=>{
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);
    const color=`rgb(${red},${green},${blue})`
    body.style.background=color;
},1000)

btn.addEventListener("click",()=>{
    clearInterval(setId);
    btn.textContent=body.style.background
})