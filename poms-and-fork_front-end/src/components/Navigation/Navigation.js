import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from 'components';
import { Container, List } from './Navigation.css';

function Navigation({items}) {
	// do komponentu Navigation przyjdą propsy któe przekażemy do children komponentu List bo będziemy miec różne wariacje komponentu navigation
	return(
		<Container>
			<Wrapper>
				<List>
					{items.map(item => (
						<li key={item.to}>
							<Link to={item.to}>{item.content}</Link>
						</li>
					))}  
				</List>
			</Wrapper>
		</Container>
	)
}

export default Navigation;