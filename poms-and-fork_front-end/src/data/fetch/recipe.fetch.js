export const fetchRecipe = (id) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes/${id}`);	// dostajemy tutaj budżet o okreslonym ID razem z transakcjami, ktore mają budgetID równe ID tego budżetu

	return promise;
}