import React, {useMemo} from 'react';
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';

import {Button, Bar} from 'components';
import {limitRecipeTitle} from 'utils/globalFunctions';
import backIcon from 'images/BackIcon.svg';
import likeIcon from 'images/Like icon.svg';
import dislikeIcon from 'images/Dislike icon.svg';
import deleteIcon from 'images/DeleteUser Icon.svg';
import editIcon from 'images/Edit icon.svg';

function Topbar({storedToken, recipe, loggedUser, resetSliderImageIndex, fetchUserById}) {
	let history = useHistory();

	const handleClickGoBack = () => {
		resetSliderImageIndex(0);
		history.goBack();
	};

	const handleAddToFavourites = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_URL}/recipes/addToFavourites/${recipe._id}`,
				{
					method: 'PATCH',
					body: JSON.stringify({
						userId: loggedUser._id,
					}),
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + storedToken,
					},
				},
			);

			const responseData = await response.json();

			if (!response.ok) {
				throw new Error(responseData.message);
			}

			toast.success(responseData);
		} catch (err) {}
		fetchUserById(loggedUser._id);
		return;
	};

	const handleDeleteRecipe = async () => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API_URL}/recipes/${recipe._id}`, {
				method: 'DELETE',
				headers: {
					Authorization: 'Bearer ' + storedToken,
				},
			});

			const responseData = await response.json();

			if (!response.ok) {
				throw new Error(responseData.message);
			}

			toast.info(responseData.message);

			setTimeout(() => {
				history.push('/');
			}, 2000);
		} catch (err) {
			if (err.message) {
				toast.error(err.message);
			} else {
				toast.error('Something went wrong. :(');
			}
		}
	};

	const isLikedIcon = useMemo(() => {
		if (!!loggedUser && Object.entries(loggedUser).length > 0) {
			return loggedUser.favouriteRecipes.some((element) => element === recipe._id)
				? likeIcon
				: dislikeIcon;
		}
		return;
	}, [loggedUser]);

	const handleEditRecipe = () => {
		history.push(`/recipeEdit/${recipe._id}`)
	};

	return (
		<Bar text={recipe.recipeTitle} variant="topbar">
			<Button variant="mainMenu" onClick={handleClickGoBack}>
				<img src={backIcon} alt="show menu" />
			</Button>
			<h1>{recipe.recipeTitle && limitRecipeTitle(recipe.recipeTitle)}</h1>

			{Object.entries(loggedUser).length > 0 && (
				<React.Fragment>
					{loggedUser.id === recipe.creator && (
						<Button variant="firstRightTop" onClick={handleDeleteRecipe}>
							<img src={deleteIcon} alt="Delete recipe" />
						</Button>
					)}
					<Button variant="secondRightTop" onClick={loggedUser.id === recipe.creator ? handleEditRecipe : handleAddToFavourites}>
						<img src={loggedUser.id === recipe.creator ? editIcon : isLikedIcon} alt="like recipe" />
					</Button>
				</React.Fragment>
			)}
		</Bar>
	);
}

export default Topbar;
