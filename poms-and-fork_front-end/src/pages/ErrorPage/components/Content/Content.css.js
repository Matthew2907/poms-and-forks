import styled from 'styled-components';

import { device } from 'utils';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
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
		margin-top: 7vh;
	}

	@media ${device.tablet} and (orientation: portrait) { 
		height: 93vh;
	}

	@media ${device.laptop} and (orientation: landscape) { 
		height: 91vh;
		margin-top: 9vh;
	}

	>h1 {
		text-align: center;

		@media ${device.tablet} and (orientation: portrait) { 
			font-size: 60px;
		}

		@media ${device.laptop} { 
			font-size: 80px;
		}
	}

	>h2 {
		text-align: center;

		@media ${device.tablet} and (orientation: portrait) { 
			font-size: 40px;
		}

		@media ${device.laptop} { 
			font-size: 60px;
		}
	}
`;