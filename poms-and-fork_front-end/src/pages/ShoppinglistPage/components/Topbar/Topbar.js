import React from 'react';
import { connect } from 'react-redux';

import { Button, Bar } from 'components';
import { setShoppinglistAddIngredients, showNavigation ,hideNavigation } from 'data/actions/app.actions';
import menuIcon from 'images/Menu-icon.svg';
import closeIcon from 'images/Close icon.svg';
import saveIcon from 'images/Save icon.svg';

function Topbar({ 
	ingredientsArrForShoppingList, isNavigationActive,
	setShoppinglistAddIngredients, hideNavigation, showNavigation
}) {

	const handleAddIngredientsToShoppinglist = () => {
		const newIngredientShoppingList = [...ingredientsArrForShoppingList];
		setShoppinglistAddIngredients(newIngredientShoppingList);
	};

	return(
		<Bar variant="topbar">
			<Button variant="mainMenu" onClick={isNavigationActive ? hideNavigation : showNavigation}>
				<img src={isNavigationActive ? closeIcon : menuIcon} alt=""/>
			</Button>
			<h1>Shopping list</h1>
			<Button variant="secondRightTop" onClick={handleAddIngredientsToShoppinglist}>
				<img src={saveIcon} alt=""/>
			</Button>
		</Bar>
	)
}

const mapStateToProps = (state) => ({
	isNavigationActive: state.applicationRecuder.isNavigationActive,
  });

const mapDispatchToProps = dispatch => ({
	showNavigation: () => dispatch(showNavigation()),
	hideNavigation: () => dispatch(hideNavigation()),
	setShoppinglistAddIngredients: (data) => dispatch(setShoppinglistAddIngredients(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);