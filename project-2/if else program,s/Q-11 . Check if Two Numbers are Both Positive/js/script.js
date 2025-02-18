let first_value = prompt("Enter the First value:");
let Second_value = prompt("Enter the Second value:");

if(first_value>0)
{
    if(Second_value>0)
    {
        console.log("A and B both are positive.")
    }
    else
    {
        console.log("A is Positive but B is not Positive.")
    }
}
else
{
    console.log("A is not positive");
}