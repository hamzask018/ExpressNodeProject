const express=require('express');
const app=express();
const path = require('path');
const hbs=require('hbs');
const port=process.env.PORT || 3000;

//Public statc path
const staticPath= path.join(__dirname,'../public');
const template_path= path.join(__dirname,'../templates/views');
const partials_path= path.join(__dirname,'../templates/partials');
 
// TEMPLATE ENGINE
app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);


app.use(express.static(staticPath));

//Routing 
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("Weather");
})

app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:'Opps! Page Not Found, Click Here to go Back',
    });
})


app.listen(port,()=>{
    console.log(`Listinenig to port ${port}`)
})