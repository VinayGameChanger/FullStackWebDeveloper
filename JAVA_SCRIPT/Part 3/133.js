//callbacks callback hell pyramid of doom
//asynchronous programming


const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");

// setTimeout(()=>{
//     heading1.textContent="Heading 1";
//     heading1.style.color="violet"},1000)

// setTimeout(()=>{
//     heading2.textContent="Heading 2";
//     heading2.style.color="indigo"},2000)

//2nd method

// callback hell- so many nested
// setTimeout(()=>{
//     heading1.textContent="One";
//     heading1.style.color="violet"
//     setTimeout(()=>{
//         heading2.textContent="Two";
//         heading2.style.color="indigo"
//         setTimeout(()=>{
//             heading3.textContent="Three";
//             heading3.style.color="blue"
//             setTimeout(()=>{
//                 heading4.textContent="Four";
//                 heading4.style.color="green"
//                 setTimeout(()=>{
//                     heading5.textContent="Five";
//                     heading5.style.color="yellow"
//                     setTimeout(()=>{
//                         heading6.textContent="Six";
//                         heading6.style.color="orange"
//                         setTimeout(()=>{
//                             heading7.textContent="Seven";
//                             heading7.style.color="red"},1000)},1000)},1000)},1000)},1000)},1000)},1000)

//3rd method using function

function changeText(element,text,color,delay,onSucessCallback,onFailureCallback){
    setTimeout(()=>{
    if(element){
        element.textContent=text;
        element.style.color=color;
        if(onSucessCallback){
            onSucessCallback();
        }
    }else{
        if(onFailureCallback){
             onFailureCallback() 
           }
    }

    },delay)

}
//callback hell  pyramid doom
changeText(heading1,"one","violet",2000,()=>{
    changeText(heading2,"two","indigo",2000,()=>{
        changeText(heading3,"three","blue",2000,()=>{
            changeText(heading4,"four","green",2000,()=>{
                changeText(heading5,"five","yellow",2000,()=>{
                    changeText(heading6,"six","orange",2000,()=>{
                        changeText(heading7,"seven","red",2000,()=>{
                        },
                        ()=>{console.log("element does not exist");})},
                    ()=>{console.log("element does not exist");})},
                ()=>{console.log("element does not exist");})},
            ()=>{console.log("element does not exist");})},
        ()=>{console.log("element does not exist");})},
    ()=>{console.log("element does not exist");})},
()=>{console.log("element does not exist");})