const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true, minlength: 6},
	image: {type: String, required: true},
	mainSkill: {type: String, required: true},
	userChefLevel: {type: Number, require: true},
	userRecipes: [{type: mongoose.Types.ObjectId, required: true, ref: 'Recipe'}],
	favouriteRecipes: [{type: mongoose.Types.ObjectId, required: true, ref: 'Recipe'}],
	shoppingList: {type: Array, require: true},
	date: { type: Date, require: true, default: Date.now()},
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
