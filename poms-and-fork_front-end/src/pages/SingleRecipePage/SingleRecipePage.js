import React, {useEffect, useMemo, useState} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import {Topbar, Content, Bottombar, StepModeModal} from './components';
import {LoadingIndicator, Modal} from 'components';
import {
	hideNavigation,
	setDescriptionStepIndex,
	setSliderImageIndex,
} from 'data/actions/app.actions';
import {
	fetchRecipeById,
	fetchCreatorById,
	fetchUserById,
	resetCurrentRecipeCreatorAndRecipe,
	fetchUserUpdateShoppingList,
} from 'data/actions/dataDB.actions';

function SingleRecipePage({
	match,
	loadingState,
	storedToken,
	currentRecipe,
	loggedUser,
	currentRecipeCreator,
	currentSliderImageIndex,
	hideNavigation,
	setDescriptionStepIndex,
	setSliderImageIndex,
	fetchRecipeById,
	fetchUserById,
	fetchCreatorById,
	resetCurrentRecipeCreatorAndRecipe,
	fetchUserUpdateShoppingList,
}) {
	const [ingredientsArrForShoppingList, setIngredientsArrForShoppingList] = useState([]);
	let history = useHistory();

	const isLoaded = useMemo(
		() =>
			!!loadingState &&
			Object.keys(loadingState).length === 0 &&
			Object.keys(currentRecipe).length > 0,
		[loadingState, currentRecipe],
	);

	// Redirect to /error if url wrong
	const isUrlGood = useMemo(() => {
		if (isLoaded && typeof currentRecipe.message === 'string') {
			history.push('/error');
			return null;
		}
		return true;
	}, [isLoaded, currentRecipe, history]);
	// ###################################################################
	// Fetch recipe next fetch creator and set shopping list in state
	useEffect(() => {
		if (Object.entries(currentRecipe).length > 0) {
			fetchCreatorById(currentRecipe.creator);
			setIngredientsArrForShoppingList(currentRecipe.recipeIngredients);
		} else {
			fetchRecipeById(match.params.id);
			hideNavigation();
		}
	}, [currentRecipe, hideNavigation, match.params.id, fetchRecipeById, fetchCreatorById]);
	// ###################################################################
	// Delete current user and recipe from store after exit
	useEffect(() => {
		return function cleanup() {
			resetCurrentRecipeCreatorAndRecipe();
		};
	}, [resetCurrentRecipeCreatorAndRecipe]);
	// ###################################################################
	return (
		<React.Fragment>
			{isLoaded &&
			isUrlGood &&
			currentRecipeCreator &&
			Object.entries(currentRecipeCreator).length > 0 ? (
				<React.Fragment>
					<Topbar
						storedToken={storedToken}
						fetchUserById={fetchUserById}
						loggedUser={loggedUser}
						recipe={currentRecipe}
						resetSliderImageIndex={setSliderImageIndex}
						setSliderImageIndex={setSliderImageIndex}
					/>
					<Content
						history={history}
						storedToken={storedToken}
						recipe={currentRecipe}
						creator={currentRecipeCreator}
						ingredientsArrForShoppingList={ingredientsArrForShoppingList}
						currentSliderImageIndex={currentSliderImageIndex}
						setSliderImageIndex={setSliderImageIndex}
						setIngredientsArrForShoppingList={setIngredientsArrForShoppingList}
					/>
				</React.Fragment>
			) : (
				<LoadingIndicator />
			)}
			<Bottombar
				recipeId={match.params.id}
				loggedUser={loggedUser}
				storedToken={storedToken}
				ingredientsArrForShoppingList={ingredientsArrForShoppingList}
				fetchUserUpdateShoppingList={fetchUserUpdateShoppingList}
			/>

			<Switch>
				<Route path="/recipe/:id/stepmode">
					<Modal resetDescriptionStepIndex={setDescriptionStepIndex}>
						{isLoaded ? <StepModeModal /> : <LoadingIndicator />}
					</Modal>
				</Route>
			</Switch>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	loadingState: state.dataDB.loadingState,
	loggedUser: state.dataDB.user,
	currentRecipe: state.dataDB.currentRecipe,
	currentRecipeCreator: state.dataDB.currentRecipeCreator,
	storedToken: state.applicationRecuder.storedToken,
	currentSliderImageIndex: state.applicationRecuder.currentSliderImageIndex,
});

const mapDispatchToProps = (dispatch) => ({
	hideNavigation: () => dispatch(hideNavigation()),
	setDescriptionStepIndex: (index) => dispatch(setDescriptionStepIndex(index)),
	setSliderImageIndex: (index) => dispatch(setSliderImageIndex(index)),
	fetchRecipeById: (id) => dispatch(fetchRecipeById(id)),
	fetchCreatorById: (id) => dispatch(fetchCreatorById(id)),
	fetchUserById: (id) => dispatch(fetchUserById(id)),
	resetCurrentRecipeCreatorAndRecipe: () => dispatch(resetCurrentRecipeCreatorAndRecipe()),
	fetchUserUpdateShoppingList: (userId, shoppingList, storedToken) =>
		dispatch(fetchUserUpdateShoppingList(userId, shoppingList, storedToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipePage);
