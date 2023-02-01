export default class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.age=age;
        this.lastName=lastName;
    }
    info(){
        console.log(this.firstName,this.lastName,this.age)
    }
}
export class Person2{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.age=age;
        this.lastName=lastName;
    }
    info(){
        console.log(this.firstName,this.lastName,this.age)
    }
}
//we cannot export duplicate default export
//we can avoid {} and also use any variable at import file
