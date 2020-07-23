import React from 'react';
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';

import {Button, Bar} from 'components';
import backIcon from 'images/Back icon.svg';
import saveIcon from 'images/Save icon.svg';

function Topbar({storedToken, recipeInfo, saveButtonRef}) {
	let history = useHistory();

	const handleGoBackToMenu = () => {
		history.push('/');
	};

	const fetchUploadRecipe = async () => {
		if (!saveButtonRef.current.hasAttribute('disabled')) {
			try {
				const response = await fetch(`${process.env.REACT_APP_API_URL}/recipes/add`, {
					method: 'POST',
					body: JSON.stringify(recipeInfo),
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + storedToken,
					},
				});
				const responseData = await response.json();
				history.push('/');
				toast.success(responseData);
			} catch (err) {
				toast.error('An unknown error occurred!');
			}
		}
	};

	return (
		<Bar variant="topbar">
			<Button variant="mainMenu" onClick={handleGoBackToMenu}>
				<img src={backIcon} alt="go to previous page" />
			</Button>
			<h1>Add new recipe</h1>
			<Button ref={saveButtonRef} variant="secondRightTop" onClick={fetchUploadRecipe}>
				<img src={saveIcon} alt="save recipe" />
			</Button>
		</Bar>
	);
}

export default Topbar;
