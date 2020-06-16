import { USERS_GET, RECIPES_GET, IMAGES_GET } from 'data/constants';
import API from 'data/fetch';

export const fetchUsers = () => {
	const promise =  API.data.fetchUsers();	// chcemy zwrócić promise nie rezultat
	
	return({
		promise,   // podkuczem promis będzie znajdował się promis wykonanego requestu do API
		type: USERS_GET,
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