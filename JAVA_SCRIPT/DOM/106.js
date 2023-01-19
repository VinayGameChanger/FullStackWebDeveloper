//change the style of element
// const mainHeading=document.querySelector("#main-heading") //1st way/

const mainHeading=document.querySelector("div.headline h2")
console.log(mainHeading.style);
mainHeading.style.color="red";
mainHeading.style.backgroundColor="white";
mainHeading.style.border="4px solid green";