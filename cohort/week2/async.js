let x = require("fs");
x.writeFile('a.txt',`Hii everyone!! How you all are doing!!`,function (){

});
x.readFile('a.txt','utf-8',function(err,data){
    console.log(data);
})
console.log('Hello');
let a = 0;
for(let i = 1;i < 10000;i++)a++;
console.log("hiii" + a)