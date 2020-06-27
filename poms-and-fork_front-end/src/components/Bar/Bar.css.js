import styled from 'styled-components';

import { device } from 'utils';

const Rootbar = styled.div`
	position: fixed;
	left: 0;
	width: 100%;
	height: 10vh;
	background-color: rgba(255, 255, 255, 1);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	z-index: 1;

	
	@media ${device.mobileM} { 
		height: 14vh;
	}

	@media ${device.tablet} and (orientation: portrait) { 
		height: 6vh;
	}

	@media ${device.laptop} and (orientation: landscape) { 
		height: 9vh;
	}

	@media ${device.resolutionI} and (orientation: portrait) { 
		height: 7vh;
	}

	h1 {
		position: absolute;
		left: 16%;
		top: 50%;
		max-width: 65%;
		font-size: 18px;
		transform: translateY(-50%);

		@media ${device.mobileS} { 
			font-size: 22px;
		}

		@media ${device.tablet} { 
			font-size: 28px;
		}

		@media ${device.laptop} { 
			font-size: 36px;
		}
	}
`;

export const Topbar = styled(Rootbar)`
	top: 0;
`;

export const Bottombar = styled(Rootbar)`
	bottom: 0;
`;
