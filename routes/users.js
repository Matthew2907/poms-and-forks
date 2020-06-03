const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req,res) => {
	User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
	const userName = req.body.userName; 
	const userLastName = req.body.userLastName; 
	const userAvatarImageName = req.body.userAvatarImageName; 
	const userChefLevel = Number(req.body.userChefLevel); 

	const newUser = new User({
		userName,
		userLastName,
		userAvatarImageName,
		userChefLevel,
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
		
			user.save()
				.then(() => res.json('User updated!'))
				.catch(err => res.status(400).json('Error' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;
