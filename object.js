const person = {
    Name : 'Shahin',
    age : 19,
    isStudent : true,
    groupSubject : ['math','physices','chemistry','biology'],
    siblings : {
        Brother : 1,
        Sister : 3,
    },
    'present address' : 'narayanganj',
    id : 23112,
}
console.log(person);
console.log(person.Name);
console.log(person['age']);
console.log(person.siblings.Sister);
// wrong 
// console.log(person.'present address');
// correct
console.log(person['present address']);

console.log('============');
// const reasin = false;
person['isStudent'] = false;
console.log(person['isStudent']);
console.log(person);

console.log('=====================');

// use object key to get objest keys 
console.log(Object.keys(person));

console.log('====================');

// use object value to get object values 
console.log(Object.values(person));

console.log('================');

// to delete a property from an object use delete 
delete person.id;
console.log(person);

console.log('===============');

// ===================
//     looping in Object
// =====================

for(let key in person){
    console.log(key);
}

console.log('=======xx==========');

for(let key in person){
    console.log(person[key]);
}