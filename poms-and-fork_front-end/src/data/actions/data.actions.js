import { 
	USER_GET, 
	RECIPES_GET, 
	IMAGES_GET,
	USER_UPDATE_FAVOURITE_RECIPES, 
	FAVOURITE_RECIPE_GET
} from 'data/constants';
import API from 'data/fetch';

export const fetchUser = (userName) => {
	const promise =  API.data.fetchUser(userName);	// chcemy zwrócić promise nie rezultat
	
	return({
		promise,   // podkuczem promis będzie znajdował się promis wykonanego requestu do API
		type: USER_GET,
	})
}

export const updateUserFavouriteRecipes = (data) => {
	return {
	  type: USER_UPDATE_FAVOURITE_RECIPES,
	  payload: data,
	};
  };

export const fetchFavouriteRecipe = (id) => {	
	const promise = API.recipe.fetchRecipe(id);
	
	return({
		promise, 
		type: FAVOURITE_RECIPE_GET,
	})
}

export const fetchRecipes = () => {
	const promise = API.data.fetchRecipes();	
	
	return({
		promise,  
		type: RECIPES_GET,
	})
}

export const fetchImages = () => {
	const promise = API.data.fetchImages();	
	return({
		promise,  
		type: IMAGES_GET,
	})
}

