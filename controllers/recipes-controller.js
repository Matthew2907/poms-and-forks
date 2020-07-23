const mongoose = require('mongoose');
const {validationResult} = require('express-validator');
const Grid = require('gridfs-stream');

const HttpError = require('../models/http-error');
let Recipe = require('../models/recipe.model');
let User = require('../models/user.model');

const connection = mongoose.connection;

let gfs;
connection.once('open', () => {
	gfs = Grid(connection.db, mongoose.mongo);
	gfs.collection('uploads');
	console.log('MongoDB database connection established successfully in recipes!');
});

const getAllRecipes = async (req, res, next) => {
	let recipes;

	try {
		recipes = await Recipe.find();
	} catch (err) {
		const error = new HttpError('Fetching recipes failed, please try again later.', 500);
		return next(error);
	}

	res.json(recipes);
};

const getRecipesByTitle = async (req, res, next) => {
	const recipeTitle = req.query.title;
	let recipes;

	try {
		recipes = await Recipe.find({recipeTitle: {$regex: recipeTitle, $options: 'i'}});
	} catch (err) {
		const error = new HttpError('Something went wrong, could not find recipes.', 500);
		return next(error);
	}

	if (!recipes) {
		const error = new HttpError('Could not find recipes for the provided name.', 404);
		return next(error);
	}

	res.json(recipes);
};

const getRecipesById = async (req, res, next) => {
	const recipeId = req.params.id;
	let recipe;

	try {
		recipe = await Recipe.findById(recipeId);
	} catch (err) {
		const error = new HttpError('Something went wrong, could not find recipes.', 500);
		return next(error);
	}

	if (!recipe) {
		const error = new HttpError('Could not find recipes for the provided id.', 404);
		return next(error);
	}

	res.json(recipe);
};

const getRecipesByUserId = async (req, res, next) => {
	const userId = req.params.id;

	let userWithRecipes;

	try {
		userWithRecipes = await User.findById(userId).populate('userRecipes');
	} catch (err) {
		const error = new HttpError('Fetching recipes faild, please try again later.', 500);
		return next(error);
	}

	if (!userWithRecipes || userWithRecipes.userRecipes.length === 0) {
		return next(new HttpError('Could not find recipes for the provided user id.', 404)); // trigger error handling middleware in app.js
	}
	const recipeArr = userWithRecipes.userRecipes.map((recipe) => recipe.toObject({getters: true}));
	res.json(recipeArr);
};

const getRecipesFavourite = async (req, res, next) => {
	const recipesObjectedId = req.body.favouriteRecipes.map(recipe => mongoose.Types.ObjectId(recipe));
	
	let recipes;

	try {
		recipes = await Recipe.find({'_id': { $in : recipesObjectedId}});
	} catch (err) {
		const error = new HttpError('Fetching recipes faild, please try again later.', 500);
		return next(error);
	}

	res.json(recipes);
};


const createRecipe = async (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return next(new HttpError('Invalid inputs passed, please check your data.', 422));
	}

	let newRecipeImages = [];

	if(req.body.recipeImageNames && req.body.recipeImageNames.length > 0){
		// newRecipeImages = req.files.map(file => file.filename);
		newRecipeImages = req.body.recipeImageNames
	} else {
		newRecipeImages.push('b2421e7220cccf64bae6a8989abcf0bc.jpg')
	}
	
	const {
		creator,
		recipeTitle,
		recipeDescriptionShort,
		recipeCategory,
		recipeTags,
		recipeServings,
		recipePreparationTime,
		recipeChefLevel,
		recipeSocialRank,
		recipeEnergyValue,
		recipeProtein,
		recipeFat,
		recipeCarbohydrate,
		recipeIngredients,
		recipeDescriptionInSteps,
		date,
	} = req.body;

	const newRecipe = new Recipe({
		creator: creator,
		recipeTitle: recipeTitle,
		recipeDescriptionShort: recipeDescriptionShort,
		recipeCategory: recipeCategory,
		recipeTags: Array.from(recipeTags),
		recipeServings: Number(recipeServings),
		recipePreparationTime: Number(recipePreparationTime),
		recipeChefLevel: Number(recipeChefLevel),
		recipeSocialRank: Number(recipeSocialRank),
		recipeEnergyValue: Number(recipeEnergyValue),
		recipeProtein: Number(recipeProtein),
		recipeFat: Number(recipeFat),
		recipeCarbohydrate: Number(recipeCarbohydrate),
		recipeIngredients: Array.from(recipeIngredients),
		recipeDescriptionInSteps: Array.from(recipeDescriptionInSteps),
		recipeImageNames: Array.from(newRecipeImages),
		date: Date.parse(date),
		followingUsers: [],
	});

	let user;

	try {
		user = await User.findById(creator); // tu może być błąd
	} catch (err) {
		const error = new HttpError('Creating recipe failed. Please try again later.', 500);
		return next(error);
	}

	if (!user) {
		const error = new HttpError('Could not find user for provided id.', 404);
		return next(error);
	}

	try {
		const session = await mongoose.startSession();
		session.startTransaction();
		await newRecipe.save({session: session});
		user.userRecipes.push(newRecipe);
		await user.save({session: session});
		await session.commitTransaction();
	} catch (err) {
		const error = new HttpError('Creating recipe failed, please try again.', 500);
		return next(error);
	}

	res.status(201).json("Recipe has been added successfully!");
};

const updateRecipe = async (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return next(new HttpError('Invalid inputs passed, please check your data.', 422));
	}

	const recipeId = req.params.id;
	const {
		recipeTitle,
		recipeDescriptionShort,
		recipeEnergyValue,
		recipeProtein,
		recipeFat,
		recipeCarbohydrate,
	} = req.body;

	let recipe;

	try {
		recipe = await Recipe.findById(recipeId);
		// recipe = await Recipe.findById(recipeId).populate('creator');
	} catch (err) {
		const error = new HttpError('Something went wrong. Could not update recipe.', 500);
		return next(error);
	}
	// if(recipe.creator.id.toString() !== req.userData.userId){
	if(recipe.creator.toString() !== req.userData.userId){
		const error = new HttpError('You are not allowed to delete this recipe.', 401);
		return next(error);
	}

	recipe.recipeTitle = recipeTitle;
	recipe.recipeDescriptionShort = recipeDescriptionShort;
	recipe.recipeEnergyValue = Number(recipeEnergyValue);
	recipe.recipeProtein = Number(recipeProtein);
	recipe.recipeFat = Number(recipeFat);
	recipe.recipeCarbohydrate = Number(recipeCarbohydrate);

	try {
		await recipe.save();
	} catch (err) {
		const error = new HttpError('Something went wrong. Could not update recipe.', 500);
		return next(error);
	}

	res.status(200).json(recipe);
};

const updateRecipeFollowings = async (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return next(new HttpError('Invalid inputs passed, please check your data.', 422));
	}

	const recipeId = req.params.id;

	const {userId} = req.body;

	let recipe;

	try {
		recipe = await Recipe.findById(recipeId);
	} catch (err) {
		const error = new HttpError('Something went wrong. Could not update recipe.', 500);
		return next(error);
	}

	let user;

	try {
		user = await User.findById(userId);
	} catch (err) {
		const error = new HttpError(
			'Adding recipe to favourites failed. Please try again later.',
			500,
		);
		return next(error);
	}

	if (!user) {
		const error = new HttpError('Could not find user for provided id.', 404);
		return next(error);
	}

	if (user.favouriteRecipes.includes(recipeId)) {
		try {
			const session = await mongoose.startSession();
			session.startTransaction();
			recipe.followingUsers.pull(user);
			await recipe.save({session: session});
			user.favouriteRecipes.pull(recipe);
			await user.save({session: session});
			await session.commitTransaction();
		} catch (err) {
			const error = new HttpError('Updating user failed, please try again.', 500);
			return next(error); 		
		}

		res.status(201).json('Recipe has been removed from favourites successfully!');
	} else {
		try {
			const session = await mongoose.startSession();
			session.startTransaction();
			recipe.followingUsers.push(user);
			await recipe.save({session: session});
			user.favouriteRecipes.push(recipe);
			await user.save({session: session});
			await session.commitTransaction();
		} catch (err) {
			const error = new HttpError('Updating user failed, please try again.', 500);
			return next(error);
		}

		res.status(201).json('Recipe has been added to favourites successfully!');
	}
};

const deleteRecipe = async (req, res, next) => {
	const recipeId = req.params.id;

	let recipe;

	try {
		recipe = await Recipe.findById(recipeId).populate('creator').populate('followingUsers');
	} catch (err) {
		const error = new HttpError('Something went wrong. Could not delete recipe.', 500);
		return next(error);
	}

	if (!recipe) {
		const error = new HttpError('Could not find recipe for this id.', 404);
		return next(error);
	}

	if(recipe.creator.id.toString() !== req.userData.userId){
		const error = new HttpError('You are not allowed to delete this recipe.', 401);
		return next(error);
	}

	recipe.recipeImageNames.map((imageName) => {
		gfs.remove({filename: imageName, root: 'uploads'}, (err, gridStore) => {
			if (err) {
				const error = new HttpError('Something went wrong. Could not delete image.', 500);
				return next(error);
			}
		});
	});

	try {
		const session = await mongoose.startSession();
		session.startTransaction();
		recipe.creator.userRecipes.pull(recipe);
		await recipe.creator.save({session: session});
		recipe.followingUsers.forEach(async (user) => {
			user.favouriteRecipes.pull(recipe);
			await user.save({session: session});
		})
		await session.commitTransaction();
	} catch (err) {
		const error = new HttpError('Something went wrong. Could not delete recipe.', 500);
		return next(error);
	}

	try {
		await recipe.remove();
	} catch (err) {
		const error = new HttpError('Something went wrong. Could not delete recipe.', 500);
		return next(error);
	}
		
	res.status(200).json({message: 'Recipe has been deleted.'});
};

exports.getAllRecipes = getAllRecipes;
exports.getRecipesByTitle = getRecipesByTitle;
exports.getRecipesById = getRecipesById;
exports.getRecipesByUserId = getRecipesByUserId;
exports.getRecipesFavourite = getRecipesFavourite;
exports.createRecipe = createRecipe;
exports.updateRecipe = updateRecipe;
exports.updateRecipeFollowings = updateRecipeFollowings;
exports.deleteRecipe = deleteRecipe;
