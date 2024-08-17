const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000 || process.env.PORT;
app.post('/',(req,res)=>{
    // console.log(req.headers);
    // const message = req.query.message;
    console.log(req.body);
    res.send("Hello, World");
    res.send({
        msg:"2+2=4"
    })
})
app.use(bodyparser.json());
app.listen(port,()=>{
    console.log(`Example app listening on PORT :${port}`);
})