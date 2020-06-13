import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RecipeListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const RecipeContainer = styled.div`
	flex-basis: 50%;
	height: 30vh;
	
`;

export const ImageContainer = styled(Link)`
	display: block;
	width: 75%;
	margin: 1% auto 5%;
	border: 0.5px solid #000000;
	border-radius: 7px;
	background-color: #C4C4C4;
	background-image: url(${(props) => props.url});
	background-size: cover;
	background-position: center;

	&::after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
`;

export const RecipeTitle = styled.h3`
	width: 100%;
	font-size: 12px;
	text-align: center;
`;
