import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 90vh;
	width: 50%;
	margin-top: ${({ theme }) => theme.spacing.sm}vh;
	padding: ${({ theme }) => theme.spacing.xl}px 0;
	background-color: rgba(0,0,0, 0.6);
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
`