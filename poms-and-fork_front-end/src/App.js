import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AddRecipePage, FavouriteRecipesPage, Homepage, SettingsPage, ShoppinglistPage, SingleRecipePage, UsersPanelPage, SearchedRecipesPage } from 'pages';
import { Navigation, Wrapper, LoadingIndicator } from 'components';
import GlobalStyles from './index.css';
import theme from 'utils/theme';
import { fetchUsers } from 'data/actions/data.actions';

function App({ fetchUsers }) {
	
	useEffect(() => {
		fetchUsers();
	}, [fetchUsers])
	
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
					</Switch>
				</Wrapper>
			</Router>
		</ThemeProvider>
	);
}

const ConnectedApp = connect(null, {
	fetchUsers,
})(App)

function RootApp() {
	return (
		<React.Suspense fallback={<LoadingIndicator/>}>
			<ConnectedApp />		
	  </React.Suspense> 
	)
}

export default RootApp;