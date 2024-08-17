function sum(a,b){
    let result = a+b;
    return result;
}
function displayResult(data){
    console.log("Result of the sum is : " + data);
}
function displayPassiveResult(data){
    console.log("Sum's is : " + data);
}
displayPassiveResult(sum(10,70));