let fs = require("fs");
function isAlpha(s){
    for(let char of s){
        if (!/[a-zA-Z]/.test(char)) {
            return false;
        }
    }
    return true;
}
function clean(s){
    x = s[0];
    for(let i = 1;i < s.length;i++){
        if(s[i] !== ' ' || s[i-1] !== ' '){
            x += s[i];
        }
    }
    return x;
}
fs.readFile("a.txt",'utf-8',(err,data)=>{
    let s = data;
    let x = clean(s);
    fs.writeFile('a.txt',x,(err)=>{
        if(!err) console.log("Data Entered Successfully!");
    })
    fs.readFile('a.txt','utf-8',(err,data)=>{
        console.log(data);
    })
})
