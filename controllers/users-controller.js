const mongoose = require('mongoose');
const {validationResult} = require('express-validator');
const Grid = require('gridfs-stream');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');

const HttpError = require('../models/http-error');
let User = require('../models/user.model');

const connection = mongoose.connection;

let gfs;
connection.once('open', () => {
	gfs = Grid(connection.db, mongoose.mongo);
	gfs.collection('uploads');
	console.log('MongoDB database connection established successfully in users!');
});

const getUserById = async (req, res, next) => {
	const userId = req.params.id;

	try {
		user = await User.findById(userId, '-password');
	} catch (err) {
		const error = new HttpError('Fetching user failed, please try again later.', 500);
		return next(error);
	}

	if(!user) {
		const error = new HttpError('Could not find user for this id.', 404);
		return next(error);
	}

	res.json(user.toObject({getters: true}));
};

const createUser = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return next(new HttpError('Invalid inputs passed, please check your data.', 422));
	}

	const {name, email, password, mainSkill} = req.body;

	let existingUser;

	try {
		existingUser = await User.findOne({email: email});
	} catch (err) {
		const error = new HttpError('Signing up failed. Please try again later.', 500);
		return next(error);
	}

	if (existingUser) {
		const error = new HttpError('User exists already. Please login instead.', 422);
		return next(error);
	}

	let hashedPassword;
	try {
		hashedPassword = await bcrypt.hash(password, 12);
	} catch (err) {
		const error = new HttpError('Could not create user, please try again.', 500);
		return next(error);
	}

	const newUser = new User({
		name,
		email,
		password: hashedPassword,
		image: req.file.filename,
		mainSkill,
		userChefLevel: 1,
		favouriteRecipes: [],
		shoppingList: [],
		userRecipes: [],
	});

	try {
		await newUser.save();
	} catch (err) {
		const error = new HttpError('Signing up failed. Please try again later.', 500);
		return next(error);
	}

	let token;
	try {
		token = jwt.sign({userId: newUser.id, email: newUser.email}, process.env.JWT_KEY, {
			expiresIn: '1h',
		});
	} catch (err) {
		const error = new HttpError('Signing up failed. Please try again later.', 500);
		return next(error);
	}

	res.status(201).json({
		userId: newUser.id,
		token
	});
};

const loginUser = async (req, res, next) => {
	const {email, password} = req.body;

	let existingUser;

	try {
		existingUser = await User.findOne({email: email});
	} catch (err) {
		const error = new HttpError('Logging in failed. Please try again later.', 500);
		return next(error);
	}

	if (!existingUser) {
		const error = new HttpError('Invalid credentials, could not log you in.', 403);
		return next(error);
	}

	let isValidPassword = false;
	try {
		isValidPassword = await bcrypt.compare(password, existingUser.password);
	} catch (err) {
		const error = new HttpError(
			'Could not log you in, please check your credentials and try again later.',
			500,
		);
		return next(error);
	}

	if (!isValidPassword) {
		const error = new HttpError('Invalid credentials, could not log you in.', 403);
		return next(error);
	}

	let token;
	try {
		token = jwt.sign(
			{userId: existingUser.id, email: existingUser.email},
			process.env.JWT_KEY,
			{
				expiresIn: '1h',
			},
		);
	} catch (err) {
		const error = new HttpError('Logging in failed. Please try again later.', 500);
		return next(error);
	}

	res.json({
		userId: existingUser.id,
		token,
	});
};

const updateUsersShoppings = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return next(new HttpError('Invalid inputs passed, please check your data.', 422));
	}

	const {shoppingList} = req.body;

	const userId = req.userData.userId;

	let user;
	try {
		user = await User.findById(userId);
	} catch (err) {
		const error = new HttpError('Something went wrong. Could not update user.', 500);
		return next(error);
	}

	if(user._id.toString() !== req.userData.userId) {
		const error = new HttpError('You are not allowed to edit this place.', 401);
		return next(error);
	}

	const newShoppingList = shoppingList.map(element => {
		element.id = uuid.v1();
		return element;
	})

	user.shoppingList = newShoppingList;
	
	try {
		await user.save();
	} catch (err) {
		const error = new HttpError('Something went wrong. Could not update user.', 500);
		return next(error);
	}

	res.status(200).json(user);
};

const updateUser = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return next(new HttpError('Invalid inputs passed, please check your data.', 422));
	}

	const {name, password, mainSkill} = req.body;

	const userId = req.params.id;

	let user;
	try {
		user = await User.findById(userId);
	} catch (err) {
		const error = new HttpError('Something went wrong. Could not update user.', 500);
		return next(error);
	}

	let hashedPassword;
	try {
		hashedPassword = await bcrypt.hash(password, 12);
	} catch (err) {
		const error = new HttpError('Could not create user, please try again.', 500);
		return next(error);
	}

	if(user._id.toString() !== req.userData.userId) {
		const error = new HttpError('You are not allowed to edit this place.', 401);
		return next(error);
	}

	user.name = name;
	user.mainSkill = mainSkill;
	user.password = hashedPassword;

	try {
		await user.save();
	} catch (err) {
		const error = new HttpError('Something went wrong. Could not update user.', 500);
		return next(error);
	}

	res.status(200).json(user);
};

const deleteUser = async (req, res, next) => {
	const userId = req.params.id;

	let user;

	try {
		user = await User.findById(userId);
	} catch (err) {
		const error = new HttpError('Something went wrong. Could not delete user.', 500);
		return next(error);
	}

	if (!user) {
		const error = new HttpError('Could not find user for this id.', 404);
		return next(error);
	}

	if(user._id.toString() !== req.userData.userId) {
		const error = new HttpError('You are not allowed to edit this place.', 401);
		return next(error);
	}

	gfs.remove({filename: user.image, root: 'uploads'}, (err, gridStore) => {
		if (err) {
			const error = new HttpError('Something went wrong. Could not delete image.', 500);
			return next(error);
		}
	});
	
	try {
		await User.findByIdAndDelete(userId);
	} catch (err) {
		const error = new HttpError('Something went wrong. Could not delete place.', 500);
		return next(error);
	}

	res.status(200).json({message: 'User deleted.'});
};

exports.getUserById = getUserById;
exports.createUser = createUser;
exports.loginUser = loginUser;
exports.updateUser = updateUser;
exports.updateUsersShoppings = updateUsersShoppings;
exports.deleteUser = deleteUser;
