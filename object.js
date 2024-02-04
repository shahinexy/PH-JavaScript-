const person = {
    Name : 'Shahin',
    age : 19,
    isStudent : true,
    groupSubject : ['math','physices','chemistry','biology'],
    siblings : {
        Brother : 1,
        Sister : 3,
    },
    'present address' : 'narayanganj'
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