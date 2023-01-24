const allButtons=document.querySelectorAll(".my-button button")
console.log("script start");
console.log(allButtons);

allButtons.forEach((button)=>{button.addEventListener("click",(e)=>{
    let num=0;
    for(let i=0;i<=100000000;i++){
        num +=i;
    }
    console.log(e.currentTarget.textContent,num);
})})
let outVar=0;
for(let i=0;i<=100000000;i++){
    outVar +=i;
}
console.log("value of outer var",outVar);
console.log("script end");

