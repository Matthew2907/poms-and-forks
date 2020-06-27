export const fetchRecipe = (id) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes/searchById/${id}`);	// dostajemy tutaj budżet o okreslonym ID razem z transakcjami, ktore mają budgetID równe ID tego budżetu
	return promise;
}

export const fetchRecipeByTitle = (title) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes/searchByTitle?title=${title}`);
	return promise;
}