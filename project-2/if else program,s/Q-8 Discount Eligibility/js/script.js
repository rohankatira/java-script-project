let isMember = true;
let spending = prompt("Enter your spandings");

if(isMember)
{
    if(spending > 100)
    {
        console.log("you got 20% discount");
    }
    else
    {
        console.log("you got 10% discount");
    }  
}
else
{
    console.log("No discount available for non-members.");
}