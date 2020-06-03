import { createGlobalStyle } from 'styled-components';

//można wykorzystać normalizer styled-normalize, ale tutaj korzystam z standardowej normalizacji

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Arial, Helvetica, sans-serif;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		li + li {
			margin-left: ${({theme}) => theme.spacing.xs}px;
		}
	}
`;
