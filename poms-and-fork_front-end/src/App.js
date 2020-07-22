import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
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
	LoginSignupPage,
	UserWithIdRecipes,
	ErrorPage,
	EditRecipePage,
} from 'pages';
import {Navigation, Wrapper, LoadingIndicator} from 'components';
import {fetchUserById} from 'data/actions/dataDB.actions';
import {useAuth} from 'utils/hooks/auth.hook';
import GlobalStyles from './index.css';
import {theme} from 'utils';

function App({storedToken}) {
	const {} = useAuth();
	toast.configure();

	let routes;

	if (storedToken) {
		routes = (
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/recipe/:id" component={SingleRecipePage} />
				<Route path="/user/edit-profile" component={UsersPanelPage} />
				<Route path="/add-recipe" component={AddRecipePage} />
				<Route path="/favourites" component={FavouriteRecipesPage} />
				<Route path="/shoppinglist" component={ShoppinglistPage} />
				<Route path="/settings" component={SettingsPage} />
				<Route path="/recipes/:title" component={SearchedRecipesPage} />
				<Route path="/userRecipes/:id" component={UserWithIdRecipes} />
				<Route path="/recipeEdit/:id" component={EditRecipePage} />
				<Route path="/error" component={ErrorPage} />
				<Redirect to="/" />
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/recipe/:id" component={SingleRecipePage} />
				<Route path="/recipes/:title" component={SearchedRecipesPage} />
				<Route path="/userRecipes/:id" component={UserWithIdRecipes} />
				<Route path="/auth" component={LoginSignupPage} />
				<Route path="/error" component={ErrorPage} />
				<Route path="/recipeEdit/recipe" component={EditRecipePage} />
				<Redirect to="/auth" />
			</Switch>
		);
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router>
				<Navigation />
				<Wrapper>{routes}</Wrapper>
			</Router>
		</ThemeProvider>
	);
}

const ConnectedApp = connect(
	(state) => ({
		loadingState: state.dataDB.loadingState,
		storedToken: state.applicationRecuder.storedToken,
	}),
	{
		fetchUserById,
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
