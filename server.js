const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pgp = require('pg-promise')({});

const LOCALHOST = false;
const PORT = process.env.PORT;
const app = express();


const cn = process.env.DATABASE_URL;
const db = pgp(cn);

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
app.get('/scores', (req, res) => {
	res.json("test");
});

/*
* Post requests
*/
app.post('/scores', (req, res) => {
	const { date, username, time, mode} = req.body;

	//If fields are missing data
	if (date === '' || username === '' || time === '' || mode === ''){
		return res.status(400).json("Invalid data");
	}

	db.one('SELECT * FROM scores WHERE tiles = $1', scores)
	.then(data => {
		res.json(data);
		console.log("Sending scores," data);
	})
	.catch(err => {
		console.log("Error in sending scores", err);
	});
});

/*
* Start app
*/
app.listen(PORT, ()=>{
	console.log("API is running on port", PORT);
});
