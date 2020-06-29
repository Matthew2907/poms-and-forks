import React from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

import { Button, Bar } from 'components';
import { updateFavouriteRecipesListInDB } from 'utils/globalFunctions';
import backIcon from 'images/BackIcon.svg';
import saveIcon from 'images/Save icon.svg';


function Topbar({recipeInfo, saveButtonRef}) {

	let history = useHistory();

	const handleGoBackToMenu = () => {
		history.push("/");
	};

	const handleSendNewRecipe = () => {
		console.log(recipeInfo);
		
		axios.post('http://localhost:5000/recipes/add', recipeInfo, {
			headers: {
				'Content-Type': 'application/json',
			}
		})
		  .then(function (response) {			
			updateFavouriteRecipesListInDB(response.data, recipeInfo.recipesUser, "userRecipes")
			history.push("/");
			toast.success("Recipe has been added successfully!");
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	};

	return(
		<Bar variant="topbar">
			<Button variant="mainMenu" onClick={handleGoBackToMenu}>
				<img src={backIcon} alt=""/>
			</Button>
			<h1>Add new recipe</h1>
			<Button ref={saveButtonRef} variant="secondRightTop" onClick={handleSendNewRecipe}>
				<img src={saveIcon} alt=""/>
			</Button>
		</Bar>
	)
}

export default Topbar;