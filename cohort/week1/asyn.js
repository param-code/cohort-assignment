function sum(a){
    let ans = 0;
    for(let i = 1;i <= a;i++){
        ans += i;
    }
    return ans;
}
function printSum(){
    console.log(sum(100));
}
setTimeout(printSum,1000);
console.log("Hello, JavaScript");
console.log("Sum is : " + (100 * (100 + 1))/2);