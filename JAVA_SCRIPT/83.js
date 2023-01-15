//new keyword
// function createUser(firstName,age){
//     this.firstName=firstName;
//     this.age=age;
// }
// const user1=new createUser("vinay",27);
// const user2=new createUser("sunny",27);
// console.log(user1);
// console.log(user2);

//new keyword
//1) create a empty object (this={})
//2) return the object
//3) and set the proto value equal to prototype of function (const user=Object.create(createUser.prototype);)
function CreateUser(firstName,lastName,email,age,address){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address;
}
CreateUser.prototype.about=function(){return `${this.firstName} is ${this.age} years old`};
CreateUser.prototype.is18=function(){return this.age>=18;};
const user1=new CreateUser("vinay","sharma","vinay@gmail.com",27,"HNo",)
console.log(user1);
console.log(user1.about());
console.log(user1.is18());

//variable start from capital then use new keyword for calling purpose convention

for(let key in user1){
        if(user1.hasOwnProperty(key)){
                console.log(key);
        }
}