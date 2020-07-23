import React from 'react';

import {Button, Bar} from 'components';
import closeIcon from 'images/Close icon.svg';
import menuIcon from 'images/Menu icon.svg';

function Topbar({isNavigationActive, hideNavigation, showNavigation}) {
	return (
		<Bar variant="topbar">
			<Button
				variant="mainMenu"
				onClick={isNavigationActive ? hideNavigation : showNavigation}
			>
				<img src={isNavigationActive ? closeIcon : menuIcon} alt="show menu" />
			</Button>
			<h1>Sign up</h1>
		</Bar>
	);
}

export default Topbar;
