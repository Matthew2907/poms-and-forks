import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from 'utils';

export const RecipeListContainer = styled.div`
	display: flex;
	margin-top: 0;
	flex-wrap: wrap;
`;

export const FavouriteListContainer = styled.div`
	display: flex;
	margin-top: 11vh;
	flex-wrap: wrap;

	@media ${device.mobileM} { 
		margin-top: 14vh;
	}

	@media ${device.tablet} and (orientation: portrait) { 
		margin-top: 6vh;
	}

	@media ${device.laptop} and (orientation: landscape) { 
		margin-top: 9vh;
	}

	@media ${device.resolutionI} and (orientation: portrait) { 
		margin-top: 7vh;
	}
`;

export const RecipeContainer = styled.div`
	flex-basis: 50%;
	height: 30vh;
	
	@media ${device.mobileM} { 
		height: 43vh;
	}

	@media ${device.resolutionI} { 
		height: 28vh;
	  }

	@media ${device.tablet} { 
		height: 25vh;
	}  

	@media ${device.tablet} and (orientation: landscape) { 
		height: 43vh;
	}

	@media ${device.tablet} and (orientation: portrait) { 
		height: 27vh;
	}

	@media ${device.laptop} and (orientation: landscape) { 
		height: 45vh;
	}
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

	@media (orientation: landscape) {
		&::after {
			content: "";
			display: block;
			padding-bottom: 0;
		}
	}

	@media ${device.mobileS} { 
		width: 85%;
	}

	@media ${device.mobileM} { 
		height: 80%;
		margin: 2% auto;
	}

	@media ${device.resolutionI} { 
		width: 90%;
	}

	@media ${device.tablet} { 
		height: 70%;
	}  

	@media ${device.tablet} and (orientation: landscape) { 
		height: 80%;
	}
`;

export const RecipeTitle = styled.h3`
	width: 100%;
	font-size: 12px;
	text-align: center;

	@media ${device.resolutionI} { 
		font-size:14px;
	}

	@media ${device.mobileM} { 
		font-size: 14px
	}  

	@media ${device.tablet} { 
		font-size: 24px
	}  

	@media ${device.tablet} and (orientation: landscape) { 
		font-size: 16px;
	}

	@media ${device.tablet} and (orientation: landscape) { 
		font-size: 16px;
	}

	@media ${device.laptop} and (orientation: landscape) { 
		font-size: 20px;
	}
`;
