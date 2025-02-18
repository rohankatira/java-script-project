let num = prompt("Enter the number:-"), 
is_prime = true,i;
console.log(" The number is :-", num);

for(i = 2; i<= Math.sqrt(num); i++){
    if(num % i === 0) {
        is_prime = false;
        break;
    }
}
console.log(num, "is Prime:", is_prime);