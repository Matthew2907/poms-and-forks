import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Topbar, Content} from './components';
import {hideNavigation} from 'data/actions/app.actions';
import {fetchUserUpdate} from 'data/actions/dataDB.actions';

function UsersPanelPage({loggedUser, storedToken, hideNavigation, fetchUserUpdate}) {
	useEffect(() => {
		hideNavigation();
	}, [hideNavigation]);

	return (
		<React.Fragment>
			<Topbar />
			<Content fetchUserUpdate={fetchUserUpdate} user={loggedUser} storedToken={storedToken} />
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	loggedUser: state.dataDB.user,
	storedToken: state.applicationRecuder.storedToken,
});

const mapDispatchToProps = (dispatch) => ({
	hideNavigation: () => dispatch(hideNavigation()),
	fetchUserUpdate: (userId, updatedUser, storedToken) => dispatch(fetchUserUpdate(userId, updatedUser, storedToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPanelPage);
