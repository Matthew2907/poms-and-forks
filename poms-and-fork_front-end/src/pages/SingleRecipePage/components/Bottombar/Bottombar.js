import React from 'react';
import { Button, Bar } from 'components';
import shoppingListIcon from 'images/Shopping icon.svg';
import stepModeIcon from 'images/Stepmode icon.svg';


function Bottombar({ click }) {

	return(
		<Bar variant="bottombar">
			<Button variant="firstBottom" onClick={click}>
				<img src={shoppingListIcon} alt=""/>
			</Button>
			<Button variant="secondBottom">
				<img src={stepModeIcon} alt=""/>
			</Button>
		</Bar>
	)
}

export default Bottombar;