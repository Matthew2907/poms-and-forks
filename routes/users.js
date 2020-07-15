const router = require('express').Router();
const {check} = require('express-validator');

const fileUpload = require('../middleware/file-upload');
const usersController = require('../controllers/users-controller');
const checkAuth = require('../middleware/check-auth');

router.get('/searchById/:id', usersController.getUserById);

router.post(
	'/signup',
	fileUpload.single('image'),
	[
		check('name').not().isEmpty(),
		check('email').normalizeEmail().isEmail(),
		check('password').isLength({min: 6}),
	],
	usersController.createUser,
);

router.post('/login', usersController.loginUser);

router.use(checkAuth);

router.patch('/updateUsersShoppings/:id', usersController.updateUsersShoppings);

router.patch(
	'/:id',
	[check('name').not().isEmpty(), check('password').isLength({min: 6})],
	usersController.updateUser,
);

router.delete('/:id', usersController.deleteUser);

module.exports = router;
