import styled from 'styled-components';

const Rootbar = styled.div`
	position: fixed;
	left: 0;
	width: 100%;
	height: 10vh;
	background-color: rgba(255, 255, 255, 1);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	z-index: 1;

	h1 {
		position: absolute;
		left: 16%;
		top: 50%;
		max-width: 65%;
		font-size: 18px;
		transform: translateY(-50%);
	}
`;

export const Topbar = styled(Rootbar)`
	top: 0;
`;

export const Bottombar = styled(Rootbar)`
	bottom: 0;
`;
