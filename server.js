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
	const mode = req.query.mode;

	db.any('SELECT * FROM scores WHERE mode = $1', mode)
	.then(data => {
		res.json(data);
		console.log("Sending scores", data);
	})
	.catch(err => {
		console.log("Error in sending scores", err);
	});
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

	 db.none('INSERT INTO scores(date, username, time, mode) VALUES ($1, $2, $3, $4)', [date, username, time, mode]).
	.then(() => {
		res.json("Success!");
		console.log("Inserted new score entry")
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
