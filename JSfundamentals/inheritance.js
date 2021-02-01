

// when having an object with more than one method create a "blue print to create objects of that type";

class Person {
    constructor(name) {
        this.name = name
    }
    walk() {
    console.log(walk);
}
}

// to create an object using the class or "blueprint" you must define it as "new"
// use the new Person (parameter) to add the new constructor





// new Teacher inherits the constructor from  Person
class Teacher extends Person {

    
    constructor(name,degree){
    // when adding a constructor to a child Class you have to call the super()
    super(name);
    this.degree = degree
   
    }
    teach() {
        console.log("teach")
    }


}
// adding the (parameter) willo give it the constructor of name

const teacher = new Teacher('Bobby', "Programmer");
console.log(Teacher)