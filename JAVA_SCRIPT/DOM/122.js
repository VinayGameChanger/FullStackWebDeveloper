const allButton=document.querySelectorAll("button");
console.log(allButton);

// for(let i=0;i<allButton.length;i++){
// allButton[i].addEventListener("click",function(){
//     console.log(this.textContent);
// })
// }

//forEach
allButton.forEach(function(button){
button.addEventListener("click",function(){
    console.log(this.textContent);})
})
