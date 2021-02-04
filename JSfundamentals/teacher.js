
import { Person } from './person';
export class Teacher extends Person {

    
    constructor(name,degree){
    // when adding a constructor to a child Class you have to call the super()
    super(name);
    this.degree = degree
   
    }
    teach() {
        console.log("teach")
    }


}