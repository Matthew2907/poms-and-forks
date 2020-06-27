import React from 'react';
import { useHistory } from "react-router-dom";

import { Button, Bar } from 'components';
import backIcon from 'images/BackIcon.svg';

function Topbar() {

	let history = useHistory();
	const handleGoBackToMenu = () => {
		history.push("/");
	};

	return(
		<Bar variant="topbar">
			<Button variant="mainMenu" onClick={handleGoBackToMenu}>
				<img src={backIcon} alt=""/>
			</Button>
			<h1>Settings</h1>
		</Bar>
	)
}

export default Topbar;