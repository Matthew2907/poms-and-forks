const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({		// schemat modelu user ma tylko pole username, w jego ciele przekazuje walidację
		recipesUser: { type: Object, require: true },
		recipeTitle: { type: String, require: true},
		recipeDescriptionShort: { type: String, require: true},
		recipeCategory: { type: String, require: true},
		recipeTags: { type: Array, require: true},
		recipeServings: { type: Number, require: true},
		recipePreparationTime: { type: Number, require: true},
		recipeChefLevel: { type: Number, require: true},
		recipeSocialRank: { type: Number, require: true},
		recipeEnergyValue: { type: Number, require: true},
		recipeProtein: { type: Number, require: true},
		recipeFat: { type: Number, require: true},
		recipeCarbohydrate: { type: Number, require: true},
		recipeIngredients: {type: Array, require: true},
		recipeDescriptionInSteps: {type: Array, require: true},
		recipeImageNames: {type: Array, require: true},	// tablica stringów z nazwami obrazków. Back-end szuka po nazwie zdjęć w bazie MongoDB na roucie http://localhost:5000/image/nazwaZdjecia
		date: { type: Date, require: true, default: Date.now},
	},
{
	timestamps: true,  // kiedy został stworzony oraz kiedy został zmodyfikowany
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;