import React, {useEffect, useState, useRef} from 'react';
import {connect} from 'react-redux';

import {Topbar, AddRecipeForm} from './components';
import {hideNavigation} from 'data/actions/app.actions';

function AddRecipePage({user, hideNavigation}) {
	const saveButtonRef = useRef(null);
	const [recipeInfo, setRecipeInfo] = useState({});

	useEffect(() => {
		hideNavigation();
		saveButtonRef.current.setAttribute('disabled', true);
		saveButtonRef.current.setAttribute('style', 'background-color: rgba(0,0,0,0.6);');
	}, [hideNavigation]);

	return (
		<React.Fragment>
			<Topbar saveButtonRef={saveButtonRef} recipeInfo={recipeInfo} />
			<AddRecipeForm
				saveButtonRef={saveButtonRef}
				user={user}
				setRecipeInfo={setRecipeInfo}
			/>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	user: state.data.user,
});

const mapDispatchToProps = (dispatch) => ({
	hideNavigation: () => dispatch(hideNavigation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipePage);
