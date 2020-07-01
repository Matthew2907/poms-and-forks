import React from 'react';
import {connect} from 'react-redux';

import {Button, Bar} from 'components';
import {showNavigation, hideNavigation} from 'data/actions/app.actions';
import closeIcon from 'images/Close icon.svg';
import menuIcon from 'images/Menu-icon.svg';

function Topbar({isNavigationActive, hideNavigation, showNavigation}) {
	return (
		<Bar variant="topbar">
			<Button
				variant="mainMenu"
				onClick={isNavigationActive ? hideNavigation : showNavigation}
			>
				<img src={isNavigationActive ? closeIcon : menuIcon} alt="show menu" />
			</Button>
			<h1>Favourite recipes</h1>
		</Bar>
	);
}

const mapStateToProps = (state) => ({
	isNavigationActive: state.applicationRecuder.isNavigationActive,
});

const mapDispatchToProps = (dispatch) => ({
	showNavigation: () => dispatch(showNavigation()),
	hideNavigation: () => dispatch(hideNavigation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
