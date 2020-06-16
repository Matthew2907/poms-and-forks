import React from 'react';
import { connect } from 'react-redux';
import { Button, Bar, SearchInput } from 'components';
import { showNavigation ,hideNavigation } from 'data/actions/app.actions';
import menuIcon from 'images/Menu-icon.svg';
import closeIcon from 'images/Close icon.svg';

function Topbar({ isNavigationActive, showNavigation, hideNavigation}) {


	return(
		<Bar variant={"topbar"}>
			<Button variant="mainMenu" onClick={isNavigationActive ? hideNavigation : showNavigation}>
				<img src={isNavigationActive ? closeIcon : menuIcon} alt=""/>
			</Button>
			<SearchInput placeholder={"Search for recipes"}></SearchInput>
		</Bar>
	)
}

const mapStateToProps = (state) => ({
	isNavigationActive: state.applicationRecuder.isNavigationActive,
  });

const mapDispatchToProps = dispatch => ({
	showNavigation: () => dispatch(showNavigation()),
	hideNavigation: () => dispatch(hideNavigation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);