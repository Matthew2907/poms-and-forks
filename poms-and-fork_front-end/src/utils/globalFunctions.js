import axios from 'axios';

export const updateFavouriteRecipesListInDB = (variable1, user, type) => {
	const newUser = JSON.parse(JSON.stringify(user));
	if(type === "favouriteRecipes") {
		newUser.favouriteRecipes = variable1;
	} else if(type === "userRecipes") {
		newUser.userRecipes.push(variable1);
	} else if(type === "shoppingIngredients") {
		console.log(variable1);
		newUser.userShoppinglist = variable1;
	}
	
	axios.post(`http://localhost:5000/users/update/${user._id}`, newUser, {
		headers: {
			'Content-Type': 'application/json',
		}
	})
	  .then(function (response) {
		console.log("User data has been updated!");
	  })
	  .catch(function (error) {
		console.log(error);
	  });
};