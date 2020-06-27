import styled from 'styled-components';

import { device } from 'utils';

export const Container = styled.nav`
	width: 50%;
	height: 90vh;
	position: fixed;
	left: 0;
	top: 10%;
	background: rgba(0, 0, 0, 0.6);
	transition: 0.3s;
	z-index: 1;
	
	@media ${device.mobileM} and (orientation: landscape) { 
		top: 14%;
		width: 32%;
	}

	@media ${device.tablet} and (orientation: portrait) { 
		top: 6%;
		width: 40%;
		height: 94vh;
	}

	@media ${device.laptop} and (orientation: landscape) { 
		top: 9%;
		width: 28%;
		height: 91vh;
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
			flex-basis: 14%;
		}
	}
`;