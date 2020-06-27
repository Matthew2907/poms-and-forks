import React, { useRef } from 'react';
import { connect } from 'react-redux';

import { Button, Bar } from 'components';
import { setShoppinglistAddIngredients } from 'data/actions/app.actions';
import shoppingListIcon from 'images/Shopping icon.svg';
import stepModeIcon from 'images/Stepmode icon.svg';


function Bottombar({ 
	recipeId, ingredients, prevIngredientsShoppingList,
	setShoppinglistAddIngredients
}) {
// Set attribute disabled informing if shoppingList button was clicked. Create function which handles Redux action adding current recipeIngredients to global Redux storage.
	const shoplistButtonRef = useRef(null);

	const handleAddIngredientsToShoppinglist = () => {
		if(!shoplistButtonRef.current.hasAttribute('disabled')){
			if(prevIngredientsShoppingList.length > 0){
				const newIngredientShoppingList = [...prevIngredientsShoppingList, ...ingredients];
				setShoppinglistAddIngredients(newIngredientShoppingList);	
			} else{
				setShoppinglistAddIngredients(ingredients);
			}
			shoplistButtonRef.current.setAttribute('style', 'background-color: rgba(0,0,0,0.6);');
			shoplistButtonRef.current.setAttribute('disabled', true);
			return;
		}
		alert("Ingredients from this recipe has been already added!");
	};
//###################################################################################################
	return(
		<Bar variant="bottombar">
			<Button ref={shoplistButtonRef} variant="firstBottom" onClick={handleAddIngredientsToShoppinglist}>
				<img src={shoppingListIcon} alt="add ingredients to shoopinglist"/>
			</Button>
			<Button variant="secondBottom" to={`/recipe/${recipeId}/stepmode`}>
				<img src={stepModeIcon} alt="display step mode"/>
			</Button>
		</Bar>
	)
}

const mapStateToProps = (state) => ({
	prevIngredientsShoppingList: state.applicationRecuder.shoppinglistIngredients,
  });

const mapDispatchToProps = dispatch => ({
	setShoppinglistAddIngredients: (data) => dispatch(setShoppinglistAddIngredients(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bottombar);