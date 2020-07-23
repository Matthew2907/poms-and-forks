import styled from 'styled-components';

import {device} from 'utils';

export const Container = styled.div`
	width: 100%;
	min-height: 90vh;
	margin-top: 10vh;

	@media ${device.mobileM} and (orientation: landscape) {
		margin-top: 14vh;
		margin-bottom: 2vh;
	}
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Button = styled.button`
	position: relative;
	width: auto;
	min-height: 30px;
	margin-top: 10px;
	padding: 0 10px;
	font-weight: bold;
	font-size: 14px;
	background-color: white;
	background: ${(props) => (props.styleType === 'inverse' ? 'rgb(255, 255, 255)' : 'none')};
	box-sizing: border-box;
	border-radius: 5px;
	font-family: Cabin, Arial, sans-serif;
	font-style: normal;
	font-weight: ${(props) => (props.styleType === 'inverse' ? '300' : 'bold')};
	line-height: 14px;
	text-align: center;
	color: rgb(0, 0, 0);
	cursor: pointer;
	overflow: hidden;

	&::before {
		background: ${({theme}) => theme.colors.blueGreen};
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 180%;
		z-index: -1;
		transition: 0.8s;
		border-radius: 0 0 50% 50%;
		content: '';
	}

	&:disabled {
		background: ${({theme}) => theme.colors.disabledLight};
	}

	&:hover:disabled {
		cursor: not-allowed;
	}

	&:active:disabled,
	&:disabled::before {
		background: ${({theme}) => theme.colors.disabledDark};
		cursor: not-allowed;
	}

	&:focus {
		outline: none;
		box-shadow: none;
	}

	@media ${device.laptop} and (orientation: landscape) {
		height: 4vh;
		min-width: 6rem;

		&:hover::before {
			height: 0;
		}
	}
`;
