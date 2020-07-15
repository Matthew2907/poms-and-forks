import {
	USER_GET,
	RECIPES_GET,
	USER_UPDATE_FAVOURITE_RECIPES,
	FAVOURITE_RECIPE_GET,
} from 'data/constants';
import API from 'data/fetch';

export const fetchUser = (email, password) => {
	const promise = API.data.fetchUser(email, password); 
	return {
		promise,
		type: USER_GET,
	};
};

export const updateUserFavouriteRecipes = (data) => {
	return {
		type: USER_UPDATE_FAVOURITE_RECIPES,
		payload: data,
	};
};

export const fetchFavouriteRecipe = (id) => {
	const promise = API.recipe.fetchRecipe(id);
	return {
		promise,
		type: FAVOURITE_RECIPE_GET,
	};
};

export const fetchRecipes = () => {
	const promise = API.data.fetchRecipes();
	return {
		promise,
		type: RECIPES_GET,
	};
};
