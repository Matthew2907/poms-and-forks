import React, {useEffect, useMemo} from 'react';
import {connect} from 'react-redux';

import {Topbar, Content} from './components';
import {hideNavigation, showNavigation} from 'data/actions/app.actions';
import {fetchfavouriteRecipes} from 'data/actions/dataDB.actions';

function FavouriteRecipesPage({
	storedToken,
	loadingState,
	loggedUser,
	recipes,
	isNavigationActive,
	hideNavigation,
	showNavigation,
	fetchfavouriteRecipes,
}) {
	useEffect(() => {
		hideNavigation();
		fetchfavouriteRecipes(loggedUser.favouriteRecipes, storedToken);
	}, [hideNavigation, fetchfavouriteRecipes, loggedUser.favouriteRecipes, storedToken]);

	const isLoaded = useMemo(
		() =>
			!!loadingState &&
			Object.keys(loadingState).length === 0 &&
			Object.keys(recipes).length > 0,
		[loadingState, recipes],
	);

	return (
		<React.Fragment>
			<Topbar
				isNavigationActive={isNavigationActive}
				showNavigation={showNavigation}
				hideNavigation={hideNavigation}
			/>
			{isLoaded && <Content recipes={recipes} />}
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	loadingState: state.dataDB.loadingState,
	loggedUser: state.dataDB.user,
	recipes: state.dataDB.recipes,
	storedToken: state.applicationRecuder.storedToken,
	isNavigationActive: state.applicationRecuder.isNavigationActive,
});

const mapDispatchToProps = (dispatch) => ({
	showNavigation: () => dispatch(showNavigation()),
	hideNavigation: () => dispatch(hideNavigation()),
	fetchfavouriteRecipes: (favouriteRecipes, storedToken) =>
		dispatch(fetchfavouriteRecipes(favouriteRecipes, storedToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteRecipesPage);
