import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Topbar, Content} from './components';
import {fetchUserById} from 'data/actions/dataDB.actions';
import {hideNavigation} from 'data/actions/app.actions';

function LoginSignupPage({hideNavigation, fetchUserById}) {
	useEffect(() => {
		hideNavigation();
	}, [hideNavigation]);
	
	return (
		<React.Fragment>
			<Topbar />
			<Content fetchUserById={fetchUserById}/>
		</React.Fragment>
	);
};

const mapDispatchToProps = (dispatch) => ({
	hideNavigation: () => dispatch(hideNavigation()),
	fetchUserById: (id) => dispatch(fetchUserById(id)),
});

export default connect(null, mapDispatchToProps)(LoginSignupPage);
