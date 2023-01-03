//break keyword and continue keyword


//break keyword

for(let i=0;i<=20;i++){
    if(i===10){
        break;
    }
    console.log(i);
}
console.log("break keyword break the loop and we are outside of the loop");

//continue keyword
for(let i=0;i<=20;i++){
    if(i===10){
        console.log("continue jumps the loop to the start");
        continue;
    }
    console.log(i);
}