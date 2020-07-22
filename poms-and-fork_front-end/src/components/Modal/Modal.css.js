import styled from 'styled-components';

import {device} from 'utils';

export const Wrapper = styled.aside`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
`;

export const Content = styled.div`
	width: 90%;
	height: ${({updateWidth}) => `${1.1 * updateWidth}px`};
	max-height: 85vh;
	position: absolute;
	margin: auto;
	padding: 5px;
	box-shadow: ${({theme}) => `0 5px 10px 2px ${theme.colors.gray.dark}`};
	text-align: center;
	background-color: rgb(255, 255, 255);

	@media ${device.tablet} {
		width: 80%;
		height: ${({updateWidth}) => `${0.6 * updateWidth}px`};
	}
`;

export const CloseIcon = styled.div`
	position: absolute;
	top: 5px;
	right: 7px;
	font-size: 20px;
	color: black;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		color: red;
	}

	@media ${device.tablet} and (orientation: landscape) {
		font-size: 24px;
	}

	@media ${device.tablet} {
		font-size: 30px;
	}

	@media ${device.laptop} {
		font-size: 36px;
	}
`;
