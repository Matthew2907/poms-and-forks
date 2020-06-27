import React, { useEffect, useMemo, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Topbar, Content, Bottombar, StepModeModal } from './components'; 
import { LoadingIndicator, Modal } from 'components';
import { hideNavigation, setDescriptionStepIndex, setSliderImageIndex } from 'data/actions/app.actions';
import { fetchRecipe } from 'data/actions/recipe.actions';

function SingleRecipePage({
	match, recipe, recipeLoadingState, 
	hideNavigation, fetchRecipe, setDescriptionStepIndex, setSliderImageIndex 
}){
	const [ingredientsArrForShoppingList, setIngredientsArrForShoppingList] = useState();
	
	useEffect(() => {
		hideNavigation();
		fetchRecipe(match.params.id);
	}, [hideNavigation, fetchRecipe, match.params.id])
	
	const isLoaded = useMemo(
		() => !!recipeLoadingState && Object.keys(recipeLoadingState).length === 0 && Object.keys(recipe).length > 0
		,[recipeLoadingState]
	); 
	
	return(
		<React.Fragment>
			<Topbar recipe={recipe} resetSliderImageIndex={setSliderImageIndex}></Topbar>
			{isLoaded ? <Content recipe={recipe} setIngredientsArrForShoppingList={setIngredientsArrForShoppingList}/> : <LoadingIndicator/>}
			<Bottombar recipeId={match.params.id} ingredients={ingredientsArrForShoppingList}/>
			
			<Switch>
				<Route path="/recipe/:id/stepmode">
					<Modal resetDescriptionStepIndex={setDescriptionStepIndex}>
						{isLoaded ? 
							<StepModeModal recipeDescription={recipe.recipeDescriptionInSteps}/> : 
							<LoadingIndicator/>
						}
					</Modal>
				</Route>	
			</Switch>
		</React.Fragment>
	)
	
}

const mapStateToProps = (state) => ({
	recipe: state.recipe.recipe,
	recipeLoadingState: state.recipe.loadingState,
  });

const mapDispatchToProps = dispatch => ({
	fetchRecipe: (id) => dispatch(fetchRecipe(id)),
	hideNavigation: () => dispatch(hideNavigation()),
	setDescriptionStepIndex: (index) => dispatch(setDescriptionStepIndex(index)),
	setSliderImageIndex: (index) => dispatch(setSliderImageIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipePage);
