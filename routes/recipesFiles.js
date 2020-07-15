const router = require('express').Router();

const fileUpload = require('../middleware/file-upload');
const recipesImagesController = require('../controllers/recipeFiles-controller');

router.get('/', recipesImagesController.getAllRecipesImages);
router.get('/image/:filename', recipesImagesController.getRecipeImageByName);
router.post('/upload', fileUpload.single('file'), recipesImagesController.uploadRecipeImage);
router.delete('/:filename', recipesImagesController.deleteRecipeImage);

module.exports = router;
