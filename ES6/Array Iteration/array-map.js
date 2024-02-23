// ================================ by rahat vai ===================
// map return a new array
// map can return and console.log 
const myarray = [23,43,56,12,65,67];
const result = myarray.map((number,index,array) => {
    return (number * 2);
})
// console.log(result);
console.log('============');

const myarray2 = [23,43,56,12,65,67];
const result2 = myarray2.map((number,index,array) => {
    return `number ${number}, index ${index}, array ${array} `;
})
console.log(result2);
console.log('=============');
// ======================================================================

const arr = [2,6,45,87,44];
const arrresult = arr.map(numb => numb / 2);
console.log(arrresult);