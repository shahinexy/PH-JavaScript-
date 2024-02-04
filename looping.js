// While loop
let i = 0;
while(i<=10){
    console.log(i);
    i++;
}
console.log('=============');

// do while loop 
let n = 0;
do{
    console.log(n);
    n++;
}
while(n<=5);


console.log('===================');

// for loop 
for(let i=10; i<=20; i++){
    console.log(i);
}
console.log('===================');

// for of loop
const myarr = [2,4,5,6,7];
for(let array of myarr){
    console.log(array);
}
console.log('===================');

// for in loop (You will get index number)
const myarray = [2,4,5,6,7];
for(let array in myarray){
    console.log(array);
}
console.log('================');



// ===============================
//     looping in array 
// ===============================
const fruits = ['mango', 'banana', 'aple', 'coconat'];
for(let i =0; i < fruits.length; i++){
    console.log(fruits[i]);
}
console.log('===================');

// revarse array 
const fruitsRevarse = ['mango', 'banana', 'aple', 'coconat'];
for(let i =  fruitsRevarse.length - 1; i >= 0; i--){
    console.log(fruitsRevarse[i]);
}
console.log('===================');
