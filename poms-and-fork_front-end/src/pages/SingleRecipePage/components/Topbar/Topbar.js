import React from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

import { Button, Bar } from 'components';
import { setFavouriteRecipeToList } from 'data/actions/app.actions';
import { updateUserFavouriteRecipes } from 'data/actions/data.actions';
import { updateFavouriteRecipesListInDB } from 'utils/globalFunctions';
import backIcon from 'images/BackIcon.svg';
import shareIcon from 'images/Share icon.svg';
import likeIcon from 'images/Like icon.svg';
import dislikeIcon from 'images/Dislike icon.svg';


function Topbar({ 
	recipe, favouriteRecipesList, user,
	resetSliderImageIndex, setFavouriteRecipeToList, updateUserFavouriteRecipes
}) {

	let history = useHistory();
	
	const handleClickGoBack = () => {
		history.goBack();
		resetSliderImageIndex(0);
	};
	
	const limitRecipeTitle = (title) => {
		const newTitle = [];
		if(title.length > 12) {
			title.split(' ').reduce((acc,cur) => {
				if(acc + cur.length <= 12) {
					newTitle.push(cur);
				}
				return acc + cur.length;
			}, 0);
			// return the result
			return `${newTitle.join(' ')}...`;
		}
		return title;
	};
	
	// const updateFavouriteRecipesListInDB = (variable1, user, type) => {
	// 	const newUser = JSON.parse(JSON.stringify(user));
	// 	if(type === "favouriteRecipes"){
	// 		newUser.favouriteRecipes = variable1;
	// 	}
		
	// 	axios.post(`http://localhost:5000/users/update/${user._id}`, newUser, {
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		}
	// 	})
	// 	  .then(function (response) {
	// 		console.log(response);
	// 	  })
	// 	  .catch(function (error) {
	// 		console.log(error);
	// 	  });
	// };
	const handleAddToFavourites = () =>  {
		const newFavouritesArr = [...favouriteRecipesList];		// Array of recipes objects 
		const newFavouritesUserArr = [...user.favouriteRecipes];	// Array of recipes ids 
		if (!newFavouritesUserArr.some(element => element === recipe._id)) {
			newFavouritesArr.push(recipe);
			newFavouritesUserArr.push(recipe._id);
			setFavouriteRecipeToList(newFavouritesArr);
			updateUserFavouriteRecipes(newFavouritesUserArr);
			updateFavouriteRecipesListInDB(newFavouritesUserArr, user, "favouriteRecipes");
			return;
		} 

		const index = newFavouritesArr.findIndex(element => element._id === recipe._id);
		const indexUserRecipe = newFavouritesUserArr.findIndex(element => element === recipe._id);
		newFavouritesArr.splice(index, 1);
		newFavouritesUserArr.splice(indexUserRecipe, 1);
		setFavouriteRecipeToList(newFavouritesArr);
		updateUserFavouriteRecipes(newFavouritesUserArr);
		updateFavouriteRecipesListInDB(newFavouritesUserArr, user, "favouriteRecipes");
		return;
	};

	return(
		<Bar text={recipe.recipeTitle} variant="topbar">
			<Button variant="mainMenu" onClick={handleClickGoBack}>
				<img src={backIcon} alt=""/>
			</Button>
				<h1>{recipe.recipeTitle && limitRecipeTitle(recipe.recipeTitle)}</h1>
			<Button variant="firstRightTop">
				<img src={shareIcon} alt=""/>
			</Button>
			{favouriteRecipesList && <Button variant="secondRightTop" onClick={handleAddToFavourites}>
				<img src={(favouriteRecipesList.some(element => element._id === recipe._id)) ? likeIcon : dislikeIcon} alt=""/>
			</Button>}
		</Bar>
	)
}

const mapStateToProps = (state) => ({
	favouriteRecipesList: state.applicationRecuder.favouriteRecipesList,
	user: state.data.user,
  });

const mapDispatchToProps = dispatch => ({
	setFavouriteRecipeToList: (data) => dispatch(setFavouriteRecipeToList(data)),
	updateUserFavouriteRecipes: (data) => dispatch(updateUserFavouriteRecipes(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);

