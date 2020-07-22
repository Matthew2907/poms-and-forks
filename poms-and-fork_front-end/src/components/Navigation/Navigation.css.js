import styled from 'styled-components';

import {device} from 'utils';

export const Container = styled.nav`
	width: 50%;
	height: 90vh;
	position: fixed;
	top: 10%;
	left: 0;
	background: rgba(0, 0, 0, 0.6);
	transition: 0.3s;
	z-index: 1;

	@media ${device.mobileM} and (orientation: landscape) {
		width: 32%;
		top: 14%;
	}

	@media ${device.tablet} and (orientation: portrait) {
		width: 40%;
		height: 94vh;
		top: 6%;
	}

	@media ${device.iphoneX} and (orientation: portrait) {
		height: 91vh;
		top: 9%;
	}

	@media (min-height: 500px) and (min-width: 640px) {
		top: 10%;
	}

	@media (min-height: 1024px) and (min-width: 768px) {
		height: 91vh;
		top: 9%;
	}

	@media ${device.laptop} and (orientation: landscape) {
		width: 31%;
		height: 93vh;
		top: 7%;
	}
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: 100%;
	margin-top: 15%;

	@media ${device.mobileM} and (orientation: landscape) {
		margin-top: 4%;
	}

	li {
		flex-basis: 12%;

		@media ${device.mobileM} and (orientation: landscape) {
			flex-basis: 13%;
		}
	}
`;
