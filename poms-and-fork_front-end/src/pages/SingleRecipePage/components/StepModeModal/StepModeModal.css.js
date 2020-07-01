import styled from 'styled-components';

import {device} from 'utils';

export const StepModeModalContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 90%;
	height: 100%;
	margin: 0 auto;

	h2 {
		position: absolute;
		top: 3%;
		left: 50%;
		transform: translateX(-50%);

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 30px;
		}

		@media ${device.laptop} {
			font-size: 36px;
		}
	}

	p {
		width: 100%;
		max-height: 75%;
		margin: 5% 0;
		padding: 0 20px;
		text-align: left;
		letter-spacing: 0.5px;
		overflow-y: scroll;

		@media ${device.mobileM} {
			margin: 5% 20px;
		}

		@media ${device.mobileL} and (orientation: landscape) {
			font-size: 16px;
		}

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 20px;
		}

		@media ${device.laptop} {
			font-size: 24px;
			margin: 5% 30px;
		}
	}
`;
