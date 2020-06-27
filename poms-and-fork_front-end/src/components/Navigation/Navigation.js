import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from "components";
import { Container, List } from './Navigation.css';
import userIcon from 'images/Ellipse 7.svg'
import recipeListIcon from 'images/Vector 8.svg'
import favouriteRecipeIcon  from 'images/Like icon.svg'
import addRecipeIcon from 'images/Vector 20.svg'
import shoppingListIcon from 'images/Shopping icon.svg'
import settingsIcon from 'images/Settings icon.svg'

function Navigation({ isNavigationActive }) {
	const sideBarButtonsProps = [	
		{ icon: userIcon ,content: 'Edit profile', to: '/user/edit-profile' },
		{ icon: recipeListIcon ,content: 'Recipes list', to: '/' },
		{ icon: addRecipeIcon ,content: 'Add recipe', to: '/add-recipe' },
		{ icon: favouriteRecipeIcon, content: 'Favourites', to: '/favourites' },
		{ icon: shoppingListIcon ,content: 'Shopping list', to: '/shoppinglist' },
		{ icon: settingsIcon ,content: 'Settings', to: '/settings' }
	];
	// do komponentu Navigation przyjdą propsy któe przekażemy do children komponentu List bo będziemy miec różne wariacje komponentu navigation
	// do li props key powinien być stabilny i  wegenerowany wyżej w warstwie aplikacji, na potrzeby prototypu zostawiam item.to czyli path
	return(
		<Container style={{
			left: `${isNavigationActive ? 0 : "-50%"}`
		}}>
			<List>
				{sideBarButtonsProps.map(item => (
					<li key={item.to}>
						<Button variant={"sideBar"} to={item.to} text={item.content} >
							<img src={item.icon} alt=""/>
						</Button>	
					</li>
				))}
			</List>
		</Container>
	)
}

Navigation.propTypes = {
	isNavigationActive: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	isNavigationActive: state.applicationRecuder.isNavigationActive,
});

export default connect(mapStateToProps)(Navigation);