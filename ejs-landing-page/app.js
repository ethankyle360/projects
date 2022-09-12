const express = require('express');
const app = express();

//app.use('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('main.ejs');
});

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("listening to port 3000");
});