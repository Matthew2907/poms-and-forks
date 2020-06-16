import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Homepage, AddRecipePage, SingleRecipePage } from 'pages';
import { Navigation, Wrapper, LoadingIndicator } from 'components';
import GlobalStyles from './index.css';
import theme from 'utils/theme';
import { fetchUsers, fetchImages } from 'data/actions/data.actions';

function App({ fetchUsers, fetchImages }) {
	
	useEffect(() => {
		fetchUsers();
		fetchImages();
	}, [fetchUsers, fetchImages])
	
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles/>
			<Router>		
				<Navigation/>
				<Wrapper>
					<Switch>
						<Route exact path="/" component={Homepage}/>
						<Route path="/recipe/:id" component={SingleRecipePage}/>	
						<Route path="/user/edit-profile" component={AddRecipePage}/>
						<Route path="/add-recipe" component={AddRecipePage}/>
						<Route path="/favourites" component={AddRecipePage}/>
						<Route path="/shoppinglist" component={AddRecipePage}/>
						<Route path="/settings" component={AddRecipePage}/>
					</Switch>
				</Wrapper>
			</Router>
		</ThemeProvider>
	);
}

const ConnectedApp = connect(null, {
	fetchUsers,
	fetchImages,
})(App)

function RootApp() {
	return (
		<React.Suspense fallback={<LoadingIndicator/>}>
			<ConnectedApp />		
	  </React.Suspense> 
	)
}

export default RootApp;