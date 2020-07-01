import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Topbar, Content} from './components';
import {hideNavigation} from 'data/actions/app.actions';

function Homepage({hideNavigation}) {
	useEffect(() => {
		hideNavigation();
	}, [hideNavigation]);

	return (
		<React.Fragment>
			<Topbar />
			<Content />
		</React.Fragment>
	);
}

const mapDispatchToProps = (dispatch) => ({
	hideNavigation: () => dispatch(hideNavigation()),
});

export default connect(null, mapDispatchToProps)(Homepage);
