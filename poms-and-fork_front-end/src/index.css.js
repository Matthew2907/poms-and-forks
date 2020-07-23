import {createGlobalStyle} from 'styled-components';

import backgroundImage from 'images/pattern-3371709_1920.jpg';
import {device} from 'utils';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Cabin, Arial, sans-serif;
	}
	
	#root {
		overflow:hidden;
	}

	body {
		background-image: url(${backgroundImage});
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
