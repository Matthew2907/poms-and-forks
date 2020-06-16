import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

import { Topbar, Content, Bottombar } from './components'; 
import { LoadingIndicator } from 'components';
import { hideNavigation } from 'data/actions/app.actions';
import { fetchRecipe } from 'data/actions/recipe.actions';

function SingleRecipePage({match, recipe, recipeState, hideNavigation, fetchRecipe }){
	useEffect(() => {
		hideNavigation();
		fetchRecipe(match.params.id);
	}, [hideNavigation, fetchRecipe, match.params.id])
	
	const isLoaded = useMemo(
		() => !!recipeState && Object.keys(recipeState).length === 0
		,[recipeState]
	); 

	return(
		<React.Fragment>
			<Topbar title={recipe.recipeTitle}></Topbar>
			{isLoaded ? <Content recipe={recipe}/> : <LoadingIndicator/>}
			<Bottombar/>
		</React.Fragment>
	)
}

const mapStateToProps = (state) => ({
	recipe: state.recipe.recipe,
	recipeState: state.recipe.loadingState,
  });

const mapDispatchToProps = dispatch => ({
	fetchRecipe: (id) => dispatch(fetchRecipe(id)),
	hideNavigation: () => dispatch(hideNavigation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipePage);
