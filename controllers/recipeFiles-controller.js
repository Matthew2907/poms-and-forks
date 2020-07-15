const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

const HttpError = require('../models/http-error');
const connection = mongoose.connection;

let gfs;
connection.once('open', () => {
	gfs = Grid(connection.db, mongoose.mongo);
	gfs.collection('uploads');
	console.log('MongoDB database connection established successfully in recipeFiles!');
});

const getAllRecipesImages = async (req, res, next) => {
	let recipesImages;
	
	try {
		recipesImages = await gfs.files.find().toArray();
	} catch (err) {
		const error = new HttpError('Fetching images failed, please try again later.', 500);
		return next(error);
	}

	if (!recipesImages || recipesImages.length === 0) {
		const error = new HttpError('Could not find images.', 404);
		return next(error);
	}

	return res.json(recipesImages);
};

const getRecipeImageByName = async (req, res, next) => {
	const recipeName  = req.params.filename;
	let recipeImage;
	
	try {
		recipeImage = await gfs.files.findOne({filename: recipeName});
	} catch (err) {
		const error = new HttpError('Fetching image failed, please try again later.', 500);
		return next(error);
	}

	if (!recipeImage) {
		const error = new HttpError('Could not find an image for the provided name.', 404);
		return next(error);
	}

	if (recipeImage.contentType === 'image/jpeg' || recipeImage.contentType === 'img/png') {
		const readstream = gfs.createReadStream(recipeImage.filename);
		readstream.pipe(res);
	} else {
		res.status(404).json({
			err: 'Not an image',
		});
	}
};

const uploadRecipeImage = async (req, res, next) => {
	res.status(201).json({file: req.file});
};

const deleteRecipeImage = async (req, res, next) => {
	const recipeName  = req.params.filename;
	let recipeImage;

	try {
		recipeImage = await gfs.remove({filename: recipeName, root: 'uploads'});
	} catch (err) {
		const error = new HttpError('Something went wrong. Could not delete image.', 500);
		return next(error);
	}

	if(!recipeImage) {
		const error = new HttpError('Could not find an image for the provided name.', 404);
		return next(error);
	}

	return res.json({message: 'Image deleted successfully!'});
};

exports.getAllRecipesImages = getAllRecipesImages;
exports.getRecipeImageByName = getRecipeImageByName;
exports.uploadRecipeImage = uploadRecipeImage;
exports.deleteRecipeImage = deleteRecipeImage;
