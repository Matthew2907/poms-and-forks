import styled from 'styled-components';

import { device } from 'utils';

const SearchInput = styled.input`
	position: absolute;
	left: 50%;
	top: 50%;
	width: 60%;
	height: 50%;
	background: rgb(229, 229, 229);
	border: 0.5px solid rgb(0, 0, 0);
	border-radius: 23px;
	text-align: center;
	transform: translate(-50%, -50%);

	&:focus{
		outline: none;
	}

	@media ${device.mobileM} { 
		height: 70%;
		font-size: 20px;
	}  

	@media ${device.tablet} { 
		font-size: 24px;
	}  

	@media ${device.laptop} { 
		font-size: 34px;
		border-radius: 40px;
	}  

	&::placeholder {
		@media ${device.mobileM} { 
			font-size: 20px;
		}  
		
		@media ${device.tablet} { 
			font-size: 24px;
		}  

		@media ${device.laptop} { 
			font-size: 34px;
		}  
	}
`;

export default SearchInput;