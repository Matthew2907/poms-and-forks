import React from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

import { Button, Bar } from 'components';
import { setFavouriteRecipeToList } from 'data/actions/app.actions';
import backIcon from 'images/BackIcon.svg';
import shareIcon from 'images/Share icon.svg';
import likeIcon from 'images/Like icon.svg';
import dislikeIcon from 'images/Dislike icon.svg';


function Topbar({ 
	recipe, favouriteRecipesList, 
	resetSliderImageIndex, setFavouriteRecipeToList
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
	
	const handleAddToFavourites = () => {
		const newFavouritesArr = [...favouriteRecipesList];
		if (!newFavouritesArr.some(element => element._id === recipe._id)) {
			newFavouritesArr.push(recipe);
			setFavouriteRecipeToList(newFavouritesArr);
			return;
		} 
		const index = newFavouritesArr.findIndex(element => element._id === recipe._id);
		newFavouritesArr.splice(index, 1);
		setFavouriteRecipeToList(newFavouritesArr);
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
			<Button variant="secondRightTop" onClick={handleAddToFavourites}>
				<img src={(favouriteRecipesList.some(element => element._id === recipe._id)) ? likeIcon : dislikeIcon} alt=""/>
			</Button>
		</Bar>
	)
}

const mapStateToProps = (state) => ({
	favouriteRecipesList: state.applicationRecuder.favouriteRecipesList,
  });

const mapDispatchToProps = dispatch => ({
	setFavouriteRecipeToList: (data) => dispatch(setFavouriteRecipeToList(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);

