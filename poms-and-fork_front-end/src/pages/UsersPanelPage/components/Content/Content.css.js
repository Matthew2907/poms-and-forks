import styled from 'styled-components';

import {device} from 'utils';

export const ContentContainer = styled.div`
	height: 88vh;
	position: relative;
	margin-top: 10vh;

	

	@media ${device.mobileM} and (orientation: landscape) {
		display: flex;
		height: 84vh;
		margin-top: 16vh;
	}

	@media ${device.tablet} and (orientation: portrait) {
		height: 90vh;
		margin-top: 6vh;
	}

	@media ${device.laptop} and (orientation: landscape) {
		margin-top: 12vh;
	}

	@media ${device.iphoneX} and (orientation: portrait) {
		margin-top: 7vh;
	}
`;

export const UserImageContainer = styled.div`
	width: 60%;
	margin: 12vh auto 2vh;
	border-radius: 50%;
	background-image: url(${(props) => props.url});
	background-size: cover;
	background-position: center;

	@media ${device.mobileM} and (orientation: landscape) {
		flex-basis: 45%;
		margin: 20px 25px auto 0;
	}

	@media (min-width: 500px) and (max-width: 770px) and (orientation: portrait) {
		max-height: 400px;
		flex-basis: 45%;
	}

	@media ${device.tablet} and (orientation: portrait) {
		flex-basis: 35%;
		margin: 10vh auto 2vh;
	}

	@media ${device.tablet} and (orientation: landscape) {
		flex-basis: 36%;
		margin: 25px 12% auto 25px;
	}

	@media ${device.laptop} and (orientation: landscape) {
		flex-basis: 45%;
		margin: 13% 12% auto 25px;
	}

	@media ${device.iPadPro} and (min-height: 1000px;) {
		flex-basis: 50%;
		margin: 25% 10% auto 0;
	}

	@media ${device.laptopL} {
		flex-basis: 50%;
		margin: 12% 10% auto 0;
	}

	&::after {
		transform-origin: center;
		content: '';
		display: block;
		padding-bottom: 100%;
	}
`;

export const UserInformationContainer = styled.div`
	height: 55vh;
	padding-top: 1vh;
	border-top: 2px solid rgba(0, 0, 0, 0.4);

	@media ${device.mobileM} and (orientation: landscape) {
		flex-basis: 45%;
	}
`;

export const SingleUserInfoContainer = styled.div`
	display: flex;
	align-items: center;
	height: 7vh;

	@media ${device.mobileM} and (orientation: landscape) {
		height: 12vh;
	}

	@media (min-width: 420px) and (max-width: 500px) and (orientation: portrait) {
		height: 6vh;
	}
	
	@media (min-width: 500px) and (max-width: 770px) and (orientation: portrait) {
		height: 4vh;
	}

	@media ${device.tablet} and (orientation: portrait) {
		height: 6vh;
	}

	> p {
		flex-basis: 50%;

		@media ${device.tablet} and (orientation: landscape) {
			font-size: 20px;
		}

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 24px;
		}

		@media ${device.laptop} {
			font-size: 24px;
		}

		@media ${device.iPadPro} {
			font-size: 28px;
		}
	}

	> img {
		@media ${device.laptop} {
			height: 30px;
		}

		@media ${device.iPadPro} {
			height: 40px;
		}
	}
`;
