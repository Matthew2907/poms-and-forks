const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const recipesRouter = require('./routes/recipes');
const recipesFilesRouter = require('./routes/recipesFiles');
const usersRouter = require('./routes/users');

const port = process.env.PORT || 5000;
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-1kjsg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);
app.use('/files', recipesFilesRouter);

app.use((err, req, res, next) => {
	if (res.headerSent) {
		return next(err);
	}
	
	res.status(err.code || 500);
	res.json({message: err.message || 'An unknown error occurred!'});
});

mongoose
	.connect(url, {useUnifiedTopology: false, useNewUrlParser: true, useCreateIndex: true})
	.then(() => {
		app.listen(port, () => {
			console.log(`Server is running on port: ${port}.`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
