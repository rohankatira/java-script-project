// CALL PARENT CLASS CONSTRUCTOR THROUGH CHILD CLASS

class animal {
    constructor() {
        console.log("Making noise");
        
    }
}
class Cat extends animal{

}
const cat = new Cat() 