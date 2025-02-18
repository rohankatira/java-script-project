function multiply(factor){
    return function(number){
        return number*factor;
    };
}
const num =multiply(2);
console.log(num(5));
