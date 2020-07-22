import React, {useEffect, useMemo} from 'react';
import {connect} from 'react-redux';

import {Topbar, Content} from './components';
import {hideNavigation} from 'data/actions/app.actions';
import {fetchfavouriteRecipes} from 'data/actions/dataDB.actions';

function FavouriteRecipesPage({storedToken, loadingState, loggedUser, recipes, hideNavigation, fetchfavouriteRecipes}) {
	useEffect(() => {
		hideNavigation();
		fetchfavouriteRecipes(loggedUser.favouriteRecipes, storedToken);
	}, [hideNavigation]);

	const isLoaded = useMemo(
		() =>
			!!loadingState &&
			Object.keys(loadingState).length === 0 &&
			Object.keys(recipes).length > 0,
		[loadingState, recipes],
	);

	return (
		<React.Fragment>
			<Topbar />
			{isLoaded && <Content recipes={recipes}/>}
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	loadingState: state.dataDB.loadingState,
	loggedUser: state.dataDB.user,
	recipes: state.dataDB.recipes,
	storedToken: state.applicationRecuder.storedToken,
});

const mapDispatchToProps = (dispatch) => ({
	hideNavigation: () => dispatch(hideNavigation()),
	fetchfavouriteRecipes: (favouriteRecipes, storedToken) => dispatch(fetchfavouriteRecipes(favouriteRecipes, storedToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteRecipesPage);
