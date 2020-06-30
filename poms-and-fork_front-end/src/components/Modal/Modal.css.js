import styled from "styled-components";

import { device } from 'utils';

export const Wrapper = styled.aside`
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
`;
// ${1.1 * window.innerWidth}px;
export const Content = styled.div`
	position: absolute;
	margin: auto;
	width: 90%;
	height: ${({updateWidth}) => `${1.1 * updateWidth}px`};
	max-height: 85vh;
	box-shadow: ${({ theme }) => `0 5px 10px 2px ${theme.colors.gray.dark}`};
	padding: 5px;
	text-align: center;
	background-color: rgb(255, 255, 255);

	@media ${device.tablet} { 
		height: ${({updateWidth}) => `${0.6 * updateWidth}px`};
		width: 80%;
	}
`;

export const CloseIcon = styled.div`
	position: absolute;
	right: 7px;
	top: 5px;
	cursor: pointer;
	font-size: 20px;

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
