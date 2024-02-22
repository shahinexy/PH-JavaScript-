// Arrow function 
const sum = (x,y) => x + y;
console.log(sum(5, 10));

// for single peramiter
const sum2 = x => x;
console.log(sum2('shahin'));

const multy = (x,y,z) => {
    const milty = x * y + z;
    return `the result is: ${milty}`;
}
console.log(multy(5, 10, 15));