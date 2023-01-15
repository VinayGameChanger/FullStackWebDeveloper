//we can store the user method in the prototype of createUser function
function createUser(firstName,lastName,email,age,address){
    const user=Object.create(createUser.prototype);
        user.firstName=firstName;
        user.lastName=lastName;
        user.email=email;
        user.age=age;
        user.address=address;
        return user;
}
createUser.prototype.about=function(){return `${this.firstName} is ${this.age} years old`};
createUser.prototype.is18=function(){return this.age>=18;};

const user1=createUser("vinay","sharma","vinay@gmail.com",27,"HNo",)
console.log(user1);
console.log(createUser.prototype);
console.log(user1.about());
console.log(user1.is18());