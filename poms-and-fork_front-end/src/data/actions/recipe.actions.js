import { RECIPE_GET } from 'data/constants';
import API from 'data/fetch';

export const fetchRecipe = (id) => {	
	const promise = API.recipe.fetchRecipe(id);
	
	return({
		promise,   // podkuczem promis będzie znajdował się promis wykonanego requestu do API
		type: RECIPE_GET,
	})
}