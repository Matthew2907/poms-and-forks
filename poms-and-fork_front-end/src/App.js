import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AddRecipePage, FavouriteRecipesPage, Homepage, SettingsPage, ShoppinglistPage, SingleRecipePage, UsersPanelPage, SearchedRecipesPage, ErrorPage } from 'pages';
import { Navigation, Wrapper, LoadingIndicator } from 'components';
import GlobalStyles from './index.css';
import { theme } from 'utils';
import { fetchUser, fetchFavouriteRecipe } from 'data/actions/data.actions';
import { setFavouriteRecipeToList } from 'data/actions/app.actions';

function App({ 
	user, favouriteRecipesList,
	fetchUser, setFavouriteRecipeToList, fetchFavouriteRecipe
}) {
	
	const setFavRecpsArr = (favRecpsArr) => {
		if(typeof favRecpsArr !== "undefined" && favRecpsArr.length > 0){
			favRecpsArr.forEach(id => {
				fetchFavouriteRecipe(id);
			})
		}
	};

	useEffect(() => {
		fetchUser("Mateusz");
	}, [])
	
	useEffect(() => {
		if(favouriteRecipesList.length === 0){
			setFavRecpsArr(user.favouriteRecipes);
		}
	}, [user.favouriteRecipes])
	
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles/>
			<Router>		
				<Navigation/>
				<Wrapper>
					<Switch>
						<Route exact path="/" component={Homepage}/>
						<Route path="/recipe/:id" component={SingleRecipePage}/>	
						<Route path="/user/edit-profile" component={UsersPanelPage}/>
						<Route path="/add-recipe" component={AddRecipePage}/>
						<Route path="/favourites" component={FavouriteRecipesPage}/>
						<Route path="/shoppinglist" component={ShoppinglistPage}/>
						<Route path="/settings" component={SettingsPage}/>
						<Route path="/recipes/:title" component={SearchedRecipesPage}/>
						<Route component={ErrorPage}/>
					</Switch>
				</Wrapper>
			</Router>
		</ThemeProvider>
	);
}

const ConnectedApp = connect(
	(state) => ({
		user: state.data.user,
		favouriteRecipesList: state.applicationRecuder.favouriteRecipesList,
	}),{
	fetchUser,
	fetchFavouriteRecipe,
	setFavouriteRecipeToList,
})(App)

function RootApp() {
	return (
		<React.Suspense fallback={<LoadingIndicator/>}>
			<ConnectedApp />		
	  </React.Suspense> 
	)
}

export default RootApp;