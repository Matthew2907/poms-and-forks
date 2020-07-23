import React from 'react';
import {toast} from 'react-toastify';

import {Button, Bar} from 'components';
import closeIcon from 'images/Close icon.svg';
import menuIcon from 'images/Menu icon.svg';
import saveIcon from 'images/Save icon.svg';

function Topbar({
	loggedUser,
	storedToken,
	ingredientsArrForShoppingList,
	isNavigationActive,
	showNavigation,
	hideNavigation,
	fetchUserUpdateShoppingList,
}) {
	const handleAddIngredientsToShoppinglist = () => {
		fetchUserUpdateShoppingList(loggedUser.id, ingredientsArrForShoppingList, storedToken);
		toast.info('Shopping list has been updated!');
	};

	return (
		<Bar variant="topbar">
			<Button
				variant="mainMenu"
				onClick={isNavigationActive ? hideNavigation : showNavigation}
			>
				<img src={isNavigationActive ? closeIcon : menuIcon} alt="show menu" />
			</Button>
			<h1>Shopping list</h1>
			<Button variant="secondRightTop" onClick={handleAddIngredientsToShoppinglist}>
				<img src={saveIcon} alt="save shopping list" />
			</Button>
		</Bar>
	);
}

export default Topbar;
