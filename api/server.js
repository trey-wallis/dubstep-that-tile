const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3006;
const app = express();

const database = {
	users:[
		{
			id: '0',
			username: 'trey',
			password: 'test'
		}
	]
};

//Allow cross origin resource sharing
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
	console.log("Next request from client");
	next();
});

app.get('/', (req, res) => {
	res.send("Success!");
});

app.post('/signin', (req, res) => {
	if (req.body.username === database.users[0].username &&
		req.body.password === database.users[0].password){
		res.json("Success");
	} else {
		res.status(400).json("Invalid username or password");
	}
});

app.listen(PORT, ()=>{
	console.log("API is running on port", PORT);
});

//this is a change