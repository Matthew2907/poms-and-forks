import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
		transform-origin: center;
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

export const SideNavigationButton = styled(RootButton)`
	margin-left: 12px;
	width: 20%;
	position: static;
	transform: translate(0,0);
`;

export const FirstRightTopButton = styled(RootButton)`
	left: 74%;
`;

export const SecondRightTopButton = styled(RootButton)`
	left: 86%;
`;

export const FirstBottomButton = styled(RootButton)`
	left: 30%;
`;

export const SecondBottomButton = styled(RootButton)`
	left: auto;
	right: 30%;
`;

export const IngredientButton = styled(RootButton)`
	width: 8%;
	left: auto;
	right: 4%;
`;

export const SliderAndDescAddRightButton = styled(RootButton)`
	left: auto;
	right: 5%;
`;

export const CameraButton = styled(RootButton)`
	width: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const DescDeleteButton = styled(RootButton)`
	position: static;
	align-self: center;
	width: 10%;
	transform: translate(0,0);
`;

export const NextSliderButton = styled(RootButton)`
	left: auto;
	right: 5%;
	transform: translateY(-50%) rotate(180deg);
`;

export const AddImageInput = styled.label`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 20%;
	height: ${0.08 * window.innerWidth}px;
	background-color: rgb(196, 196, 196);
	border: 0.5px solid #000000;
	border-radius: 15%;
	transform: translate(-50%, -50%);
	
	img {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 80%;
		height: auto;
		transform: translate(-50%,-50%);
	}
`;