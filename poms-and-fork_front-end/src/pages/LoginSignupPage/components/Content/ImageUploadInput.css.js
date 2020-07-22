import styled from 'styled-components';

export const ImageUploadContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
  
  export const ImageUploadPreview = styled.div`
	width: 11rem;
	height: 11rem;
	border: 0.5px solid rgb(0, 0, 0);
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
  `;
  