import React, {useEffect, useMemo} from 'react';
import {connect} from 'react-redux';

import {Topbar, Content} from './components';
import {hideNavigation, showNavigation} from 'data/actions/app.actions';
import {fetchRecipesAll} from 'data/actions/dataDB.actions';

function Homepage({
	recipes,
	loadingState,
	hideNavigation,
	showNavigation,
	fetchRecipesAll,
}) {
	useEffect(() => {
		fetchRecipesAll();
		hideNavigation();
	}, [hideNavigation, fetchRecipesAll]);

	const isLoaded = useMemo(
		() => !!loadingState && Object.keys(loadingState).length === 0 && recipes.length > 0,
		[loadingState, recipes],
	);

	return (
		<React.Fragment>
			<Topbar
				showNavigation={showNavigation}
				hideNavigation={hideNavigation}
				
			/>
			{isLoaded && <Content recipes={recipes} />}
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	recipes: state.dataDB.recipes,
	loadingState: state.dataDB.loadingState,
});

const mapDispatchToProps = (dispatch) => ({
	showNavigation: () => dispatch(showNavigation()),
	hideNavigation: () => dispatch(hideNavigation()),
	fetchRecipesAll: () => dispatch(fetchRecipesAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
