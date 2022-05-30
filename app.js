const express = require('express')
const port = process.env.PORT || 5000; // this is our port

const app = express(); //this is the instance of our app



//API Middleware 

app.use(express.json()); // this is to accept data in json format

app.use(express.urlencoded()); //this is to decode the data sent to the html form

app.use(express.static('public')); //this allows the server to use the public static file

//  API ROUTES
app.get('/demo',(req,res) => {


    res.sendFile(__dirname + '/public/index.html');
})


app.post('/demoPost', (req,res)=>{
    console.log(req.body); //the data we get is in the body of request

    res.sendFile(__dirname+'/public/thanks.html')
});




//this basically listens to the port
app.listen(port,()=>{
    console.log(`Server started at http://localhost${port}`);
})