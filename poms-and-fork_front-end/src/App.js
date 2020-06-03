import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";

import { Navigation } from 'components';
import GlobalStyles from './index.css';

import theme from 'utils/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles/>
			<Router>
				<Navigation items={[
					{ content: 'Edit profile', to: '/user/edit-profile' },
					{ content: 'Recipes list', to: '/' },
					{ content: 'Add recipe', to: '/add-recipe' },
					{ content: 'Favourites', to: '/favourites' },
					{ content: 'Shopping list', to: '/shoppinglist' },
					{ content: 'Settings', to: '/settings' },
				]}/>
				<Switch>
					<Route exact path="/">
						Homepage
					</Route>
					<Route path="/user/edit-profile">
						Edit profile
					</Route>
					<Route path="/add-recipe">
						Add recipe
					</Route>
					<Route path="/favourites">
						Favourites
					</Route>
					<Route path="/shoppinglist">
						Shopping list
					</Route>
					<Route path="/settings">
						Settings
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;