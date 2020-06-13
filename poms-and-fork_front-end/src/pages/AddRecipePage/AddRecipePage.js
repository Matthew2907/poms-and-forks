import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Topbar from './Topbar';
import Content from './Content';
import { hideNavigation } from 'data/actions/app.actions';

function AddRecipePage({hideNavigation}){

	useEffect(() => {
		hideNavigation();
	}, [hideNavigation])

	return(
		<React.Fragment>
			<Topbar/>
			<Content/>
		</React.Fragment>
	)
}

const mapDispatchToProps = dispatch => ({
	hideNavigation: () => dispatch(hideNavigation()),
});

export default connect(null, mapDispatchToProps)(AddRecipePage);