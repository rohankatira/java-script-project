let citizen_age = prompt ("Enter your age:-");
let is_citizen = true;

if(citizen_age>= 18)
    {
    
        if(is_citizen)
        {
            console.log("It is eligible to vote");
        }
        else
        {
            console.log("You must be a citizen to vote.");
        }
    }
    else{
        console.log("you are not old enough to vote.");
    }