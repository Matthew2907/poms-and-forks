export const fetchUser = (email, password) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({email, password}),
	});
	return promise;
};

export const fetchRecipes = () => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes`);
	return promise;
};
