let prime_candidate = prompt ("Enter the value")
let is_prime = true;

if(prime_candidate <= 1){
    is_prime = false;
} else {
    for(let i = 2; i < prime_candidate; i++){
        if(prime_candidate % i === 0){
            is_prime = false;
            break;
        }
    }
}
if(is_prime){
    console.log(prime_candidate + " is the prime number.");
} else {
    console.log(prime_candidate + "is not an prime number.");   
}