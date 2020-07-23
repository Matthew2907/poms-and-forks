import styled from 'styled-components';

import {device} from 'utils';

export const TextInputStyled = styled.input`
	width: 100%;
	padding: 0 10px;
	min-height: 30px;
	margin-top: 10px;
	background: transparent;
	border: 0.5px solid rgb(0, 0, 0);
	box-sizing: border-box;
	border-radius: 5px;
	letter-spacing: 0.5px;
	font-family: Montserrat, Arial, sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 14px;
	color: rgb(0, 0, 0);

	:nth-of-type(2) {
		margin-bottom: ${(props) => (props.loginMode ? '10px' : '0')};
	}

	::placeholder {
		opacity: 1;
		color: rgb(0, 0, 0);
		font-weight: bold;
		letter-spacing: 0.5px;
	}

	@media ${device.tablet} and (orientation: portrait) {
		font-size: 20px;
		line-height: 34px;
	}

	@media ${device.iPadPro} and (orientation: landscape) {
		font-size: 28px;
		line-height: 42px;
	}

	@media ${device.laptop} and (orientation: landscape) {
		min-height: 40px;
		font-size: 18px;
	}
`;
