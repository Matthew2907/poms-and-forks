import React from 'react';
import {useHistory} from 'react-router-dom';

import {Button, Bar} from 'components';
import backIcon from 'images/Back icon.svg';

function Topbar({title}) {
	let history = useHistory();

	const handleGoBackToMenu = () => {
		history.push('/');
	};

	const limitRecipeTitle = (title) => {
		const newTitle = [];
		if (title.length > 12) {
			title.split(' ').reduce((acc, cur) => {
				if (acc + cur.length <= 12) {
					newTitle.push(cur);
				}
				return acc + cur.length;
			}, 0);
			return `${newTitle.join(' ')}...`;
		}
		return title;
	};

	return (
		<Bar variant="topbar">
			<Button variant="mainMenu" onClick={handleGoBackToMenu}>
				<img src={backIcon} alt="go to previous page" />
			</Button>
			<h1>{limitRecipeTitle(title)}</h1>
		</Bar>
	);
}

export default Topbar;
