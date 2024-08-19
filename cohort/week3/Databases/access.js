const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = '123456';

const app = express();
app.use(express.json());

const ALL_USERS = [{
    username:'harkirat@gmail.com',
    password:'123',
    name:'harkirat singh'
},{
    username:'raman@gmail.com',
    password:'422313',
    name:'raman singh'
},{
    username:'priya@gmail.com',
    password:'422343',
    name:'priya singh'
}];

function userExists(username, password){
    let userExists = false;
    for(let i = 0;i < ALL_USERS.length;i++){
        if(username === ALL_USERS[i].username && password === ALL_USERS[i].password)userExists =  true;
    }
    return userExists;
}

app.post('/signin',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:'user does not exist in our memory db'
        })
    }

    let token = jwt.sign({username:username},jwtPassword);
    return res.json({
    token
    })
});

app.get('/users',function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;
        for(let i = 0;i < ALL_USERS.length;i++){
            if(ALL_USERS[i].username === username)ALL_USERS[i] = {};
        }
        res.json({
            users:ALL_USERS
        })
    }catch (err){
        res.status(403).json({
            msg:'Invalid token'
        })
    }
});

app.listen(3000);