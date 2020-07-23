import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Topbar, Content} from './components';
import {fetchUserById} from 'data/actions/dataDB.actions';
import {hideNavigation, showNavigation} from 'data/actions/app.actions';

function LoginSignupPage({isNavigationActive, showNavigation, hideNavigation, fetchUserById}) {
	useEffect(() => {
		hideNavigation();
	}, [hideNavigation]);

	return (
		<React.Fragment>
			<Topbar
				isNavigationActive={isNavigationActive}
				hideNavigation={hideNavigation}
				showNavigation={showNavigation}
			/>
			<Content fetchUserById={fetchUserById} />
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	isNavigationActive: state.applicationRecuder.isNavigationActive,
});

const mapDispatchToProps = (dispatch) => ({
	showNavigation: () => dispatch(showNavigation()),
	hideNavigation: () => dispatch(hideNavigation()),
	fetchUserById: (id) => dispatch(fetchUserById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignupPage);
