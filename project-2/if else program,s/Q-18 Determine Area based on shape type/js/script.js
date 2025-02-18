let shape = 'circle'
let area = 0;

if(shape === 'circle')
{
    let radius = 4;
    area = Math.PI * radius * radius;
    console.log("Area of the circle is: " + area.toFixed(2));
} else if(shape === "rectange")
{
    let length = 10;
    let width = 3;
    area = length * width;
    console.log("Area of the rectangle is: " + area);
}
else
{
    console.log("shape is not recognized.");
}