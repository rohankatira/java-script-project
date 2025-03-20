// Static constructor

class my_info{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static defult() {
        return new my_info ("Rohan",21);
    }
}
let object = my_info.defult();
console.log(object.name);
console.log(object.age);
