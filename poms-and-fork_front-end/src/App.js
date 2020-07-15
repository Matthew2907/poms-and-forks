import React, {useEffect, useCallback} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
	AddRecipePage,
	FavouriteRecipesPage,
	Homepage,
	SettingsPage,
	ShoppinglistPage,
	SingleRecipePage,
	UsersPanelPage,
	SearchedRecipesPage,
	ErrorPage,
} from 'pages';
import {Navigation, Wrapper, LoadingIndicator} from 'components';
import {updateFavouriteRecipesListInDB} from 'utils/globalFunctions';
import {setShoppinglistAddIngredients} from 'data/actions/app.actions';
import {fetchUser, fetchFavouriteRecipe} from 'data/actions/data.actions';
import GlobalStyles from './index.css';
import {theme} from 'utils';

function App({
	user,
	favouriteRecipesList,
	shoppinglistIngredients,
	fetchUser,
	fetchFavouriteRecipe,
	setShoppinglistAddIngredients,
}) {
	const setFavRecpsArr = useCallback(
		(favRecpsArr) => {
			if (typeof favRecpsArr !== 'undefined' && favRecpsArr.length > 0) {
				favRecpsArr.forEach((id) => {
					fetchFavouriteRecipe(id);
				});
			}
		},
		[fetchFavouriteRecipe],
	);

	useEffect(() => {
		fetchUser('sylwia@test.pl', 'fluffy');
	}, [fetchUser]);

	useEffect(() => {
		if (Object.entries(user).length > 0) {
			setShoppinglistAddIngredients(user.userShoppinglist);
		}
	}, [user, setShoppinglistAddIngredients]);

	useEffect(() => {
		if (favouriteRecipesList.length === 0) {
			setFavRecpsArr(user.favouriteRecipes);
		}
	}, [user.favouriteRecipes, favouriteRecipesList.length, setFavRecpsArr]);

	useEffect(() => {
		if (typeof shoppinglistIngredients !== 'undefined' && shoppinglistIngredients.length < 20) {
			updateFavouriteRecipesListInDB(shoppinglistIngredients, user, 'shoppingIngredients');
		}
	}, [shoppinglistIngredients]);

	toast.configure();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router>
				<Navigation />
				<Wrapper>
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route path="/recipe/:id" component={SingleRecipePage} />
						<Route path="/user/edit-profile" component={UsersPanelPage} />
						<Route path="/add-recipe" component={AddRecipePage} />
						<Route path="/favourites" component={FavouriteRecipesPage} />
						<Route path="/shoppinglist" component={ShoppinglistPage} />
						<Route path="/settings" component={SettingsPage} />
						<Route path="/recipes/:title" component={SearchedRecipesPage} />
						<Route component={ErrorPage} />
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
		shoppinglistIngredients: state.applicationRecuder.shoppinglistIngredients,
	}),
	{
		fetchUser,
		setShoppinglistAddIngredients,
		fetchFavouriteRecipe,
	},
)(App);

function RootApp() {
	return (
		<React.Suspense fallback={<LoadingIndicator />}>
			<ConnectedApp />
		</React.Suspense>
	);
}

export default RootApp;
