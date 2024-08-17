let fs = require("fs").promises;
let content = "Aaj Tuesday hai!!";
fs.writeFile('a.txt',content,{flag:'a+'}).then(()=>{
    console.log("Data Entered Successfully");
    return fs.readFile('a.txt','utf-8');
}).then(data => console.log(data));
console.log("Hii");
// fs.readFile('a.txt',"utf-8",(err,data)=>{
//     console.log(data);
// })