let number = prompt("please provide a number");
document.write("the number that is provide by the user is:-"+number+"<br/>");

if(number % 3 === 0){
    if(number % 5 === 0){
    document.write(number+" :- is divisible by both 3 and 5 ."+"<br/>");       
    }else{
        document.write(number+" :- is divisible by 3 but not by 5."+"<br/>");
    }
} else{
    document.write(number + " is not divisible by 3"+"<br/>");
}