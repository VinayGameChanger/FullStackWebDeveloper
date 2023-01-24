//little practise with click event
const allButtons=document.querySelectorAll("button")
console.log(allButtons);

allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.target.style.color="red";
        e.target.style.backgroundColor="yellow";
    })
})