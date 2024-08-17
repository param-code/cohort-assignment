let a = 30;
function calc(){
    console.log(a);
    a = a - 1;
}
setInterval(calc,2*1000);