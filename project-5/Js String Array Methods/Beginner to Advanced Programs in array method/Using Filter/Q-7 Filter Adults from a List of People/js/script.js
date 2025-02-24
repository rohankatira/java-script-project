const person = [{ name: "Richa", age: 18 }, { name: "Dhruv", age: 16 }, { name: "Rohan", age: 21 }];
const adults = person.filter(person => person.age >= 18);
console.log(adults);