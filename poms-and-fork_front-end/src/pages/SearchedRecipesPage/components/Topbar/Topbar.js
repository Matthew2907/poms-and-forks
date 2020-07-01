import React from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {Button, Bar} from 'components';
import {resetSearchedRecipeByTitle} from 'data/actions/recipe.actions';
import backIcon from 'images/BackIcon.svg';

function Topbar({title, resetSearchedRecipeByTitle}) {
	let history = useHistory();

	const handleGoBackToMenu = () => {
		resetSearchedRecipeByTitle();
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

const mapDispatchToProps = (dispatch) => ({
	resetSearchedRecipeByTitle: () => dispatch(resetSearchedRecipeByTitle()),
});

export default connect(null, mapDispatchToProps)(Topbar);
