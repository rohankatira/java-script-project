let   grade;
let avg = parseInt(prompt("Please provide average"));

grade = avg>=80 ?'A':
        avg>=60 ?'B':
        avg>=50 ?'C':
        avg>=35 ?'D':
"Fail better luck next time";

console.log("The average is given:-",avg );
console.log("The grade is:- ",grade);
