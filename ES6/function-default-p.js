// function default peramiter
function sum(x, y = 0){
    return x + y;
}
console.log(sum(5));

function sum2(x, y = 3){
    return x + y;
}
console.log(sum2(5));

function sum3(x, y = 3){
    return x + y;
}
console.log(sum3(5, 10));

function sum3(firstNmae, lastName = ''){
    return `${firstNmae} ${lastName}`;
}
console.log(sum3('Shahin'));

// we can also use empty array and objsect as a default peramiter

