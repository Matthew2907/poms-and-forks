import {
	USER_GET,
	CREATOR_GET,
	RESET_CURRENT_RECIPE_CREATOR_AND_RECIPE,
	RECIPE_GET,
	RECIPES_GET,
} from 'data/constants';
import API from 'data/fetch';

export const fetchUserById = (userId) => {
	const promise = API.dataDB.fetchUserById(userId);
	return {
		promise,
		type: USER_GET,
	};
};

export const fetchCreatorById = (userId) => {
	const promise = API.dataDB.fetchUserById(userId);
	return {
		promise,
		type: CREATOR_GET,
	};
};

export const fetchUserUpdateShoppingList = (userId, shoppingList, storedToken) => {
	const promise = API.dataDB.fetchUserUpdateShoppingList(userId, shoppingList, storedToken);
	return {
		promise,
		type: USER_GET,
	};
};

export const fetchUserUpdate = (userId, updatedUser, storedToken) => {
	const promise = API.dataDB.fetchUserUpdate(userId, updatedUser, storedToken);
	return {
		promise,
		type: USER_GET,
	};
};

export const fetchRecipeUpdate = (recipeId, updatedRecipe, storedToken) => {
	const promise = API.dataDB.fetchRecipeUpdate(recipeId, updatedRecipe, storedToken);
	return {
		promise,
		type: RECIPE_GET,
	};
};

export const fetchRecipesAll = () => {
	const promise = API.dataDB.fetchRecipesAll();
	return {
		promise,
		type: RECIPES_GET,
	};
};

export const fetchfavouriteRecipes = (favouriteRecipes, storedToken) => {
	const promise = API.dataDB.fetchfavouriteRecipes(favouriteRecipes, storedToken);
	return {
		promise,
		type: RECIPES_GET,
	};
};

export const fetchRecipesByTitle = (recipeTitle) => {
	const promise = API.dataDB.fetchRecipesByTitle(recipeTitle);
	return {
		promise,
		type: RECIPES_GET,
	};
};

export const fetchRecipesByUserId = (userId) => {
	const promise = API.dataDB.fetchRecipesByUserId(userId);
	return {
		promise,
		type: RECIPES_GET,
	};
};

export const fetchRecipeById = (recipeId) => {
	const promise = API.dataDB.fetchRecipeById(recipeId);
	return {
		promise,
		type: RECIPE_GET,
	};
};

export const resetCurrentRecipeCreatorAndRecipe = () => {
	return {
		type: RESET_CURRENT_RECIPE_CREATOR_AND_RECIPE,
	};
};
