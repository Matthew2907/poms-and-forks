import React, {useEffect, useState, useRef} from 'react';
import {connect} from 'react-redux';

import {Topbar, AddRecipeForm} from './components';
import {hideNavigation} from 'data/actions/app.actions';

function AddRecipePage({user, storedToken, hideNavigation}) {
	const saveButtonRef = useRef(null);
	const [recipeInfo, setRecipeInfo] = useState({});

	useEffect(() => {
		hideNavigation();
		saveButtonRef.current.setAttribute('disabled', true);
		saveButtonRef.current.setAttribute('style', 'background-color: rgba(0,0,0,0.6);');
	}, [hideNavigation]);

	return (
		<React.Fragment>
			<Topbar
				storedToken={storedToken}
				recipeInfo={recipeInfo}
				saveButtonRef={saveButtonRef}
			/>
			<AddRecipeForm
				saveButtonRef={saveButtonRef}
				user={user}
				setRecipeInfo={setRecipeInfo}
			/>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	user: state.dataDB.user,
	storedToken: state.applicationRecuder.storedToken,
});

const mapDispatchToProps = (dispatch) => ({
	hideNavigation: () => dispatch(hideNavigation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipePage);
