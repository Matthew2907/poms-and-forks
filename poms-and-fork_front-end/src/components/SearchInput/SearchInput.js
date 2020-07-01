import styled from 'styled-components';

import {device} from 'utils';

const SearchInput = styled.input`
	width: 60%;
	height: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	border: 0.5px solid rgb(0, 0, 0);
	border-radius: 23px;
	background-color: rgb(229, 229, 229);
	text-align: center;
	transform: translate(-50%, -50%);

	&:focus {
		outline: none;
	}

	@media ${device.mobileM} and (orientation: landscape) {
		height: 65%;
		min-height: 25px;
		max-height: 50px;
		font-size: 20px;
	}

	@media ${device.mobileL} and (orientation: portrait) {
		max-height: 35px;
	}

	@media (min-width: 700px) {
		height: 50%;
		border-radius: 50px;
		font-size: 24px;
	}

	@media ${device.laptop} {
		height: 60%;
		font-size: 28px;
	}

	@media ${device.laptop} and (orientation: portrait) {
		height: 40%;
		min-height: 50px;
		font-size: 28px;
	}

	&::placeholder {
		@media ${device.mobileM} and (orientation: landscape) {
			font-size: 20px;
		}

		@media (min-width: 700px) {
			font-size: 24px;
		}

		@media ${device.laptop} {
			font-size: 28px;
		}
	}
`;

export default SearchInput;
