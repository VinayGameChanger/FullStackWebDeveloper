//keypress event

const body=document.body;

// body.addEventListener("keypress",(event)=>{
//     console.log(event.key);
// })


//mouseover event
const mainButton=document.querySelector(".btn-headline");
console.log(mainButton);
mainButton.addEventListener("mouseover",()=>{
    console.log("Mouseover event occured");
})
mainButton.addEventListener("mouseleave",()=>{
    console.log("Mouseleave event occured");
})