function myFunction(x,y){
    sum = x+y;
    return sum;
}
console.log(myFunction(10,20));
console.log(myFunction(13,40));
console.log(myFunction(354,453));

console.log('========================');

// Check it out difrent somthing.(arguments)
function add( x, y){
    console.log(x,y);
    console.log(arguments);
    console.log(arguments[2]);
}
add(10,20,45,60,23);