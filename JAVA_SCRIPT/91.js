//static methods and properties
class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    //static method
    static info(){console.log("this is a class for person");}
    //static property
    static name="static property value";
    get fullName(){console.log(this.firstName,this.lastName);}
    set fullName(fullName){
        const [firstName,lastName]=fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
}
console.log(Person.name);
Person.info();