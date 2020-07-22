import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Button} from 'components';
import {Container, List} from './Navigation.css';
import addRecipeIcon from 'images/Vector 20.svg';
import favouriteRecipeIcon from 'images/Like icon.svg';
import recipeListIcon from 'images/Vector 8.svg';
import settingsIcon from 'images/Settings icon.svg';
import shoppingListIcon from 'images/Shopping icon.svg';
import signupIcon from 'images/SignupIcon.svg';
import yourRecipesIcon from 'images/YourRecipes Icon.svg';

function Navigation({userFromNewStore, isNavigationActive}) {
	
	const sideBarButtonsAuthMemo = useMemo(() => {
		if(userFromNewStore && Object.entries(userFromNewStore).length > 0){
			return [
				{icon: signupIcon, content: 'Edit profile', to: '/user/edit-profile'},
				{icon: recipeListIcon, content: 'Recipes list', to: '/'},
				{icon: addRecipeIcon, content: 'Add recipe', to: '/add-recipe'},
				{icon: yourRecipesIcon, content: 'Your recipes', to: `/userRecipes/${userFromNewStore.id}`},
				{icon: favouriteRecipeIcon, content: 'Favourites', to: '/favourites'},
				{icon: shoppingListIcon, content: 'Shopping list', to: '/shoppinglist'},
				{icon: settingsIcon, content: 'Settings', to: '/settings'},
			];
		}
		return [
			{icon: signupIcon, content: 'Log in / Sign up', to: '/auth'},
			{icon: recipeListIcon, content: 'Recipes list', to: '/'},
		];
	},[userFromNewStore])

	return (
		<Container
			style={{
				left: `${isNavigationActive ? 0 : '-50%'}`,
			}}
		>
			<List>
				{sideBarButtonsAuthMemo.map((item) => (
					<li key={item.to}>
						<Button variant={'sideBar'} to={item.to} text={item.content}>
							<img src={item.icon} alt={item.content} />
						</Button>
					</li>
				))}
			</List>
		</Container>
	);
}

Navigation.propTypes = {
	isNavigationActive: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	isNavigationActive: state.applicationRecuder.isNavigationActive,
	userFromNewStore: state.dataDB.user,
});

export default connect(mapStateToProps)(Navigation);
