import { 
	RECIPE_GET,
	RECIPE_RESET,
	SEARCHED_RECIPE_GET,
	SEARCHED_RECIPE_RESET
} from 'data/constants';
import API from 'data/fetch';

export const fetchRecipe = (id) => {	
	const promise = API.recipe.fetchRecipe(id);
	
	return({
		promise,   // podkuczem promis będzie znajdował się promis wykonanego requestu do API
		type: RECIPE_GET,
	})
}

export const resetRecipe = () => {
	return {
	  type: RECIPE_RESET,
	};
  };

export const fetchRecipeByTitle = (title) => {	
	const promise = API.recipe.fetchRecipeByTitle(title);
	
	return({
		promise,   
		type: SEARCHED_RECIPE_GET,
	})
}

export const resetSearchedRecipeByTitle = () => {
	return {
	  type: SEARCHED_RECIPE_RESET,
	};
  };