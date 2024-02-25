function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
const watch1 = stopWatch();
console.log(watch1());
console.log(watch1());
const watch2 = stopWatch()

console.log(watch1());
console.log(watch2());
console.log(watch1());
console.log(watch2());
console.log(watch2());
console.log(watch1());
const watch3 = stopWatch()
console.log(watch3());