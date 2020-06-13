import React from 'react';
import Topbar from './Topbar';
import Content from './Content';

function Homepage(){
	return(
		<React.Fragment>
			<Topbar/>
			<Content/>
		</React.Fragment>
	)
}

export default Homepage;
