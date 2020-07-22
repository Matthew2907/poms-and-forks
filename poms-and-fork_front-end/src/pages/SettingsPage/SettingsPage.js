import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Topbar, Content} from './components';
import {hideNavigation} from 'data/actions/app.actions';

function SettingsPage({loggedUser, storedToken, hideNavigation}) {
	useEffect(() => {
		hideNavigation();
	}, [hideNavigation]);

	return (
		<React.Fragment>
			<Topbar />
			<Content loggedUser={loggedUser} storedToken={storedToken} />
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	loggedUser: state.dataDB.user,
	storedToken: state.applicationRecuder.storedToken,
});

const mapDispatchToProps = (dispatch) => ({
	hideNavigation: () => dispatch(hideNavigation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
