import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {Topbar, Content} from './components';
import {showNavigation, hideNavigation} from 'data/actions/app.actions';
import {fetchUserUpdateShoppingList} from 'data/actions/dataDB.actions';

function ShoppinglistPage({
	loggedUser,
	storedToken,
	hideNavigation,
	isNavigationActive,
	fetchUserUpdateShoppingList,
	showNavigation,
}) {
	useEffect(() => {
		hideNavigation();
	}, [hideNavigation]);
	const [ingredientsArrForShoppingList, setIngredientsArrForShoppingList] = useState(
		loggedUser.shoppingList || [],
	);

	return (
		<React.Fragment>
			<Topbar
				loggedUser={loggedUser}
				storedToken={storedToken}
				ingredientsArrForShoppingList={ingredientsArrForShoppingList}
				isNavigationActive={isNavigationActive}
				showNavigation={showNavigation}
				hideNavigation={hideNavigation}
				fetchUserUpdateShoppingList={fetchUserUpdateShoppingList}
			/>
			<Content
				ingredientsArrForShoppingList={ingredientsArrForShoppingList}
				setIngredientsArrForShoppingList={setIngredientsArrForShoppingList}
			/>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	loggedUser: state.dataDB.user,
	storedToken: state.applicationRecuder.storedToken,
	isNavigationActive: state.applicationRecuder.isNavigationActive,
});

const mapDispatchToProps = (dispatch) => ({
	showNavigation: () => dispatch(showNavigation()),
	hideNavigation: () => dispatch(hideNavigation()),
	fetchUserUpdateShoppingList: (userId, shoppingList, storedToken) =>
		dispatch(fetchUserUpdateShoppingList(userId, shoppingList, storedToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppinglistPage);
