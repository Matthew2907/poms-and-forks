import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Topbar, Content } from './components';
import { resetRecipe } from 'data/actions/recipe.actions';

function ErrorPage({ resetRecipe }) {

	useEffect(() => {
		resetRecipe();
	},[resetRecipe])
	
	return(
		<React.Fragment>
			<Topbar/>
			<Content/>
		</React.Fragment>
	);
};

const mapDispatchToProps = (dispatch) => ({
	resetRecipe: () => dispatch(resetRecipe()),
});

export default connect(null, mapDispatchToProps)(ErrorPage);