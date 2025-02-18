function user_input(callback){
    let name = "Rohan";
    callback(name);
}
user_input(function (name){
    console.log("Hello, " + name);
});