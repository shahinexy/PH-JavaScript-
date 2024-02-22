// destructure in object
const person = {
    name : 'shahin',
    age : 19,
    id : 24321,
}
// you can access as the same key name and you can change the key name
const {name , age : boyos} = person;
console.log(name);
console.log(boyos);
console.log('================');

// destructure in array
const array = [5,10]
const [x,y] = array;
console.log(x);
console.log(y);
console.log('==========');

const [a,b] = [20,30];
console.log(a);
console.log(b);
console.log('=============');

// destructure in function
function dobule(a,b){
    return [a*2, b*2];
}
const [firsst, second] = dobule(5,10);
console.log(firsst, second);
console.log(firsst);
console.log(second);