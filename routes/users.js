const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error:' + err));
});

router.route('/:name').get((req,res) => {
	User.find({userName: req.params.name})
		.then(user => res.json(user[0]))
		.catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
	const userName = req.body.userName; 
	const userLastName = req.body.userLastName; 
	const userAvatarImageName = req.body.userAvatarImageName; 
	const userChefLevel = Number(req.body.userChefLevel); 
	const userRecipes = Array.from(req.body.userRecipes); 
	const favouriteRecipes = Array.from(req.body.favouriteRecipes); 
	const userShoppinglist = Array.from(req.body.userShoppinglist); 
	const mainCookSkill = req.body.mainCookSkill; 
	const id = req.body.id; 

	const newUser = new User({
		userName,
		userLastName,
		userAvatarImageName,
		userChefLevel,
		userRecipes,
		favouriteRecipes,
		userShoppinglist,
		mainCookSkill,
		id,
	}); 

	newUser.save()  
	.then(() => res.json('User added!'))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
	User.findByIdAndDelete(req.params.id)
		.then(() => res.json('User deleted.'))  
		.catch(err => res.status(400).json('Error' + err));
});

router.route('/update/:id').post((req, res) => {
	User.findById(req.params.id)
		.then(user => {
			
			user.userName = req.body.userName; 
			user.userLastName = req.body.userLastName; 
			user.userAvatarImageName = req.body.userAvatarImageName; 
			user.userChefLevel = Number(req.body.userChefLevel); 
			user.userRecipes = Array.from(req.body.userRecipes); 
			user.favouriteRecipes = Array.from(req.body.favouriteRecipes); 
			user.userShoppinglist = Array.from(req.body.userShoppinglist); 
			user.mainCookSkill = req.body.mainCookSkill; 
			user.id = req.body.id; 
		
			user.save()
				.then(() => res.json('User updated!'))
				.catch(err => res.status(400).json('Error' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;
