import {
	USERS_GET_REQUEST,
	USERS_GET_SUCCESS,
	USERS_GET_FAILURE,
	RECIPES_GET_REQUEST,
	RECIPES_GET_SUCCESS,
	RECIPES_GET_FAILURE,
	IMAGES_GET_REQUEST,
	IMAGES_GET_SUCCESS,
	IMAGES_GET_FAILURE,
} from 'data/constants';
import API from 'data/fetch';

// FIXME: DRY - Stwórz jedną funkcję ogólną i wypełnij ją argumentami dla przypadków pobrania users, recipes oraz images

export const fetchUsers = () => async (dispatch) => {
	dispatch({
		type: USERS_GET_REQUEST
	})
	
	try{
		const response = await API.budget.fetchUsers();	
		const data = await response.json();	
		dispatch({
			type: USERS_GET_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: USERS_GET_FAILURE,
		})
	}
}

export const fetchRecipes = () => async (dispatch) => {
	dispatch({
		type: RECIPES_GET_REQUEST
	})
	
	try{
		const response = await API.budget.fetchRecipes();	
		const data = await response.json();	
		dispatch({
			type: RECIPES_GET_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: RECIPES_GET_FAILURE,
		})
	}
}

export const fetchImages = () => async (dispatch) => {
	dispatch({
		type: IMAGES_GET_REQUEST
	})
	
	try{
		const response = await API.budget.fetchImages();	
		const data = await response.json();	
		dispatch({
			type: IMAGES_GET_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: IMAGES_GET_FAILURE,
		})
	}
}