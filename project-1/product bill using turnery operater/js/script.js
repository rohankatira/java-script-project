let product_name ="red lable tea";
let price = 250;
let Qty= prompt("Enter the amount of qty");
let total= Qty*price;
let discount;
let net_price;

discount=total>=1500?15/100:
         total>=1000? 10/100:
         total>=800? 8/100:
         "You are not eligible for discount";
net_price=total-(total*discount);
console.log("The name of the product is:-",product_name);
console.log("The max retail price of the product is:-",price);
console.log("The amount of quntity is:-",Qty);
console.log("The total amount is:-",total);
console.log("The amomunt of discount is:- ",discount);
console.log("The fine amount is:- ",net_price);




 