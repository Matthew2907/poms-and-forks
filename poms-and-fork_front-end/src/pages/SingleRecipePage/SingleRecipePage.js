import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Topbar from './Topbar';
import Bottombar from './Bottombar';
import Content from './Content'; 
import { hideNavigation } from 'data/actions/app.actions';
import { fetchRecipe } from 'data/actions/recipe.actions';

function SingleRecipePage({match, recipe, hideNavigation, fetchRecipe}){
	useEffect(() => {
		hideNavigation();
		fetchRecipe(match.params.id);
	}, [hideNavigation, fetchRecipe, match.params.id])
	
	return(
		<React.Fragment>
			<Topbar title={recipe.recipeTitle}></Topbar>
			<Content recipe={recipe}/>
			<Bottombar/>
		</React.Fragment>
	)
}

const mapStateToProps = (state) => ({
	recipe: state.recipe.recipe,
  });

const mapDispatchToProps = dispatch => ({
	fetchRecipe: (id) => dispatch(fetchRecipe(id)),
	hideNavigation: () => dispatch(hideNavigation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipePage);
