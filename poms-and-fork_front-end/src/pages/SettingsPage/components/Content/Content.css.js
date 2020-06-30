import styled from 'styled-components';

import { device } from 'utils';

export const Container = styled.nav`
	width: 100%;
	height: 90vh;
	position: relative;
	margin-top: 10vh;

	@media ${device.mobileM} and (orientation: landscape) { 
		margin-top: 14vh;
		height: 86vh;
	}

	@media ${device.tablet} and (orientation: landscape) {
		margin-top: 15vh;
	}

	@media ${device.tablet} and (orientation: portrait) { 
		margin-top: 6vh;
	}

	@media ${device.resolutionI} and (orientation: portrait) { 
		margin-top: 9vh;
	}

	@media ${device.tablet} and (orientation: portrait) { 
		height: 93vh;
	}

	@media ${device.laptop} and (orientation: landscape) { 
		height: 91vh;
		margin-top: 9vh;
	}

	>p {
		position: absolute;
		bottom: 1vh;
		left: 50%;
		width: 100%;
		text-align: center;
		transform: translateX(-50%);
	}
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-height: 44%;
	margin: 10px;

	@media ${device.mobileM} and (orientation: landscape) { 
		margin-top: 0;
	}

	@media ${device.mobileM} and (orientation: landscape) { 
		margin-top: 2%;
	}

	>h2 {
		margin: 1% 0;
		font-size: 18px;

		@media ${device.mobileL} and (orientation: landscape) { 
			font-size: 22px;
		}

		@media ${device.tablet} and (orientation: portrait) { 
			font-size: 28px;
		}
	}

	li {
		display: flex;
		flex-basis: 100%;
		align-items: center;
		margin-top: 2%;

		@media ${device.mobileM} and (orientation: landscape) { 
			flex-basis: 14%;
			margin-top: 0;
		}

		>p {
			@media ${device.mobileL} and (orientation: landscape) { 
				font-size: 18px;
			}

			@media ${device.tablet} and (orientation: portrait) { 
				font-size: 24px;
			} 
		}
	}
`;