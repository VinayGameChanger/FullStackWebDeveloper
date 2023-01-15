//getter and setter
class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get fullName(){console.log(this.firstName,this.lastName);}
    set fullName(fullName){
        const [firstName,lastName]=fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

//split give a array of splits items
const person1= new Person("vinay","sharma",27);
console.log(person1);

//we call method (person.fullName()) but not property (person.firstName)
//how to method as property use get
person1.fullName;//now it become a property

console.log(person1.firstName);
console.log(person1.lastName);

//using set method

person1.fullName="sunny riyar";
console.log(person1.firstName);
console.log(person1.lastName);