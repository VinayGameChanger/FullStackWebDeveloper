//loop



//getElementByTagName
// let allAnchorTag=document.getElementsByTagName("a");
// console.log(allAnchorTag);


//for HTMLCollection
// simple for loop
// for(let i=0;i<allAnchorTag.length;i++){
//     allAnchorTag[i].style.color="red";
//     allAnchorTag[i].style.backgroundColor='white';
// }
//for of loop
// for(let nav of allAnchorTag){
//     nav.style.color="red";
//     nav.style.backgroundColor="white";
// }
//we cant use forEach method for to iterate through HTMLCollection
//but we can convert HTMLVollection to array then apply forEach
// allAnchorTag=Array.from(allAnchorTag);

// console.log(Array.isArray(allAnchorTag));
// allAnchorTag.forEach(element => {
//     element.style.color="red";
//     element.style.backgroundColor="white";
// });

// For node list
const navItems=document.querySelectorAll("a");
console.log(navItems);
// simple for loop
// for(let i=0;i<navItems.length;i++){
//     navItems[i].style.color="red";
//     navItems[i].style.backgroundColor='white';
// }
// for of loop
// for(let nav of navItems){
//     nav.style.color="red";
//     nav.style.backgroundColor="white";
// }

//forEach
navItems.forEach(element => {
    element.style.color="red";
    element.style.backgroundColor="white";
});

