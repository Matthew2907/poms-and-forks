import React, {useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';

import {Button, Bar} from 'components';
import backIcon from 'images/Back icon.svg';
import saveIcon from 'images/Save icon.svg';

function Topbar({isReadyForSubmitButton, updatedRecipe, storedToken, recipeId, fetchRecipeUpdate}) {
	let history = useHistory();
	const saveRecipeByRef = useRef(null);
	const handleGoBackToMenu = () => {
		history.goBack();
	};

	const handleEditRecipe = () => {
		try {
			fetchRecipeUpdate(recipeId, updatedRecipe, storedToken);
			toast.info('Recipe has been updated!');
			history.goBack();
		} catch (err) {
			toast.error('Something went wrong! :(');
		}
	};

	useEffect(() => {
		if (isReadyForSubmitButton) {
			saveRecipeByRef.current.setAttribute(
				'style',
				'background: linear-gradient(to bottom, #000000b5 5%, #00000082 95%);',
			);
		} else {
			saveRecipeByRef.current.setAttribute('style', 'background: none;');
		}
	}, [isReadyForSubmitButton]);

	return (
		<Bar variant="topbar">
			<Button variant="mainMenu" onClick={handleGoBackToMenu}>
				<img src={backIcon} alt="go to previous page" />
			</Button>
			<h1>Edit recipe</h1>
			<Button
				ref={saveRecipeByRef}
				variant="secondRightTop"
				onClick={handleEditRecipe}
				disabled={isReadyForSubmitButton}
			>
				<img src={saveIcon} alt="save shopping list" />
			</Button>
		</Bar>
	);
}

export default Topbar;
