function sQuare(n){
    return n * n;
}
function Cube(n){
    return n * n * n;
}
function quad(n){
    return n * n * n * n;
}
function sumofSomething(a,b,fn){
    return fn(a) + fn(b);
}
var x = sumofSomething(1,2,Cube);
console.log(x);