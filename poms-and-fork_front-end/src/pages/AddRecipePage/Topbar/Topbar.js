import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, Bar } from 'components';
import backIcon from 'images/BackIcon.svg';
import saveIcon from 'images/Save icon.svg';


function Topbar() {

	let history = useHistory();
	const handleClick = () => {
		history.push("/");
	};

	return(
		<Bar variant="topbar">
			<Button variant="mainMenu" onClick={() => handleClick()}>
				<img src={backIcon} alt=""/>
			</Button>
			<h1>Add new recipe</h1>
			<Button variant="secondRightTop">
				<img src={saveIcon} alt=""/>
			</Button>
		</Bar>
	)
}

export default Topbar;