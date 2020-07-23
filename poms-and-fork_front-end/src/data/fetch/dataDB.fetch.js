export const fetchUserById = (userId) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/users/searchById/${userId}`);
	return promise;
};

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
