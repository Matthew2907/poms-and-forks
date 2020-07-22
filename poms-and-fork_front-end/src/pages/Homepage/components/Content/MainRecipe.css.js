import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {device} from 'utils';

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
		margin-top: 12vh;
	}

	@media ${device.iphoneX} and (orientation: portrait) {
		margin-top: 9vh;
	}

	@media ${device.laptop} and (orientation: landscape) {
		margin-top: 9vh;
	}
`;

export const MainRecipeContainer = styled.div`
	width: 100%;
	height: 60vh;
	position: relative;

	@media ${device.mobileM} {
		height: 87vh;
	}

	@media ${device.iphoneX} {
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
	height: 73%;
	width: 80%;
	position: absolute;
	top: 4%;
	left: 50%;
	
	border-radius: 7px;
	background-image: url(${(props) => props.url});
	background-size: cover;
	background-position: center;
	transform: translateX(-50%);
	box-shadow: 0 4px 8px 2px rgba(0,0,0,0.2);
  	transition: 0.3s;

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

	@media ${device.laptop} {
		:hover {
			box-shadow: 0 8px 16px 10px rgba(0,0,0,0.2);
		}
	}
`;

export const MainRecipeTitle = styled.h2`
	width: 100%;
	position: absolute;
	top: 82%;
	left: 0;
	padding-bottom: 3%;
	text-align: center;

	@media ${device.mobileM} {
		top: 88%;
		padding-bottom: 0%;
		font-size: 22px;
	}

	@media ${device.iphoneX} {
		font-size: 30px;
		bottom: 15px;
	}

	@media ${device.tablet} {
		font-size: 34px;
	}

	@media ${device.tablet} and (orientation: landscape) {
		top: 85%;
	}
`;
