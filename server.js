const express=require('express');
const app=express();


//GET 
app.get('/',(req,res,next)=>{
    res.json({
        message:"Welcome to Error Handling",
    });
});


// 404 error handling
// app.all is for universal end point
// if any of the route does'nt exit then this message displays
app.all("*",(req,res,next)=>{
    console.log(req.originalUrl);     // this is the url the user is requesting for
    res.status(404).json({
msg:`${req.originalUrl} not Found`,
    })
}) 




// start the server

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is started on port ${port}`);
});