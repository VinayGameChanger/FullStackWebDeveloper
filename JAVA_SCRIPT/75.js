//arrow function
const user1={
    name:"vinay",
    age:27,
    about:()=>{
        console.log(this);
        console.log(this.name,this.age);
    }
}
user1.about();
//arrow function take this from sourrounding or global function and we cannot change this from call 