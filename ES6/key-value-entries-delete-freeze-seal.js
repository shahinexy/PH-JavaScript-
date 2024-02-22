//Objsect key, values, entries, delete, freeze, seal
const myObj ={
    name: 'shahin',
    age: 19,
    roll: 3,
    isStudent: true
}
// (key) use this to get the  object all property / key
console.log(Object.keys(myObj));
console.log('==============');

// (values) use this to get the  object all property / key
console.log(Object.values(myObj));
console.log('==============');

// (entries) use this to get the  array of array / to dimensional array
console.log(Object.entries(myObj));
console.log('==============');

// (delete) use this to get the  array of array / to dimensional array
delete myObj.roll
console.log(myObj);
// another way using destructure
const {isStudent, ...other} = myObj
console.log(other);
console.log('==============');


// (seal) use this to seal the object then you can't delete and add any proprety but you can reasine ro modify any values
Object.seal(myObj);
delete myObj.age
myObj.id = 3213;
myObj.name = 'shain alam'
console.log(myObj);
console.log('==============');

// (Freeze) use this to freeze the object then you can't delete and add any proprety in the object and also can't reasine ro modify any values
Object.freeze(myObj);
delete myObj.age
myObj.id = 3213;
myObj.name = 'Alam'
console.log(myObj);
