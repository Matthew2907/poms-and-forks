import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Topbar, Content} from './components';
import {hideNavigation} from 'data/actions/app.actions';

function UsersPanelPage({user, hideNavigation}) {
	useEffect(() => {
		hideNavigation();
	}, [hideNavigation, user]);

	return (
		<React.Fragment>
			<Topbar />
			<Content user={user} />
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	user: state.data.user,
});

const mapDispatchToProps = (dispatch) => ({
	hideNavigation: () => dispatch(hideNavigation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPanelPage);
