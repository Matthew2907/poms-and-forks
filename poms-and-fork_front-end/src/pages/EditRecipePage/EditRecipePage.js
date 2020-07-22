import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {Topbar, Content} from './components';
import {fetchRecipeUpdate} from 'data/actions/dataDB.actions';

function EditRecipePage({match, currentRecipe, storedToken, fetchRecipeUpdate}) {
	const [updatedRecipe, setUpdatedRecipe] = useState({});
	const [isReadyForSubmitButton, setIsReadyForSubmitButton] = useState(false);
	return (
		<React.Fragment>
			<Topbar
				recipeId={match.params.id}
				isReadyForSubmitButton={isReadyForSubmitButton}
				storedToken={storedToken}
				updatedRecipe={updatedRecipe}
				fetchRecipeUpdate={fetchRecipeUpdate}
			/>
			<Content
				setUpdatedRecipe={setUpdatedRecipe}
				setIsReadyForSubmitButton={setIsReadyForSubmitButton}
			/>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	storedToken: state.applicationRecuder.storedToken,
});

const mapDispatchToProps = (dispatch) => ({
	fetchRecipeUpdate: (recipeId, updatedRecipe, storedToken) =>
		dispatch(fetchRecipeUpdate(recipeId, updatedRecipe, storedToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipePage);
