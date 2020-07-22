import React, {useMemo} from 'react';
import {connect} from 'react-redux';

import {Button, Bar} from 'components';
import {showNavigation, hideNavigation} from 'data/actions/app.actions';
import closeIcon from 'images/Close icon.svg';
import menuIcon from 'images/Menu-icon.svg';

function Topbar({isNavigationActive, creator, hideNavigation, showNavigation}) {
	const title = useMemo(
		() => <h1>{`Recipes of ${Object.entries(creator).length > 0 ? creator.name : '...'}`}</h1>,
		[creator],
	);

	return (
		<Bar variant="topbar">
			<Button
				variant="mainMenu"
				onClick={isNavigationActive ? hideNavigation : showNavigation}
			>
				<img src={isNavigationActive ? closeIcon : menuIcon} alt="show menu" />
			</Button>
			{title}
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
