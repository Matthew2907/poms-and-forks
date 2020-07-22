export const fetchUserById = (userId) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/users/searchById/${userId}`);
	return promise;
};

// export const fetchUserSignUp = (formDataNewUser) => {
// 	const promise = fetch(`${process.env.REACT_APP_API_URL}/users/signup`, {
// 		method: 'POST',
// 		body: formDataNewUser
// 	});
// 	return promise;
// };

// export const fetchUserLogin = (email, password) => {
// 	const promise = fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
// 		method: 'POST',
// 		headers: {'Content-Type': 'application/json'},
// 		body: JSON.stringify({email, password}),
// 	});
// 	return promise;
// };

// export const fetchUserDelete = (userId) => {
// 	const promise = fetch(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
// 		method: 'DELETE'
// 	});
// 	return promise;
// };

export const fetchRecipesAll = () => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes`);
	return promise;
};

export const fetchRecipesByTitle = (recipeTitle) => {
	const promise = fetch(
		`${process.env.REACT_APP_API_URL}/recipes/searchByTitle?title=${recipeTitle}`,
	);
	return promise;
};

export const fetchRecipesByUserId = (userId) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes/searchByUserId/${userId}`);
	return promise;
};

export const fetchRecipeById = (recipeId) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes/searchById/${recipeId}`);
	return promise;
};

export const fetchfavouriteRecipes = (favouriteRecipes, storedToken) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes/searchFavouriteRecipes`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + storedToken,
		},
		body: JSON.stringify({favouriteRecipes}),
	});
	return promise;
};

// FIXME: Odtąd chyba te akcje nie będą przebiegać w ten sposób, tylko będą to normalne funckje asynchronciczne zapisane w plikach doceowych kalp fetcj API

// export const fetchRecipeAdd = (formDataNewRecipe) => {
// 	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes/add`, {
// 		method: 'POST',
// 		body: formDataNewRecipe
// 	});
// 	return promise;
// };

// export const fetchUpdateFavourites = (recipeId, userId) => {
// 	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes/addToFavourites/${recipeId}`,{
// 		method: 'PATCH',
// 		headers: {'Content-Type': 'application/json'},
// 		body: JSON.stringify({userId}),
// 	});
// 	return promise;
// };

// export const fetchUpdateRecipe = (recipeId, updatedRecipe) => {
// 	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes/${recipeId}`,{
// 		method: 'PATCH',
// 		headers: {'Content-Type': 'application/json'},
// 		body: JSON.stringify(updatedRecipe),
// 	});
// 	return promise;
// };

// export const fetchDeleteRecipe = (recipeId) => {
// 	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes/${recipeId}`, {
// 		method: 'DELETE'
// 	});
// 	return promise;
// };

export const fetchUserUpdateShoppingList = (userId, shoppingList, storedToken) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/users/updateUsersShoppings/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + storedToken,
		},
		body: JSON.stringify({shoppingList}),
	});
	return promise;
};

export const fetchUserUpdate = (userId, updatedUser, storedToken) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + storedToken,
		},
		body: JSON.stringify(updatedUser),
	});
	return promise;
};

export const fetchRecipeUpdate = (recipeId, updatedRecipe, storedToken) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes/${recipeId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + storedToken,
		},
		body: JSON.stringify(updatedRecipe),
	});
	return promise;
};

