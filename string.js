// Diclear a string 
const str = 'This is a string';
const str2 = "This is a string";
const str3 = `This is a string`;

// uppercase to lowercase 
const upperCase = str.toUpperCase();
console.log(upperCase);

const lowerCase = str.toLowerCase();
console.log(lowerCase);

console.log('================');

// slice 
const sliceStr = 'narayanganj';
const slice = sliceStr.slice(4,8);
console.log(slice);

console.log('===================');

// split 
const splitStr = 'I am a font-end web developer';
const split = splitStr.split(' ');
const splitx = splitStr.split('a');
console.log(split);
console.log('=========');
console.log(splitx);
console.log('=============');
const splitStr2 = 'shahin|rifat|shifat|kholil'
const split2 = splitStr2.split('|')
console.log(split2);

// Join 
const joinArray = [ 'shahin', 'rifat', 'shifat', 'kholil' ]
console.log(joinArray.join());
console.log('===============');
console.log(joinArray.join(' | '));
console.log('============================');



// =================================
//         Concat in String
// =================================
const firstName = 'Shahin';
const  lastName = 'Alam';
console.log(firstName + ' ' + lastName);
console.log(firstName.concat(' ', lastName));
console.log('================');

// Include 
console.log(firstName.includes('a'));
console.log(firstName.includes('y'));