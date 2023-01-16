//lexical environement and scope chain

const lastName="sharma";

const printName=function(){
    const firstName="vinay";
    console.log(firstName);
    console.log(lastName);
}
printName();