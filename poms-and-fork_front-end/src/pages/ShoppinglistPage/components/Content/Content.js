import React from 'react';

import {Button} from 'components';
import {ShopinglistIngredientsContainer, ShopingIngredientContainer} from './Content.css';
import deleteIcon from 'images/Delete icon.svg';

function Content({ingredientsArrForShoppingList, setIngredientsArrForShoppingList}) {
	const handleDeleteIngredientFromRecipeIngredients = (index) => {
		const newIngredientsArrForDelete = [...ingredientsArrForShoppingList];
		newIngredientsArrForDelete.splice(index, 1);
		setIngredientsArrForShoppingList(newIngredientsArrForDelete);
	};

	const ingredientsList = ingredientsArrForShoppingList.map((ingredient, index) => (
		<ShopingIngredientContainer key={ingredient.id}>
			<p>{`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}</p>
			<Button
				variant="ingredient"
				onClick={() => handleDeleteIngredientFromRecipeIngredients(index)}
			>
				<img src={deleteIcon} alt="remove ingredient" />
			</Button>
		</ShopingIngredientContainer>
	));

	return (
		<ShopinglistIngredientsContainer>{ingredientsList || ''}</ShopinglistIngredientsContainer>
	);
}

export default Content;
