let x = new Promise(function (resolve){
    return resolve;
},1000);
console.log(x);
x.then(console.log("all OK"));
console.log(x);