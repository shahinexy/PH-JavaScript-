const products = [
    { id: 1, name: 'lenevo', price: 65000, },
    { id: 2, name: 'ph', price: 60000, },
    { id: 3, name: 'dell', price: 45000, },
    { id: 4, name: 'mac', price: 115000, }
]
// map 
const getName = products.map(product => product.name)
console.log(getName);
console.log('=====================');

// forEach
const getId = products.forEach(p => console.log(p.id))
console.log('======================');

// filter
const getprice = products.filter(product => product.price >= 62000)
console.log(getprice);
console.log('==================');

//find
const find = products.find(p => p.price < 65000);
console.log(find);
console.log('====================');

// reduce 
const reduce = products.reduce((previous,current) => previous + current.price ,0);
console.log(reduce);