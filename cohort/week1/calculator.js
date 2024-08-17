function calc(a,b,type){
    if(type == '+')return sum(a,b);
    else if(type == '-')return sub(a,b);
    else if(type == '*')return product(a,b);
    else if(type == '/')return division(a,b);
    else return "Invalid Operator!!";
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function product(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}
console.log(calc(34,3,'-'));