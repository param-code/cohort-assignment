const express = require("express");
const app = express();
// function sum(n){
//     let ans = 0;
//     for(let i = 1;i <= n;i++)ans += i;
//     return ans;
// }
// app.get('/',function (req,res){
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("Hii there, here is your answer " + ans.toString());
// })
var users = [{
    name:"John",
    kidneys:[{
        healthy:true
    },{
        healthy: false
    }]
}];
// console.log(users[0]);
app.listen(3000);
app.get('/',function (req,res){
    const johnkidneys = users[0].kidneys;
    const noofkidneys = johnkidneys.length;
    let healthykidneys = 0;
    for(let i = 0;i < noofkidneys;i++)if(johnkidneys[i].healthy)healthykidneys++;
    let unhealthykidneys = noofkidneys - healthykidneys;
    res.json({
        noofkidneys,
        healthykidneys,
        unhealthykidneys
    });
})
app.use(express.json());
app.post('/',function (req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg:"Done"
    })
})
app.put('/',function (req,res){
    for(let i = 0;i < users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({status:"OK"});
})
app.delete('/',function (req,res){
    for(let i = 0;i < users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy === false){
            users[0].kidneys.splice(i,1);
        }
    }
    res.json({
        status:"OK"
    })
})