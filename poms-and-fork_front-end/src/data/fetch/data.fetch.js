// fetchuje usersów
export const fetchUsers = () => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/users`);
	return promise;
}

// fetchuje przepisy
export const fetchRecipes = () => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes`);	
	return promise;
}

// fetchuje zdjęcia przepisów 
export const fetchImages = () => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/files`);	
	return promise;
}