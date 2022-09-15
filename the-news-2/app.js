const express = require('express');
const app = express();

// Set engine to EJS
app.set('view engine', 'ejs');
// Connect to the public folder
app.use(express.static('public'));

// Route handler
app.get('/', function(req, res) {
    res.render('home');
});

const port = process.env.PORT || 3000;
// Listen
app.listen(port, function() {
    console.log("Listening to Port 3000");
});