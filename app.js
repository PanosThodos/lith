const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express(); //run express

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.send('Hello');
});

app.listen(3000, function(){
	console.log('Server Started on Port 3000...');
}) 