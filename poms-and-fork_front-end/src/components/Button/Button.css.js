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

export const ErrorLink = styled(StyledNavigationLink)`
	flex-basis: 6%;

	@media ${device.resolutionI} and (orientation: portrait) { 
		flex-basis: 5%;
	}  
`;

export const RootButton = styled.button`
	position: absolute;
	top: 50%;
	left: 4%;
	width: 10%;
	max-width: 50px;
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

	@media ${device.mobileM} and (orientation: landscape)  { 
		max-width: 30px;
		width: 6%;
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

export const ErrorButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	padding: 5px;
	border-radius: 6px;
	background-color: rgba(196, 196, 196, 0.6);
	font-weight: bold;

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
	border: 0.5px solid rgb(0, 0, 0);
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
		height: 3vh;
		top: 92%;
		border-radius: 20px;
	}

	@media ${device.iPadPro} { 
		height: 4.5vh;
		left: 50%;
		top: 88%;
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
	height: ${({updateWidth}) => `${0.08 * updateWidth}px`};
	background-color: rgb(196, 196, 196);
	border: 0.5px solid #000000;
	border-radius: 15%;
	transform: translate(-50%, -50%);
	
	@media ${device.mobileM} and (orientation: landscape) { 
		width: 15%;
		height: ${({updateWidth}) => `${0.06 * updateWidth}px`};
	}

	@media ${device.laptop} { 
		width: 15%;
		height: ${({updateWidth}) => `${0.045 * updateWidth}px`};
	}

	@media ${device.laptopL} { 
		width: 15%;
		height: ${({updateWidth}) => `${0.04 * updateWidth}px`};
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