import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

import { Topbar, AddRecipeForm } from './components';
import { hideNavigation } from 'data/actions/app.actions';

function AddRecipePage({user, hideNavigation}){

	const saveButtonRef = useRef(null);
	const [recipeInfo, setRecipeInfo] = useState({}); 

	useEffect(() => {
		hideNavigation();
	}, [hideNavigation])

	return(
		<React.Fragment>
			<Topbar saveButtonRef={saveButtonRef} recipeInfo={recipeInfo}/>
			<AddRecipeForm saveButtonRef={saveButtonRef} user={user} setRecipeInfo={setRecipeInfo}/>
		</React.Fragment>
	)
}

// Get first user from users collection. Temporary solution.
const mapStateToProps = (state) => ({
	user: state.data.users[0],
});

const mapDispatchToProps = dispatch => ({
	hideNavigation: () => dispatch(hideNavigation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipePage);