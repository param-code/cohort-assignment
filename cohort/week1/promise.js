const fs = require("fs");
function kiratReadfile(){
    console.log("inside kiratReadfile");
    return new Promise(function (resolve){
        console.log("Inside Promise");
        fs.readFile("a.txt","utf-8",function (err,data){
            return resolve(data);
        })
    })
}
function onDone(data){
    console.log(data);
}
kiratReadfile().then(onDone);