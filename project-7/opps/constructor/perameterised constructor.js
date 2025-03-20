// PERAMETERISED CONSTRUCTOR

class personal{

    constructor(name,age){
        this.name = name
        this.age = age;
    }

    personal_info(){
        console.log(`My self ${this.name} and my age is ${this.age}`);
        
    }
}
const person = new personal("Rohan", 21)
person.personal_info()