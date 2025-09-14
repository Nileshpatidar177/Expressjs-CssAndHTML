console.log("Hello sabhi ko");
const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const User=require('./models/User')
const app = new express();

app.listen(3000, (req, res) => {
    console.log("Connected successfully...");
})

app.get('/', (req, res) => {
    res.send("express js page par chal gya re");

})

//.send()=>to display something
//.render()=>to display frontend ejs
//.redirect=>to go on particular route

//routing 
// app.get('/name',(req,res)=>{
//     res.send("Routing samjhe... aur dekho aage ");
// })

// app.get('/user/:userId/age/:age/',(req,res)=>{
//     res.send(req.params);
// });

// app.get('/userLogin/login',(req,res)=>{
//     res.send("ek ke baad ek route");
// })

//data do direct link me 
// app.get('/search',(req,res)=>{
//     res.send(req.query)
// })

//middleware
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

//Connection with MongoDB

mongoose.connect('mongodb://127.0.0.1:27017/Userdata',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("MongoDB connected successfully...")})
.catch(err=>console.log("MongoDB Not connected ",err))


//routing
app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async(req,res) => {
    try{
        const { uname, fname, lname, no} =req.body
        const User1 =new User({uname,fname,lname,no})
        console.log(User1);

        await User1.save();
        res.send("data have been submitted in MongooDB.. Thank you");
        res.redirect("/register")
    }catch(err)
    {
        res.status(500).send(err);
        console.log(err)
    } 
})

