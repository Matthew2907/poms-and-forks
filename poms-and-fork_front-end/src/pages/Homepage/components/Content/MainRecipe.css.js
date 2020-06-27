import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from 'utils';
// background-color: rgb(236,236,236); wstawiono grafikę
export const ContentCantainer = styled.div`
	min-height: 90vh;
	margin-top: 10vh;
	

	@media ${device.mobileM} { 
		margin-top: 13vh;
	}

	@media ${device.tablet} and (orientation: landscape) {
		margin-top: 15vh;
	}

	@media ${device.tablet} and (orientation: portrait) { 
		margin-top: 6vh;
	}

	@media ${device.laptop} and (orientation: landscape) { 
		margin-top: 9vh;
	}
`;

export const MainRecipeContainer = styled.div`
	position: relative;
	width: 100%;
	height: 60vh;

	@media ${device.mobileM} { 
		height: 87vh;
	}

	@media ${device.resolutionI} { 
		height: 62vh;
	}

	@media ${device.tablet} { 
		height: 40vh;
	}

	@media ${device.tablet} and (orientation: landscape) { 
		height: 85vh;
	}

	@media ${device.laptop} and (orientation: landscape) { 
		height: 49vh;
	}
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

	@media ${device.mobileS} { 
		width: 95%;
		height: 75%;
	  }

	  @media ${device.mobileM} { 
		width: 90%;
		height: 80%;
		top: 5%;
	  } 

	@media ${device.tablet} and (orientation: landscape) { 
		height: 80%;
		top: 3%;
	}

	@media ${device.tablet} and (orientation: portrait) { 
		width: 94%;
	}

	
`;

export const MainRecipeTitle = styled.h2`
	position: absolute;
	left: 0;
	top: 82%;
	width: 100%;
	padding-bottom: 3%;
	text-align: center;

	@media ${device.mobileM} { 
		top: 88%;
		padding-bottom: 0%;
		font-size: 22px;
	  } 

	@media ${device.resolutionI} { 
		font-size:30px;
		bottom: 15px;
	}

	@media ${device.tablet} { 
		font-size: 34px;
	}

	@media ${device.tablet} and (orientation: landscape) { 
		top: 85%;
	}
`;
