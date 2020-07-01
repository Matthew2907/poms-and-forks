import React, {useEffect, useState, useMemo} from 'react';
import {connect} from 'react-redux';

import {Topbar, Content} from './components';
import {hideNavigation} from 'data/actions/app.actions';

function ShoppinglistPage({prevIngredientsShoppingList, hideNavigation}) {
	const [ingredientsArrForShoppingList, setIngredientsArrForShoppingList] = useState();

	useEffect(() => {
		hideNavigation();
		setIngredientsArrForShoppingList(prevIngredientsShoppingList);
	}, [hideNavigation, prevIngredientsShoppingList]);

	const sumIngredients = useMemo(() => {
		if (ingredientsArrForShoppingList) {
			const newArr = [...ingredientsArrForShoppingList];
			const groupedNewArr = newArr.reduce(function (r, a) {
				r[a.name] = r[a.name] || [];
				r[a.name].push(a);
				return r;
			}, Object.create(null));

			const newIngredients = Object.entries(groupedNewArr).map((element) => {
				const currentShoppingIngredientArr = [...element[1]];
				if (currentShoppingIngredientArr.length > 1) {
					const amount = currentShoppingIngredientArr.reduce((r, a) => {
						return r + parseFloat(a['amount']);
					}, 0);

					return {
						name: currentShoppingIngredientArr[0].name,
						amount: amount,
						unit: currentShoppingIngredientArr[0].unit,
						id: currentShoppingIngredientArr[0].id,
					};
				}
				return currentShoppingIngredientArr[0];
			});
			return newIngredients;
		}
		return [];
	}, [ingredientsArrForShoppingList]);

	return (
		<React.Fragment>
			<Topbar ingredientsArrForShoppingList={ingredientsArrForShoppingList} />
			<Content
				sumIngredientsArr={sumIngredients}
				prevIngredientsShoppingList={prevIngredientsShoppingList}
				setIngredientsArrForShoppingList={setIngredientsArrForShoppingList}
			/>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	prevIngredientsShoppingList: state.applicationRecuder.shoppinglistIngredients,
});

const mapDispatchToProps = (dispatch) => ({
	hideNavigation: () => dispatch(hideNavigation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppinglistPage);
