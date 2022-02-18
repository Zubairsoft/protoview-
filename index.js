const express=require('express')//  This code for using express package
const app=express()              // This code for using express as method


app.set('view engine','ejs') //This setting for using ejs 

// This code bellow for using js , css ,images in ejs page
app.use(express.static("./views/js"))
app.use(express.static("./views/css"))
app.use(express.static("./views/imgs"))

app.get('/',(req,res)=>{
    console.log("server working")// For make sure is server is working 
    res.render('index') // This code for read ejs page

    
})
app.listen("8080") // This code for make port number in localhost 