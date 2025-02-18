let customer_Age = prompt ( "Enter your age");
let isMemberstatus = true;
let purchase_Amt = prompt ("Enter purchase amount");

console.log("customer age is:-",customer_Age);
console.log("purchase amount is :-",purchase_Amt);


if(customer_Age >= 25 && isMemberstatus && purchase_Amt >=200)
{
    console.log("Congratulations! You qualify for our special offer.")
}
else
{
    console.log("Sorry, you do not qualify for the special offer.");
}