// && or || operator

//primitive method

let firstName="Vinay";
let age=27;

if (firstName[0]==="V"){
    console.log("Your name starts with V");
}
if(age>=18){
    console.log("You are above 18");
}

//&& and || operator method

if(firstName[0]==="V" && age>=18){
    console.log("You name starts with V and you are above 18");
}else{console.log("Inside Else");}


if(firstName[0]==="A" || age>=18){
    console.log("Inside If");
}else{console.log("Inside Else");}