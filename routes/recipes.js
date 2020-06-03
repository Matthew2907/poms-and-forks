const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/').get((req,res) => {
	Recipe.find()
	.then(recipes => res.json(recipes))
	.catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req,res) => {
	Recipe.findById(req.params.id)
	.then(recipe => res.json(recipe))
	.catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
	const recipeUserId = req.body.recipeUserId;
	const recipeTitle = req.body.recipeTitle;
	const recipeDescriptionShort = req.body.recipeDescriptionShort;
	const recipeCategory = req.body.recipeCategory;
	const recipeTags = req.body.recipeTags;
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
	const date = Date.parse(req.body.date);	
	const recipeImagesIds = Array.from(req.body.recipeImagesIds);

	const newRecipe = new Recipe({
		recipeUserId,
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
		recipeImagesIds,
	});

	newRecipe.save()
	.then(() => res.json('Recipe added!'))
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
			recipe.recipeUserId = req.body.recipeUserId;
			recipe.recipeTitle = req.body.recipeTitle;
			recipe.recipeDescriptionShort = req.body.recipeDescriptionShort;
			recipe.recipeCategory = req.body.recipeCategory;
			recipe.recipeTags = req.body.recipeTags;
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
			recipe.date = Date.parse(req.body.date);
			recipe.recipeImagesIds = Array.from(req.body.recipeImagesIds);
		
			recipe.save()
				.then(() => res.json('Recipe updated!'))
				.catch(err => res.status(400).json('Error' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;