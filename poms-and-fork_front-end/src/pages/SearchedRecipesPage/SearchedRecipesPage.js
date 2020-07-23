import React, {useEffect, useMemo} from 'react';
import {connect} from 'react-redux';

import {Topbar, Content} from './components';
import {LoadingIndicator} from 'components';
import {hideNavigation} from 'data/actions/app.actions';
import {fetchRecipesByTitle} from 'data/actions/dataDB.actions';

function SearchedRecipesPage({
	match,
	searchedRecipesByTitle,
	recipeLoadingState,
	hideNavigation,
	fetchRecipesByTitle,
}) {
	const title = match.params.title;

	useEffect(() => {
		hideNavigation();
		fetchRecipesByTitle(title);
	}, [hideNavigation, title, fetchRecipesByTitle]);

	const isLoaded = useMemo(
		() => !!recipeLoadingState && Object.keys(recipeLoadingState).length === 0,
		[recipeLoadingState],
	);

	return (
		<React.Fragment>
			<Topbar title={title} />
			{isLoaded ? (
				<Content searchedRecipesByTitle={searchedRecipesByTitle} title={title} />
			) : (
				<LoadingIndicator />
			)}
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	searchedRecipesByTitle: state.dataDB.recipes,
	recipeLoadingState: state.dataDB.loadingState,
});

const mapDispatchToProps = (dispatch) => ({
	hideNavigation: () => dispatch(hideNavigation()),
	fetchRecipesByTitle: (title) => dispatch(fetchRecipesByTitle(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchedRecipesPage);
