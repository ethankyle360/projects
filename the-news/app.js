const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Route Handler
app.get('/', function(req, res) {
    res.render('home');
});

//const port = process.env.PORT || 3000;
// Listen
app.listen(3000, function() {
    console.log("Listening to Port 3000");
});