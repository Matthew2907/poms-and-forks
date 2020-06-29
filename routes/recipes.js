const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/').get((req,res) => {
	Recipe.find()
	.then(recipes => res.json(recipes))
	.catch(err => res.status(400).json('Error:' + err));
});

// http://localhost:5000/recipes/searchByTitle?title=Sernik+wiede%C5%84ski
//  MongoDB has a $regex operator which allows a regular expression to be submitted as a query. 
router.route('/searchByTitle').get((req,res) => {
	Recipe.find({recipeTitle: { "$regex": req.query.title, "$options": "i" }})
	.then(recipe => {
		console.log(req.query);
		return res.json(recipe);
	})
	.catch(err => res.status(400).json('Error:' + err));
});

// http://localhost:5000/recipes/searchById/5eecd9bbab408449988da7ad
router.route('/searchById/:id').get((req,res) => {
	Recipe.findById(req.params.id)
	.then(recipe => res.json(recipe))
	.catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
	const recipesUser = Object.create(req.body.recipesUser);
	const recipeTitle = req.body.recipeTitle;
	const recipeDescriptionShort = req.body.recipeDescriptionShort;
	const recipeCategory = req.body.recipeCategory;
	const recipeTags = Array.from(req.body.recipeTags);
	const recipeServings = Number(req.body.recipeServings);
	const recipePreparationTime = Number(req.body.recipePreparationTime);
	const recipeChefLevel = Number(req.body.recipeChefLevel);
	const recipeSocialRank = Number(req.body.recipeSocialRank);
	const recipeEnergyValue = Number(req.body.recipeEnergyValue);
	const recipeProtein = Number(req.body.recipeProtein);
	const recipeFat = Number(req.body.recipeFat);
	const recipeCarbohydrate = Number(req.body.recipeCarbohydrate);
	const recipeIngredients = Array.from(req.body.recipeIngredients);
	const recipeDescriptionInSteps = Array.from(req.body.recipeDescriptionInSteps);
	const recipeImageNames = Array.from(req.body.recipeImageNames);
	const date = Date.parse(req.body.date);	
	
	const newRecipe = new Recipe({
		recipesUser,
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
		recipeImageNames,
		date,
	});

	newRecipe.save()
	.then(() => res.json(newRecipe._id))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
	Recipe.findByIdAndDelete(req.params.id)
	.then(() => res.json('Recipe deleted.'))
	.catch(err => res.status(400).json('Error' + err));
});

router.route('/update/:id').post((req, res) => {
	Recipe.findById(req.params.id)
		.then(recipe => {
			recipe.recipeUserId = Object.create(req.body.recipesUser);
			recipe.recipeTitle = req.body.recipeTitle;
			recipe.recipeDescriptionShort = req.body.recipeDescriptionShort;
			recipe.recipeCategory = req.body.recipeCategory;
			recipe.recipeTags = Array.from(req.body.recipeTags);
			recipe.recipeServings = Number(req.body.recipeServings);
			recipe.recipePreparationTime = Number(req.body.recipePreparationTime);
			recipe.recipeChefLevel = Number(req.body.recipeChefLevel);
			recipe.recipeSocialRank = Number(req.body.recipeSocialRank);
			recipe.recipeEnergyValue = Number(req.body.recipeEnergyValue);
			recipe.recipeProtein = Number(req.body.recipeProtein);
			recipe.recipeFat = Number(req.body.recipeFat);
			recipe.recipeCarbohydrate = Number(req.body.recipeCarbohydrate);
			recipe.recipeIngredients = Array.from(req.body.recipeIngredients);
			recipe.recipeDescriptionInSteps = Array.from(req.body.recipeDescriptionInSteps);
			recipe.recipeImageNames = Array.from(req.body.recipeImageNames);
			recipe.date = Date.parse(req.body.date);
		
			recipe.save()
				.then(() => res.json('Recipe updated!'))
				.catch(err => res.status(400).json('Error' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;