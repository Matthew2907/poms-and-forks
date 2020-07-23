import React, {Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Homepage} from 'pages';
import {Navigation, Wrapper, LoadingIndicator} from 'components';
import {useAuth} from 'utils/hooks/auth.hook';
import GlobalStyles from './index.css';
import {theme} from 'utils';

const UsersPanelPage = React.lazy(() => import('pages/UsersPanelPage'));
const AddRecipePage = React.lazy(() => import('pages/AddRecipePage'));
const FavouriteRecipesPage = React.lazy(() => import('pages/FavouriteRecipesPage'));
const SettingsPage = React.lazy(() => import('pages/SettingsPage'));
const ShoppinglistPage = React.lazy(() => import('pages/ShoppinglistPage'));
const SingleRecipePage = React.lazy(() => import('pages/SingleRecipePage'));
const SearchedRecipesPage = React.lazy(() => import('pages/SearchedRecipesPage'));
const LoginSignupPage = React.lazy(() => import('pages/LoginSignupPage'));
const UserWithIdRecipes = React.lazy(() => import('pages/UserWithIdRecipes'));
const ErrorPage = React.lazy(() => import('pages/ErrorPage'));
const EditRecipePage = React.lazy(() => import('pages/EditRecipePage'));

function App({storedToken}) {
	useAuth();
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
				<Wrapper>
					<Suspense fallback={<LoadingIndicator />}>{routes}</Suspense>
				</Wrapper>
			</Router>
		</ThemeProvider>
	);
}

const mapStateToProps = (state) => ({
	storedToken: state.applicationRecuder.storedToken,
});

export default connect(mapStateToProps)(App);
