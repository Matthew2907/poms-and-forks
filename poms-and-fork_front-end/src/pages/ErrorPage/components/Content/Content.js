import React from 'react';

import { Container } from './Content.css';
import { Button } from 'components';

function Content() {

	return(
		<Container>
			<h1>404</h1>
			<h2>page not found</h2>
			<Button to="/" variant="error">return home</Button>
		</Container>
	);
};

export default Content;