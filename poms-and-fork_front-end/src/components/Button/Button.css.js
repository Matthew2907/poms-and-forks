import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from 'utils';

export const StyledNavigationLink = styled(Link)`
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
	position: absolute;
	top: 50%;
	right: 30%;
	width: 10%;
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
		transform-origin: center;
		content: "";
		display: block;
		padding-bottom: 100%;
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

	&:focus {
		outline: none;
		box-shadow: none;
	  }

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		height: auto;
		padding: 15%;
		transform: translate(-50%,-50%);
	}

	@media ${device.mobileM} { 
		width: 6%;
	}

	@media ${device.tablet} { 
		width: 8%;
	}  

	@media ${device.tablet} and (orientation: landscape) { 
		width: 5%;
	}

	@media ${device.tablet} and (orientation: portrait) { 
		width: 6%;
	}

	@media ${device.laptop} and (orientation: landscape) { 
		width: 5%;
	}  

	@media ${device.laptop} and (orientation: portrait) { 
		width: 6%;
	}  

	@media ${device.laptopL} { 
		width: 3.5%;
	}  

`;

export const SideNavigationButton = styled(RootButton)`
	margin-left: 12px;
	width: 20%;
	position: static;
	transform: translate(0,0);

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

	@media ${device.mobileM} { 
		left: 80%;
	}
`;

export const SecondRightTopButton = styled(RootButton)`
	left: 86%;
	background-color: rgba(0,0,0,0.6);

	@media ${device.mobileM} { 
		left: 90%;
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
	transform: translate(0,0);
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

export const EditUserButton = styled(RootButton)`
	width: 80%;
	height: 4vh;
	top: 94%;
	left: 50%;
	border-radius: 6px;
	background-color: rgba(196, 196, 196, 0.6);
	transform: translateX(-50%);
	font-weight: bold;

	@media ${device.mobileM} and (orientation: landscape) { 
		width: 40%;
		height: 7vh;
		top: 88%;
		transform: translateX(0);
	}

	@media ${device.tablet} and (orientation: landscape) { 
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

	@media ${device.laptop} and (orientation: landscape) { 
		height: 5vh;
		left: 56%;
		border-radius: 10px;
	}

	@media ${device.laptop} and (orientation: portrait) { 
		width: 40%;
		height: 4vh;
		top: 92%;
		border-radius: 20px;
	}

	@media ${device.iPadPro} { 
		height: 4.5vh;
		left: 50%;
		transform: translateX(20%);
	}

	&::after {
		padding-bottom: 0;
	}
`;

export const SettingsNavigationButton = styled(RootButton)`
	width: 10%;
	position: static;
	margin-right: 10%;
	transform: translate(0,0);

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
	position: absolute;
	top: 50%;
	left: 50%;
	width: 20%;
	height: ${0.08 * window.innerWidth}px;
	background-color: rgb(196, 196, 196);
	border: 0.5px solid #000000;
	border-radius: 15%;
	transform: translate(-50%, -50%);
	
	@media ${device.mobileM} and (orientation: landscape) { 
		width: 15%;
		height: ${0.06 * window.innerWidth}px;
	}

	@media ${device.laptop} { 
		width: 15%;
		height: ${0.045 * window.innerWidth}px;
	}

	@media ${device.laptopL} { 
		width: 15%;
		height: ${0.04 * window.innerWidth}px;
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