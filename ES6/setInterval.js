// set interval execut your code non stpoly. 
// let count = 0;
// setInterval(()=>{
//     count++
//     // console.log('It will execut after every 3s non stoply.', 'count:', count);
// }, 3000)

// to stope setinterval execution we can use clear interval.
let count2 = 0;
const intervalId = setInterval(()=>{
    count2++
    console.log('It will execut base on conditon after every 3s.', 'count:', count2);
    // you can use condition to  stop this execution
    if(count2 > 5){
        clearInterval(intervalId);
    }
}, 3000)