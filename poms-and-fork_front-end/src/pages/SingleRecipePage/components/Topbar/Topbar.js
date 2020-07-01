import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import {Button, Bar} from 'components';
import {setFavouriteRecipeToList} from 'data/actions/app.actions';
import {updateUserFavouriteRecipes} from 'data/actions/data.actions';
import {updateFavouriteRecipesListInDB, limitRecipeTitle} from 'utils/globalFunctions';
import backIcon from 'images/BackIcon.svg';
import likeIcon from 'images/Like icon.svg';
import dislikeIcon from 'images/Dislike icon.svg';
import shareIcon from 'images/Share icon.svg';

function Topbar({
	recipe,
	favouriteRecipesList,
	user,
	resetSliderImageIndex,
	setFavouriteRecipeToList,
	updateUserFavouriteRecipes,
}) {
	let history = useHistory();

	const handleClickGoBack = () => {
		history.goBack();
		resetSliderImageIndex(0);
	};

	const handleAddToFavourites = () => {
		const newFavouritesArr = [...favouriteRecipesList];
		const newFavouritesUserArr = [...user.favouriteRecipes];

		if (!newFavouritesUserArr.some((element) => element === recipe._id)) {
			newFavouritesArr.push(recipe);
			newFavouritesUserArr.push(recipe._id);
			setFavouriteRecipeToList(newFavouritesArr);
			updateUserFavouriteRecipes(newFavouritesUserArr);
			updateFavouriteRecipesListInDB(newFavouritesUserArr, user, 'favouriteRecipes');
			return;
		}

		const index = newFavouritesArr.findIndex((element) => element._id === recipe._id);
		const indexUserRecipe = newFavouritesUserArr.findIndex((element) => element === recipe._id);

		newFavouritesArr.splice(index, 1);
		newFavouritesUserArr.splice(indexUserRecipe, 1);

		setFavouriteRecipeToList(newFavouritesArr);
		updateUserFavouriteRecipes(newFavouritesUserArr);
		updateFavouriteRecipesListInDB(newFavouritesUserArr, user, 'favouriteRecipes');
		return;
	};

	return (
		<Bar text={recipe.recipeTitle} variant="topbar">
			<Button variant="mainMenu" onClick={handleClickGoBack}>
				<img src={backIcon} alt="show menu" />
			</Button>
			<h1>{recipe.recipeTitle && limitRecipeTitle(recipe.recipeTitle)}</h1>
			<Button variant="firstRightTop">
				<img src={shareIcon} alt="share recipe" />
			</Button>
			{favouriteRecipesList && (
				<Button variant="secondRightTop" onClick={handleAddToFavourites}>
					<img
						src={
							favouriteRecipesList.some((element) => element._id === recipe._id)
								? likeIcon
								: dislikeIcon
						}
						alt="like recipe"
					/>
				</Button>
			)}
		</Bar>
	);
}

const mapStateToProps = (state) => ({
	favouriteRecipesList: state.applicationRecuder.favouriteRecipesList,
	user: state.data.user,
});

const mapDispatchToProps = (dispatch) => ({
	setFavouriteRecipeToList: (data) => dispatch(setFavouriteRecipeToList(data)),
	updateUserFavouriteRecipes: (data) => dispatch(updateUserFavouriteRecipes(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
