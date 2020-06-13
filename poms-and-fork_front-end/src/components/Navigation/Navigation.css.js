import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
	position: fixed;
	left: 0;
	top: 10%;
	width: 50%;
	height: 90vh;
	background: rgba(0, 0, 0, 0.6);
	transition: 0.3s;
	z-index: 1;
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: 100%;
	margin-top: 15%;

	li {
		flex-basis: 12%;
	}
`;

export const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	flex-basis: 25%;
	height: 100%;
	text-decoration: none;
	
	p {
		display: flex;
		flex-basis: 75%;
		padding-left: 6%;
		color: rgb(255, 255, 255);
		font-size: 12px;
		font-weight: bold;
	}
`;

export const RootButton = styled.button`
	position: absolute;
	top: 50%;
	left: 4%;
	width: 10%;
	background-color: rgb(196, 196, 196);
	border: 0.5px solid #000000;
	border-radius: 15%;
	transform: translateY(-50%);

	&::after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
	img {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 80%;
		height: auto;
		transform: translate(-50%,-50%);
	}
`;

export const SideBarButton = styled(RootButton)`
	margin-left: 12px;
	width: 20%;
	position: static;
	transform: translate(0,0);
`;