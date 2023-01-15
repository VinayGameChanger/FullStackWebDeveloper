//ES-6/2015
//class keyword-
//in javascript classes are fake



// function CreateUser(firstName,lastName,email,age,address){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.email=email;
//     this.age=age;
//     this.address=address;
// }
// CreateUser.prototype.about=function(){return `${this.firstName} is ${this.age} years old`};

// CreateUser.prototype.is18=function(){return this.age>=18;};


//using class function

class CreateUser{
    constructor(firstName,lastName,email,age,address){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address;
    }
    about(){return `${this.firstName} is ${this.age} years old`};
    is18(){return this.age>=18;};
}
const user1=new CreateUser("vinay","sharma","vinay@gmail.com",27,"HNo",)

//without new cannot we called class constructor
console.log(user1);
for(let key in user1){
    console.log(key);
}
console.log(user1.about());
console.log(user1.is18());
console.log(CreateUser.prototype);
console.log(Object.getPrototypeOf(user1));