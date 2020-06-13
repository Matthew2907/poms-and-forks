import { createGlobalStyle } from 'styled-components';

//można wykorzystać normalizer styled-normalize, ale tutaj korzystam z standardowej normalizacji

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Montserrat, Arial, sans-serif;
	}
	
	body {
		background-color: ${({theme}) => theme.colors.gray.light}
	}

	ul {
		list-style: none;
	}

	p {
		font-weight: bold;
		font-size: 12px;
	}
`;