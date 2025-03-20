// METHOD OVERRIDING

class animal{
    constructor (name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} Makes a noise`);      
    }
}
class Cat extends animal {
   
    speak(){
        console.log(`${this.name} meow `);
        
    }
}

const cat = new Cat("Bella")
cat.speak();