class Employee {
  constructor() {
    this.E_name = "";
    this.salary = "";
    this.age = "";
  }
  E_details(name, salary, age) {
    this.E_name = name;
    this.salary = salary;
    this.age = age;

    this.get_e_details();
  }

  get_e_details() {
    console.log(`Employee name is ${this.E_name}`);
    console.log(`Employee Salary is ${this.salary}`);
    console.log(`Employee Age is ${this.age}`);
  }
}

class Salary_of_employee extends Employee {
  constructor() {
    super();
    this.E_Hra = "";
    this.E_Ma = "";
    this.E_Pf = "";
  }
  E_salary_details(Hra, mda, pf) {
    this.E_Hra = Hra;
    this.salary = mda;
    this.age = pf;
    this.net_salary= Hra + mda - pf;
    this.gross_salary= this.salary + this.net_salary;
    
    this. get_e_salary_details();
  }
  get_e_salary_details() {
    console.log(`Employee Net salary is ${this.net_salary}`);
    console.log(`Employee Salary is ${this.gross_salary}`);
    
  }
}
const obj = new Salary_of_employee();

obj.E_details("Rohan", 75000, 21);
obj.E_salary_details(5000,3000,1500);
