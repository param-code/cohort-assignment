const fs = require("fs");
fs.readFile("a.txt","utf-8",function (err,data){
    console.log(data);
})
console.log("Hi there");
let a = 0;
for(let i = 1;i < 1000000000;i++){
    a++;
}
console.log("Hii " + a);