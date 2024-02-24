// =================== by Rahat vai  =================

const arrayreduce = [5,5,2]
const reduceResult = arrayreduce.reduce((total,value,index,array) => total*value);
console.log(reduceResult);
console.log('============');
// ======================================

const arr = [3,5,7]
const reduceArr = arr.reduce((previous, current, index, array)=>{
    // console.log(previous);
    // console.log(current);
    // console.log(index);
    // console.log(array);
    return previous + current;
},0)
console.log(reduceArr);