class animal {
    constructor() {
        console.log("Making noise");
        
    }
}
class Cat extends animal{
constructor(){
    super()
    console.log("Cat is meow");
}

}
const cat = new Cat() 