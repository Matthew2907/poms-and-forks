import React, {useMemo} from 'react';

import {Button, Bar} from 'components';
import closeIcon from 'images/Close icon.svg';
import menuIcon from 'images/Menu icon.svg';

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

export default Topbar;
