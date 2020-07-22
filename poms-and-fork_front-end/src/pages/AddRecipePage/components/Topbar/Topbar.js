import React from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';

import {Button, Bar} from 'components';
import backIcon from 'images/BackIcon.svg';
import saveIcon from 'images/Save icon.svg';

function Topbar({storedToken, recipeInfo, saveButtonRef}) {
	let history = useHistory();

	const handleGoBackToMenu = () => {
		history.push('/');
	};

	// const handleSendNewRecipe = async () => {
	// 	if (!saveButtonRef.current.hasAttribute('disabled')) {
	// 		debugger;
	// 		try {
	// 			const response = await fetch('http://localhost:5000/recipes/add', {
	// 				method: 'POST',
	// 				body: recipeInfo,
	// 				headers: {
	// 					Authorization: 'Bearer ' + storedToken,
	// 				},
	// 			});

	// 			const responseData = await response.json();
	// 			if (!responseData.ok) {
	// 				toast.error('Something went wrong! Try again!');
	// 				return;
	// 			}
	// 			history.push('/');
	// 			toast.success(responseData);
	// 		} catch (err) {
	// 			toast.error('Something went wrong! Try again!');
	// 		}
	// 	}
	// };

	const handleSendNewRecipe = () => {
		if (!saveButtonRef.current.hasAttribute('disabled')) {
			axios
				.post('http://localhost:5000/recipes/add', recipeInfo, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + storedToken,
					},
				})
				.then(function (response) {
					history.push('/');
					toast.success(response.data);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	};

	return (
		<Bar variant="topbar">
			<Button variant="mainMenu" onClick={handleGoBackToMenu}>
				<img src={backIcon} alt="go to previous page" />
			</Button>
			<h1>Add new recipe</h1>
			<Button ref={saveButtonRef} variant="secondRightTop" onClick={handleSendNewRecipe}>
				<img src={saveIcon} alt="save recipe" />
			</Button>
		</Bar>
	);
}

export default Topbar;
