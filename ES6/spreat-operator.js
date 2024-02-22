// spreat operatore and array max
const max = Math.max(54, 32, 63, 654, 634, 22)
console.log(max);

// spreat operator 
const number = [23, 343, 532, 65, 765, 344];
console.log(...number);

// const arrayMax = Math.max(number)
// console.log(arrayMax);

const arrayMax = Math.max(...number)
console.log(arrayMax);

// use spreat operator to copy
const arr1 = [1,2,3,4];
const arr2 = arr1;
// it will change the main array
arr2.push(5)
console.log(arr2);
console.log(arr1);
console.log('=============');
// use spread oparetor to solve this issue
const arr4 = [1,2,3,4];
const arr5 = [...arr1, 5]
console.log(arr5);
console.log(arr4);