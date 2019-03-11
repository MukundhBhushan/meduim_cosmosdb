const express = require('express')
const app = express();
const path = require('path')
const mongoose= require('mongoose')
const {users} = require('./models/users')
const env= require('./connctions')

var connectionString = `mongodb://${env.accountName}:${env.key}@${env.accountName}.documents.azure.com:${env.port}/${env.databaseName}?ssl=true`;

mongoose.connect(connectionString);
mongoose.Promise = global.Promise;

app.set('view engine', 'ejs') 
app.set('view',path.join(__dirname,'views'))

app.use(express.urlencoded({
    extended: true
}));


app.post('/api/users',(req,res)=>{
    var user = new users({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username
        
    }).save()

    res.json(req.body)
})

app.get('/api/users',(req,res)=>{
    users.find({},(err,docs)=>{
        if(!err){
            res.json(docs)
        }
        else{
            res.send("somthing went wrong")
        }
    })
})

app.listen(3000,()=>{
    console.log('3000')
})



