import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';

import {device} from 'utils';

export const StyledNavigationLink = styled(Link)`
	display: flex;
	flex-basis: 25%;
	align-items: center;
	height: 100%;
	text-decoration: none;

	p {
		display: flex;
		flex-basis: 75%;
		padding-left: 6%;
		color: rgb(255, 255, 255);
		font-size: 12px;
		font-weight: bold;

		@media ${device.tablet} and (orientation: landscape) {
			font-size: 16px;
		}

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 24px;
		}

		@media ${device.laptop} and (orientation: landscape) {
			font-size: 24px;
		}
	}
`;

export const StyledSearchLink = styled(StyledNavigationLink)`
	display: inline;
`;

export const StyledRegularLink = styled(Link)`
	width: 10%;
	position: absolute;
	top: 50%;
	right: 30%;
	transform: translateY(-50%);

	@media ${device.mobileM} and (orientation: landscape) {
		width: 6%;
	}

	@media ${device.tablet} and (orientation: portrait) {
		width: 6%;
	}

	@media ${device.laptopL} {
		width: 3%;
	}

	&::after {
		display: block;
		transform-origin: center;
		padding-bottom: 100%;
		content: '';
	}
`;

export const ErrorLink = styled(StyledNavigationLink)`
	flex-basis: 6%;

	@media ${device.iphoneX} and (orientation: portrait) {
		flex-basis: 5%;
	}
`;

export const RootButton = styled.button`
	width: 10%;
	max-width: 50px;
	position: absolute;
	top: 50%;
	left: 4%;
	border-radius: 15%;
	background-color: white;
	transform: translateY(-50%);
	cursor: pointer;
	text-decoration: none;
	overflow: hidden;

	&::before {
		background: linear-gradient(to bottom, #33bdef 5%, #c0ffc0 100%);
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 180%;
		z-index: -1;
		transition: 0.8s;
		border-radius: 0 0 50% 50%;
		content: '';
	}

	&::after {
		display: block;
		transform-origin: center;
		padding-bottom: 100%;
		content: '';
	}

	&:focus {
		outline: none;
		box-shadow: none;
	}

	&:disabled,
	&:hover:disabled,
	&:active:disabled,
	&:disabled::before {
		background: linear-gradient(to bottom, #0000 5%, #0000 95%);
		cursor: not-allowed;
	}

	img {
		width: 100%;
		height: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		padding: 15%;
		transform: translate(-50%, -50%);
	}

	@media ${device.mobileM} and (orientation: landscape) {
		width: 6%;
		max-width: 30px;
	}

	@media ${device.tablet} {
		width: 8%;
	}

	@media ${device.tablet} and (orientation: landscape) {
		width: 5%;
		max-width: 30px;
	}

	@media ${device.tablet} and (orientation: portrait) {
		width: 6%;
	}

	@media (min-height: 500px) and (max-height: 756px) and (min-width: 700px) and (max-width: 1024px) {
		max-width: 50px;
	}

	@media ${device.laptop} and (orientation: landscape) {
		width: 5%;
		max-width: 50px;

		&:hover::before {
			height: 0;
		}
	}

	@media ${device.laptop} and (orientation: portrait) {
		width: 6%;
		max-width: 70px;
	}

	@media ${device.laptopL} {
		width: 3.5%;
	}
`;

export const SideNavigationButton = styled(RootButton)`
	width: 20%;
	margin-left: 12px;
	position: static;
	transform: translate(0, 0);

	@media ${device.mobileM} and (orientation: landscape) {
		width: 19%;
	}

	@media ${device.tablet} and (orientation: landscape) {
		width: 16%;
	}

	@media ${device.tablet} and (orientation: portrait) {
		width: 18%;
		margin-left: 10%;
	}

	@media ${device.laptop} and (orientation: landscape) {
		margin-left: 10%;
	}

	@media ${device.laptopL} {
		width: 12%;
	}
`;

export const FirstRightTopButton = styled(RootButton)`
	left: 74%;
	background-color: rgba(255, 0, 0, 0.6);

	@media ${device.mobileM} and (orientation: landscape) {
		left: 80%;
	}

	@media ${device.tablet} and (orientation: landscape) {
		left: auto;
		right: 10%;
	}

	@media ${device.tablet} and (orientation: portrait) {
		left: auto;
		right: 13%;
	}
`;

export const SecondRightTopButton = styled(RootButton)`
	left: 86%;



	@media ${device.mobileM} and (orientation: landscape) {
		max-width: 30px;
		left: 90%;
	}

	@media ${device.tablet} {
		left: auto;
		right: 4%;
	}

	@media ${device.tablet} and (orientation: landscape) {
		max-width: 30px;
	}

	@media ${device.laptop} and (orientation: landscape) {
		max-width: 50px;
	}

	@media (min-height: 500px) and (max-height: 756px) and (min-width: 700px) and (max-width: 1024px) {
		max-width: 50px;
	}
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
	right: 5%;

	@media ${device.mobileM} {
		width: 6%;
	}

	@media ${device.laptopL} {
		width: 5%;
	}
`;

export const ShoppingIngredientButton = styled(IngredientButton)`
	width: 8%;
	left: auto;
	right: 5%;

	@media ${device.laptopL} {
		width: 5%;
	}
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
	align-self: center;
	width: 9%;
	top: auto;
	left: auto;
	right: 5%;
	transform: translate(0, 0);
`;

export const NextSliderButton = styled(RootButton)`
	left: auto;
	right: 4%;
	transform: translateY(-50%) rotate(180deg);

	@media ${device.laptopL} {
		width: 3.5%;
	}
`;

export const BackStepModeButton = styled(RootButton)`
	left: -5%;

	@media ${device.tablet} {
		width: 7%;
	}

	@media ${device.laptopL} {
		width: 4%;
	}
`;

export const NextStepModeButton = styled(RootButton)`
	left: auto;
	right: -5%;
	transform: translateY(-50%) rotate(180deg);

	@media ${device.tablet} {
		width: 7%;
	}

	@media ${device.laptopL} {
		width: 4%;
	}
`;

export const ErrorButton = styled.button`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	padding: 5px;
	border-radius: 6px;
	font-weight: bold;
	overflow: hidden;
	background-color: white;
	background: none;
	color: black;
	cursor: pointer;

	&::before {
		background: linear-gradient(to bottom, #33bdef 5%, #c0ffc0 100%);
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 180%;
		z-index: -1;
		transition: 0.8s;
		border-radius: 0 0 50% 50%;
		content: '';
	}

	@media ${device.mobileS} {
		font-size: 16px;
	}

	@media ${device.tablet} and (orientation: landscape) {
		height: 9vh;
		border-radius: 8px;
		font-size: 20px;
	}

	@media ${device.tablet} and (orientation: portrait) {
		height: 4vh;
		border-radius: 10px;
		font-size: 20px;
	}

	@media ${device.laptop} and (orientation: landscape) {
		height: 6vh;
		border-radius: 10px;
		font-size: 24px;

		&:hover::before {
			height: 0;
		}
	}

	@media ${device.laptop} and (orientation: portrait) {
		height: 4vh;
		border-radius: 10px;
		font-size: 30px;
	}

	@media ${device.iPadPro} {
		height: 4.5vh;
	}

	@media ${device.laptopL} {
		height: 5.5vh;
	}

	&::after {
		padding-bottom: 0;
	}
`;

export const EditUserButton = styled.button`
	width: 80%;
	height: 4vh;
	position: absolute;
	top: 94%;
	left: 50%;
	border-radius: 6px;
	font-weight: bold;
	transform: translateX(-50%);
	cursor: pointer;
	overflow: hidden;
	background-color: white;
	background: none;
	color: black;

	&::before {
		background: linear-gradient(to bottom, #33bdef 5%, #c0ffc0 100%);
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 180%;
		z-index: -1;
		transition: 0.8s;
		border-radius: 0 0 50% 50%;
		content: '';
	}

	&:disabled {
		background: linear-gradient(to bottom, #000000b5 5%, #00000082 95%);
	}

	&:hover:disabled {
		cursor: not-allowed;
	}

	&:active:disabled,
	&:disabled::before {
		background: linear-gradient(to bottom, #0000 5%, #0000 95%);
		cursor: not-allowed;
	}

	@media ${device.mobileM} and (orientation: landscape) {
		width: 40%;
		height: 7vh;
		top: 88%;
		transform: translateX(0);
	}

	@media ${device.tablet} and (orientation: landscape) {
		height: 6vh;
		top: 85%;
		border-radius: 10px;
		font-size: 20px;
	}

	@media ${device.tablet} and (min-height: 1000px) and (orientation: landscape) {
		height: 8vh;
		top: 85%;
		border-radius: 10px;
		font-size: 20px;
	}

	@media ${device.tablet} and (orientation: portrait) {
		width: 50%;
		height: 4vh;
		border-radius: 10px;
		font-size: 20px;
	}

	@media ${device.tablet} and (max-height: 420px) {
		height: 7vh;
		top: 87%;
	}

	@media ${device.laptop} and (orientation: landscape) {
		height: 5vh;
		left: 56%;
		border-radius: 10px;

		&:hover::before {
			height: 0;
		}
	}

	@media ${device.laptop} and (orientation: portrait) {
		width: 40%;
		height: 3vh;
		top: 92%;
		border-radius: 20px;
	}

	@media ${device.iPadPro} {
		height: 4.5vh;
		top: 88%;
		left: 50%;
		transform: translateX(20%);
	}

	&::after {
		padding-bottom: 0;
	}

	&:focus {
		outline: none;
		box-shadow: none;
	}
`;

export const EditUserSubmitButton = styled(EditUserButton)`
	top: 70% !important;

	@media (orientation: portrait) {
		top: 85% !important;
	}
`;

export const SettingsNavigationButton = styled(RootButton)`
	width: 10%;
	position: static;
	margin-right: 10%;
	transform: translate(0, 0);
	background-color: white;

	@media ${device.mobileM} and (orientation: landscape) {
		width: 6%;
	}

	@media ${device.tablet} and (orientation: landscape) {
		width: 5%;
	}

	@media ${device.tablet} and (orientation: portrait) {
		width: 7%;
	}

	@media ${device.laptopL} {
		width: 5%;
	}
`;

export const AddImageInput = styled.label`
	width: 20%;
	height: ${({updateWidth}) => `${0.08 * updateWidth}px`};
	position: absolute;
	top: 50%;
	left: 50%;
	border: 0.5px solid #000000;
	border-radius: 15%;
	background-color: white;
	transform: translate(-50%, -50%);
	cursor: pointer;
	overflow: hidden;

	&::before {
		background: linear-gradient(to bottom, #33bdef 5%, #c0ffc0 100%);
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 180%;
		z-index: -1;
		transition: 0.8s;
		border-radius: 0 0 50% 50%;
		content: '';
	}

	@media ${device.mobileM} and (orientation: landscape) {
		width: 15%;
		height: ${({updateWidth}) => `${0.06 * updateWidth}px`};
	}

	@media ${device.laptop} {
		width: 15%;
		height: ${({updateWidth}) => `${0.045 * updateWidth}px`};

		&:hover::before {
			height: 0;
		}
	}

	@media ${device.laptopL} {
		width: 15%;
		height: ${({updateWidth}) => `${0.04 * updateWidth}px`};
	}

	img {
		width: 80%;
		height: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;
