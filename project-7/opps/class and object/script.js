class student{

    constructor(id,name,course,sub_course,average,duration){
        this.student_id= id;
        this.student_name = name;
        this.student_course= course; 
        this.student_sub_course = sub_course
        this.student_average= average;
        this.student_Duration = duration   
    }

    student_details(){
        console.log("GR:ID " + this.student_id);

        console.log("Name:- " + this.student_name);

        console.log("Course:- " + this.student_course);

        console.log("Sub course:- " + this.student_sub_course);

        console.log("Average:- " + this.student_average);

        console.log("Duration:- " + this.student_Duration);

        console.log("  ");
        
    }
}

let student_1 = new student(7348, "Rushabh","Full_stack_developer","C language", "96%","1.5 Years");
let student_2 = new student(7962, "Rudra","Full_stack_developer","Bootstrap", "89%","1.5 Years");
let student_3 = new student(7900, "Rohan","Full_stack_developer","IPDC", "95%","1.5 Years");
let student_4 = new student(7000, "Millan","Full_stack_developer","Html/Css", "95%","1.5 Years");


student_1.student_details()
student_2.student_details()
student_3.student_details()
student_4.student_details()