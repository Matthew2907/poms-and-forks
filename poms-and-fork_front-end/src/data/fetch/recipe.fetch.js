export const fetchRecipe = (id) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes/searchById/${id}`);
	return promise;
};

export const fetchRecipeByTitle = (title) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes/searchByTitle?title=${title}`);
	return promise;
};
