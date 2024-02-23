// ========== By Rahat vai ===========
// We can not use return in to ForEach. we can only use console.log();

const myarray = [23,43,56,12,65,67];
const result = myarray.forEach((value,index,array) => {
    // console.log(value , index, array);
    console.log(value*2);
})
// =====================================