class animal {
    constructor(name){
        this.name =name
    }

    info(){
        console.log(`${this.name} is a labrador`);
        
    }
}

class Dog extends animal{

    info(){
        console.log(`${this.name} is ready for a walk`);
        
    }
}

const dog = new Dog ("Graffy")

dog.info()