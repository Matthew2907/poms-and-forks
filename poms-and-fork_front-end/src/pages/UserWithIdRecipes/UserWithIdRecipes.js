import React, {useEffect, useMemo} from 'react';
import {connect} from 'react-redux';

import {LoadingIndicator} from 'components';
import {Topbar, Content} from './components';
import {hideNavigation, showNavigation} from 'data/actions/app.actions';
import {fetchRecipesByUserId, fetchCreatorById} from 'data/actions/dataDB.actions';

function FavouriteRecipesPage({
	match,
	loadingState,
	recipes,
	creator,
	isNavigationActive,
	hideNavigation,
	showNavigation,
	fetchRecipesByUserId,
	fetchCreatorById,
}) {
	useEffect(() => {
		hideNavigation();
		fetchRecipesByUserId(match.params.id);
		fetchCreatorById(match.params.id);
	}, [match.params.id, hideNavigation, fetchRecipesByUserId, fetchCreatorById]);

	const isLoaded = useMemo(() => !!loadingState && Object.keys(loadingState).length === 0, [
		loadingState,
	]);

	return (
		<React.Fragment>
			<Topbar
				isNavigationActive={isNavigationActive}
				creator={creator}
				hideNavigation={hideNavigation}
				showNavigation={showNavigation}
			/>
			{isLoaded ? <Content recipes={recipes} /> : <LoadingIndicator />}
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	loadingState: state.dataDB.loadingState,
	recipes: state.dataDB.recipes,
	creator: state.dataDB.currentRecipeCreator,
	isNavigationActive: state.applicationRecuder.isNavigationActive,
});

const mapDispatchToProps = (dispatch) => ({
	showNavigation: () => dispatch(showNavigation()),
	hideNavigation: () => dispatch(hideNavigation()),
	fetchRecipesByUserId: (userId) => dispatch(fetchRecipesByUserId(userId)),
	fetchCreatorById: (userId) => dispatch(fetchCreatorById(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteRecipesPage);
