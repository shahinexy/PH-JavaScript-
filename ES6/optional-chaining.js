const user = {
    id: 4231,
    name : 'shahin',
    address: {
        city: 'Narayanganj',
        street: {
            first: 'rgb road 12',
            second: 'adamjee'
        },
        country: 'Bangladesh'
    }
}
console.log(user.address.street.first);
console.log('==================');

const user2 = {
    id: 4231,
    name : 'shahin',
    address: {
        city: 'Narayanganj',
        country: 'Bangladesh'
    }
}
// ========== optional chaining ============
// it will show an error 
// console.log(user2.address.street.first);

// corret answe. it did not show any error it return an undefined.
console.log(user2.address.street?.first);