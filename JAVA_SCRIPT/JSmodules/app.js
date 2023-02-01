import { firstName as fName } from "./utils/fName.js";
import { age } from "./utils/age.js";
import Person,{Person2} from "./utils/person.js"
console.log(fName,age);
const person=new Person("sunny","riyar",22)
console.log(person);
person.info()