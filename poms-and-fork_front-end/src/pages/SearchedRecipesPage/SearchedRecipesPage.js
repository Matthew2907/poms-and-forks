import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

import { Topbar, Content } from './components';
import { LoadingIndicator } from 'components';
import { hideNavigation } from 'data/actions/app.actions';
import { fetchRecipeByTitle } from 'data/actions/recipe.actions';

function SearchedRecipesPage({ 
	match, searchedRecipeByTitle, recipeLoadingState,
	hideNavigation, fetchRecipeByTitle
}){

	const title = match.params.title;

	useEffect(() => {
		hideNavigation();
		fetchRecipeByTitle(title);
	}, [hideNavigation, fetchRecipeByTitle, title])

	const isLoaded = useMemo(
		() => !!recipeLoadingState && Object.keys(recipeLoadingState).length === 0
		,[recipeLoadingState]
	); 

	return(
		<React.Fragment>
			<Topbar title={title}/>
			{isLoaded ? <Content searchedRecipeByTitle={searchedRecipeByTitle} title={title}/> : <LoadingIndicator/>}
		</React.Fragment>
	)
}

const mapStateToProps = (state) => ({
	searchedRecipeByTitle: state.recipe.searchedRecipeByTitle,
	recipeLoadingState: state.recipe.loadingState,
});

const mapDispatchToProps = dispatch => ({
	fetchRecipeByTitle: (title) => dispatch(fetchRecipeByTitle(title)),
	hideNavigation: () => dispatch(hideNavigation()),
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchedRecipesPage);