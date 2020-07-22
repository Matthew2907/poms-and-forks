import React, {useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';

import {Button, Bar, SearchInput} from 'components';
import {showNavigation, hideNavigation} from 'data/actions/app.actions';
import menuIcon from 'images/Menu-icon.svg';
import closeIcon from 'images/Close icon.svg';
import searchIcon from 'images/Search icon.svg';

function Topbar({isNavigationActive, showNavigation, hideNavigation}) {
	const [searchedRecipeTitle, setSearchedRecipeTitle] = useState('');
	const searchRecipeByTitleButtonRef = useRef(null);

	useEffect(() => {
		if (searchedRecipeTitle === '') {
			searchRecipeByTitleButtonRef.current.setAttribute('disabled', true);
			searchRecipeByTitleButtonRef.current.setAttribute(
				'style',
				'background: linear-gradient(to bottom, #000000b5 5%, #00000082 95%);',
			);
		} else {
			searchRecipeByTitleButtonRef.current.removeAttribute('disabled');
			searchRecipeByTitleButtonRef.current.setAttribute(
				'style',
				'background: none;',
			);
		}
	}, [searchedRecipeTitle]);

	return (
		<Bar variant={'topbar'}>
			<Button
				variant="mainMenu"
				onClick={isNavigationActive ? hideNavigation : showNavigation}
			>
				<img src={isNavigationActive ? closeIcon : menuIcon} alt="show menu" />
			</Button>
			<SearchInput
				onChange={(event) => setSearchedRecipeTitle(event.target.value)}
				placeholder={'Search for recipes'}
			></SearchInput>
			<Button
				ref={searchRecipeByTitleButtonRef}
				variant="secondRightTop"
				to={searchedRecipeTitle !== '' ? `/recipes/${searchedRecipeTitle}` : ''}
			>
				<img src={searchIcon} alt="search for recipes" />
			</Button>
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
