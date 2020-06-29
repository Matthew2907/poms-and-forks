import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'components';
import { ShopinglistIngredientsContainer ,ShopingIngredientContainer } from './Content.css';
import { setShoppinglistAddIngredients } from 'data/actions/app.actions'; 
import deleteIcon from 'images/Delete icon.svg';

function Content({ 
	prevIngredientsShoppingList, sumIngredientsArr,
	setIngredientsArrForShoppingList, 
}) {

	const handleDeleteIngredientFromRecipeIngredients = (index) => {
		const newIngredientsArrForDelete = [...sumIngredientsArr];
		newIngredientsArrForDelete.splice(index,1);
		setIngredientsArrForShoppingList(newIngredientsArrForDelete);
	};

	const ingredientsList = sumIngredientsArr.map((ingredient, index) => (
		<ShopingIngredientContainer key={ingredient.id}>
			<p>{`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}</p>
			<Button variant="ingredient" onClick={() => handleDeleteIngredientFromRecipeIngredients(index)}>
				<img src={deleteIcon} alt="delete"/>
			</Button>
		</ShopingIngredientContainer>
	));

	return(
		<ShopinglistIngredientsContainer>
			{ingredientsList || ""}
		</ShopinglistIngredientsContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	setShoppinglistAddIngredients: (data) => dispatch(setShoppinglistAddIngredients(data)),
});

export default connect(null,mapDispatchToProps)(Content);