const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({	
	userName: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3
	},
	userLastName: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3
	},
	userChefLevel: { 
		type: Number,
		require: true
	},
	userAvatarImage: {		
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3
	},
	recipesAmount: {		
		type: Number,
		required: true,
	},
	mainCookSkill: {		
		type: String,
		required: true,
	},
	id: {		// nazwa grafiki, back-end szuka po nazwie 
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3
	},
}, {
	timestamps: true, 
});

const User = mongoose.model('User', userSchema);

module.exports = User;