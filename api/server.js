const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3006;
const app = express();

/*
* Our "fake" database
*/
const database = {
	users:[
		{
			id: '0',
			username: 'trey',
			password: 'test',
			joined: new Date()
		}
	]
};


/*
* Middlewares for express
*/
app.use(cors()); //Allow cross origin resource sharing
app.use(bodyParser.json());
app.use((req, res, next) => {
	console.log("New request from client:", req.body);
	next();
});

/*
* Get requests
*/
app.get('/', (req, res) => {
	res.send("Success!");
});


/*
* Post Requests
*/
app.post('/register', (req, res) => {
	const {username, password, passwordRepeat} = req.body;
	
	let response = {
		status: 200,
		message: "Registered successfully"
	}
	if (username === '' || password === '' || passwordRepeat === ''){
		response = {
			status: 400,
			message: "Please fill out all fields"
		}
	} else if (password !== passwordRepeat){
		response = {
			status: 400,
			message: "Passwords do not match"
		}
	} else if (database.users.find(user => user.username === username)){
		response = {
			status: 400,
			message: "User already exists"
		}
	} else {
		database.users.push({
			id: '1',
			username: username,
			password: password,
			joined: new Date()
		});
	}
	res.status(response.status).json(response.message);

});

app.post('/signin', (req, res) => {
	const {username, password} = req.body;
	if (username === database.users[0].username &&
		password === database.users[0].password){
		res.json("Login successful");
	} else {
		res.status(400).json("Invalid username or password");
	}
});

/*
* Start app
*/
app.listen(PORT, ()=>{
	console.log("API is running on port", PORT);
});
