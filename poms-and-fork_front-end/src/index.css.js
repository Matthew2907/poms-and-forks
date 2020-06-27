import { createGlobalStyle } from 'styled-components';
import bgc from 'images/pattern-3371709_1920.jpg';
//można wykorzystać normalizer styled-normalize, ale tutaj korzystam z standardowej normalizacji
import { device } from 'utils';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Montserrat, Arial, sans-serif;
	}
	
	#root {
		overflow:hidden;
	}

	body {
		background-image: url(${bgc});
	}

	ul {
		list-style: none;
	}

	p {
		font-weight: bold;
		font-size: 12px;

		@media ${device.mobileS} { 
			font-size: 14px;
		}
	}
`;