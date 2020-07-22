const router = require('express').Router();
const {check} = require('express-validator');

const recipesController = require('../controllers/recipes-controller');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');

router.get('/', recipesController.getAllRecipes);

router.get('/searchByTitle', recipesController.getRecipesByTitle);

router.get('/searchById/:id', recipesController.getRecipesById);

router.get('/searchByUserId/:id', recipesController.getRecipesByUserId);

router.use(checkAuth);

router.post('/searchFavouriteRecipes', recipesController.getRecipesFavourite);

router.post(
	'/add',
	fileUpload.array('images', 4),
	[
		check('recipeTitle').not().isEmpty(),
		check('recipeIngredients').isLength({min: 1}),
		check('recipeDescriptionInSteps').isLength({min: 1}),
	],
	recipesController.createRecipe,
);

router.patch('/addToFavourites/:id', recipesController.updateRecipeFollowings);

router.patch(
	'/:id',
	[check('recipeTitle').not().isEmpty(), check('recipeDescriptionShort').isLength({min: 10})],
	recipesController.updateRecipe,
);

router.delete('/:id', recipesController.deleteRecipe);

module.exports = router;
