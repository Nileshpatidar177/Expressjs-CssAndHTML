console.log("Hello sabhi ko");
const express = require('express');
const path = require('path');
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

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', (req,res) => {
    const { uname, fname, lname, no} =req.body
    console.log(`username is : ${uname}\n,first name is : ${fname}\n,last name is : ${lname}\n,mob no is : ${no}`);

    res.send("form submitted.. Thank you");
    
})

