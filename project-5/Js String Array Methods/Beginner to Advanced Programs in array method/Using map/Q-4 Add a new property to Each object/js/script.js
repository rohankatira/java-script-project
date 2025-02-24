const students_details = [{ name: "Rohan", age: 21}, {name: "Rushab" ,age: 22}, {name: "Rudra" ,age: 19}];
const Update_student_grade = students_details.map(students_details =>({...students_details, grade: "A"}));
console.log(Update_student_grade);
