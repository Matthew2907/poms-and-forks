import React from 'react';

import {List, Container} from './Content.css';
import {Button} from 'components';

function Content() {
	const functionWillCreate = () => {
		console.log('Jeszcze nie działam!');
	};

	return (
		<Container>
			<List>
				<h2>General</h2>
				<li>
					<Button variant={'settings'} onClick={functionWillCreate} />
					<p>Dark mode</p>
				</li>
			</List>
			<List>
				<h2>Account</h2>
				<li>
					<Button variant={'settings'} onClick={functionWillCreate} />
					<p>Sign out</p>
				</li>
			</List>
			<p>Copyright &copy; by Mateusz Skołyszewski</p>
		</Container>
	);
}

export default Content;
