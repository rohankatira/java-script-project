let principle_amount= prompt("Enter the principle amount");
let rate_of_intrest;
let years =prompt("Enter the number' of years");
let simple_intrest;

rate_of_intrest = principle_amount>=500000 ? 12/100:
                    principle_amount>=350000 ? 9/100:
                    principle_amount>=250000 ? 9/100:
                    3/100;

simple_intrest=principle_amount*rate_of_intrest*years;
console.log("The priciple amount is:-", principle_amount);
console.log("The rate of intrest is:-",rate_of_intrest);
console.log("Number of years is :-",years);
console.log("The simple Interest is:-",simple_intrest);



