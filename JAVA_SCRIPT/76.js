// const user1={
//     name:"vinay",
//     age:27,
//     about:function(){
//         console.log(this.name,this.age);
//     }
// }

//short syntax of method
const user1={
    name:"vinay",
    age:27,
    about(){
        console.log(this.name,this.age);
    }
}
user1.about()