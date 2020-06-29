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

	@media ${device.mobileM} and (orientation: landscape) { 
		height: 70%;
		max-height: 50px;
		font-size: 20px;
	}  

	@media ${device.tablet} { 
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
		font-size: 28px;
	}  

	&::placeholder {
		@media ${device.mobileM} and (orientation: landscape) { 
			font-size: 20px;
		}  
		
		@media ${device.tablet} { 
			font-size: 24px;
		}  

		@media ${device.laptop} { 
			font-size: 28px;
		}  
	}
`;

export default SearchInput;