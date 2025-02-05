let employee_Name = prompt("Enter the Employee Name");
let employee_salary = prompt("Enter the salary");
let experience = prompt("Enter the experience");
let role="Faculty"
let HRA = 0.50;
let MA = 0.15;
let TA = 0.08;
let DA = 0.08;
let PF = 0.12;
let PT = 200;
let TDS = 0.10;
let gross_salary = employee_salary*(1 + HRA + MA + DA + TA);
let Final_salary = gross_salary -(gross_salary * PF) - (gross_salary * TDS) - PT;
let Bonus;
let Bonus_salary;


Bonus = Final_salary >= 25000 && experience>= 5 ? 50/100 :
        Final_salary >= 20000 && experience>= 3 ? 35/100 :
        Final_salary >= 15000 && experience>= 2 ? 20/100 :
        10/100;

        Bonus = Final_salary * Bonus;
        Bonus_salary = Final_salary +Bonus;

console.log("The employee name is:- ",employee_Name);
console.log("The emoloyee salary is:-",employee_salary);
console.log("The role of employee in company is:- ",role);
console.log("The Experience of employee in company is:-",experience);
console.log("The House Rent Allowance is:-",HRA);
console.log("The Medical Allowance is:-",MA);
console.log("The Travelling Allowance is:-",TA);
console.log("The Dearness Allowance is:-",DA);
console.log("The Provident Funds is:-",PF);
console.log("The Professioal Tax is:-",PT);
console.log("Tax Deducted at Source is:-",TDS);
console.log("The Gross Salary is:-",gross_salary);
console.log("The Final Salary is:-", Final_salary);
console.log("The Bonus in salary is:-",Bonus);
console.log("Bonus + Salary The bonus salary is :-",Bonus_salary);