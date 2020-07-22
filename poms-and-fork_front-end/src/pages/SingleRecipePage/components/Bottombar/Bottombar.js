import React, {useRef} from 'react';
import {toast} from 'react-toastify';

import {Button, Bar} from 'components';
import shoppingListIcon from 'images/Shopping icon.svg';
import stepModeIcon from 'images/Stepmode icon.svg';

function Bottombar({
	recipeId,
	loggedUser,
	storedToken,
	ingredientsArrForShoppingList,
	fetchUserUpdateShoppingList,
}) {
	const shoplistButtonRef = useRef(null);

	const handleAddIngredientsToShoppinglist = async () => {
		if (!shoplistButtonRef.current.hasAttribute('disabled')) {
			if (loggedUser.shoppingList.length > 0) {
				const newIngredientShoppingList = [
					...loggedUser.shoppingList,
					...ingredientsArrForShoppingList,
				];
				if (newIngredientShoppingList.length < 20) {
					// Add new shopping list to user in DB
					fetchUserUpdateShoppingList(
						loggedUser.id,
						newIngredientShoppingList,
						storedToken,
					);
					shoplistButtonRef.current.setAttribute('disabled', true);
					shoplistButtonRef.current.setAttribute(
						'style',
						'background-color: rgba(0,0,0,0.6);',
					);
					setTimeout(() => {
						toast.success('Ingredients has been added to your shooping list!');
					},1000)
					return;
				} else {
					toast.error('Your shopping list is too big!');
					return;
				}
			} else {
				shoplistButtonRef.current.setAttribute('disabled', true);
				shoplistButtonRef.current.setAttribute(
					'style',
					'background-color: rgba(0,0,0,0.6);',
				);
				fetchUserUpdateShoppingList(
					loggedUser.id,
					ingredientsArrForShoppingList,
					storedToken,
				);
				return;
			}
		}
		toast.warning('Ingredients from this recipe has been already added!');
	};

	return (
		<Bar variant="bottombar">
			{loggedUser && Object.entries(loggedUser).length > 0 && (
				<Button
					ref={shoplistButtonRef}
					variant="firstBottom"
					onClick={handleAddIngredientsToShoppinglist}
				>
					<img src={shoppingListIcon} alt="add ingredients to shoopinglist" />
				</Button>
			)}
			<Button variant="secondBottom" to={`/recipe/${recipeId}/stepmode`}>
				<img src={stepModeIcon} alt="display step mode" />
			</Button>
		</Bar>
	);
}

export default Bottombar;
