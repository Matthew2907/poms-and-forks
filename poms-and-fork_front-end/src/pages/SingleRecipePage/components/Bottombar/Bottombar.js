import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {toast} from 'react-toastify';

import {Button, Bar} from 'components';
import {setShoppinglistAddIngredients} from 'data/actions/app.actions';
import shoppingListIcon from 'images/Shopping icon.svg';
import stepModeIcon from 'images/Stepmode icon.svg';

function Bottombar({
	recipeId,
	ingredients,
	prevIngredientsShoppingList,
	setShoppinglistAddIngredients,
}) {
	const shoplistButtonRef = useRef(null);

	const handleAddIngredientsToShoppinglist = () => {
		if (!shoplistButtonRef.current.hasAttribute('disabled')) {
			shoplistButtonRef.current.setAttribute('disabled', true);
			shoplistButtonRef.current.setAttribute('style', 'background-color: rgba(0,0,0,0.6);');
			if (prevIngredientsShoppingList.length > 0) {
				const newIngredientShoppingList = [...prevIngredientsShoppingList, ...ingredients];

				if (newIngredientShoppingList.length < 20) {
					setShoppinglistAddIngredients(newIngredientShoppingList);
					shoplistButtonRef.current.setAttribute(
						'style',
						'background-color: rgba(0,0,0,0.6);',
					);
					shoplistButtonRef.current.setAttribute('disabled', true);
					toast.success('Ingredients has been added to your shooping list!');
					return;
				} else {
					toast.error('Your shopping list is too big!');
					return;
				}
			} else {
				setShoppinglistAddIngredients(ingredients);
				return;
			}
		}
		toast.warning('Ingredients from this recipe has been already added!');
	};

	return (
		<Bar variant="bottombar">
			<Button
				ref={shoplistButtonRef}
				variant="firstBottom"
				onClick={handleAddIngredientsToShoppinglist}
			>
				<img src={shoppingListIcon} alt="add ingredients to shoopinglist" />
			</Button>
			<Button variant="secondBottom" to={`/recipe/${recipeId}/stepmode`}>
				<img src={stepModeIcon} alt="display step mode" />
			</Button>
		</Bar>
	);
}

const mapStateToProps = (state) => ({
	prevIngredientsShoppingList: state.applicationRecuder.shoppinglistIngredients,
});

const mapDispatchToProps = (dispatch) => ({
	setShoppinglistAddIngredients: (data) => dispatch(setShoppinglistAddIngredients(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bottombar);
