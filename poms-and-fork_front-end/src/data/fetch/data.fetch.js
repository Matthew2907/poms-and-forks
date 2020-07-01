export const fetchUser = (userName) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/users/${userName}`);
	return promise;
};

export const fetchRecipes = () => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/recipes`);
	return promise;
};
