import {
	RECIPE_GET,
	RECIPE_GET_REQUEST,
	RECIPE_GET_SUCCESS,
	RECIPE_GET_FAILURE,
} from 'data/constants';
import API from 'data/fetch';

export const fetchRecipe = (id) => async (dispatch) => {	
	dispatch({
		type: RECIPE_GET_REQUEST
	})

	try{
		const response = await API.recipe.fetchRecipe(id);
		const data = await response.json();	

		dispatch({
			type: RECIPE_GET_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: RECIPE_GET_FAILURE,
		})
	}
}