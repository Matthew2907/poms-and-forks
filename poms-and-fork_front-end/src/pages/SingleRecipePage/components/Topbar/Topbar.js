import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, Bar } from 'components';
import backIcon from 'images/BackIcon.svg';
import shareIcon from 'images/Share icon.svg';
import likeIcon from 'images/Vector 12.svg';


function Topbar({ title }) {

	let history = useHistory();
	const handleClick = () => {
		history.push("/");
	};
	
	return(
		<Bar text={title} variant="topbar">
			<Button variant="mainMenu" onClick={() => handleClick()}>
				<img src={backIcon} alt=""/>
			</Button>
				<h1>{title}</h1>
			<Button variant="firstRightTop">
				<img src={shareIcon} alt=""/>
			</Button>
			<Button variant="secondRightTop">
				<img src={likeIcon} alt=""/>
			</Button>
		</Bar>
	)
}

export default Topbar;