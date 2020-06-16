import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContentCantainer = styled.div`
	min-height: 90vh;
	margin-top: 10vh;
	background-color: rgb(236,236,236);
`;

export const MainRecipeContainer = styled.div`
	position: relative;
	width: 100%;
	height: 60vh;
`;

export const MainImageContainer = styled(Link)`
	position: absolute;
	left: 50%;
	top: 4%;
	width: 80%;
	height: 73%;
	border: 0.5px solid rgb(0, 0, 0);
	border-radius: 7px;
	background-image: url(${(props) => props.url});
	background-size: cover;
	background-position: center;
	transform: translateX(-50%);
`;

export const MainRecipeTitle = styled.h2`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	padding-bottom: 3%;
	text-align: center;
`;
