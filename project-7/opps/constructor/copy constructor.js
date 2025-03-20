// COPY CONSTRUCTOR

class personal{

    constructor(name,age){

        this.name = name;
        this.age = age;
    }

    copy(){
        console.log("copy of personal_info");
        
        return new personal(this.name, this.age);
      
    }

    personal_info(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}
const person = new personal ("Rohan",21)
person.personal_info()

const person_copy = person.copy()
console.log(person_copy.name);
console.log(person_copy.age);



