function a(){
    console.log('a');
    b();
    console.log('aa');
}
function b(){
    console.log('b');
    console.log('bb');
    c();
}
function c(){
    console.log('c');
    d();
    console.log('cc');
}
function d(){
    console.log('d');
    console.log('dd');
}

a();