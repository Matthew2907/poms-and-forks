import styled from 'styled-components';

import {device} from 'utils';

export const ContentCantainer = styled.div`
	width: 100%;
	min-height: 80vh;
	margin-bottom: 10vh;
	margin-top: 10vh;

	@media ${device.mobileM} and (orientation: landscape) {
		margin-top: 14vh;
		margin-bottom: 14vh;
	}

	@media ${device.mobileM} and (min-height: 500px) {
		margin-top: 10vh;
		margin-bottom: 10vh;
	}

	@media ${device.iphoneX} and (orientation: portrait) {
		margin-top: 9vh;
		margin-bottom: 9vh;
	}

	@media ${device.laptop} and (orientation: landscape) {
		margin-top: 9vh;
		margin-bottom: 9vh;
	}

	@media ${device.laptop} and (orientation: landscape) {
		margin-top: 9vh;
		margin-bottom: 9vh;
	}

	@media ${device.iPadPro} and (min-height: 1000px) {
		margin-top: 7vh;
		margin-bottom: 7vh;
	}
`;

export const Slider = styled.div`
	width: 107.5%;
	height: 45vh;
	position: relative;
	background-image: url(${(props) => props.url});
	background-size: cover;
	background-position: center;
	transform: translateX(-3.5%);

	@media ${device.mobileM} and (orientation: landscape) {
		height: 50vh;
	}

	@media ${device.mobileL} and (orientation: landscape) {
		height: 53vh;
	}

	@media ${device.laptop} and (orientation: landscape) {
		width: 109.5%;
		transform: translateX(-4.5%);
		height: 52vh;
	}

	@media ${device.laptop} and (orientation: portrait) {
		width: 109.5%;
		transform: translateX(-4.5%);
	}
`;

export const RecipeInfoContainer = styled.section`
	display: flex;
	flex-direction: column;
`;

export const RecipeInfoMainInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	flex-basis: 15vh;
	box-sizing: border-box;
	width: 100%;
	margin: 0 auto;
	border-bottom: 2px solid rgba(0, 0, 0, 0.4);

	@media ${device.iphoneX} and (orientation: portrait) {
		flex-basis: 14vh;
	}

	@media ${device.tablet} and (orientation: portrait) {
		flex-basis: 13vh;
	}

	h2 {
		flex-basis: 100%;
		margin-top: 2vh;
		font-size: 22px;
		font-weight: bold;

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 28px;
		}

		@media ${device.laptop} {
			margin-bottom: 1vh;
			font-size: 36px;
		}
	}
`;

export const CirclePropertyContainer = styled.div`
	display: flex;
	align-items: center;
	flex-basis: 30%;
	height: 45px;

	:nth-of-type(2) {
		flex-basis: 35%;
	}

	:nth-of-type(3) {
		flex-basis: 35%;
	}

	@media ${device.laptop} {
		margin-bottom: 10px;
	}

	img {
		margin-right: 3px;

		@media ${device.tablet} and (orientation: portrait) {
			height: 40px;
			margin-right: 10px;
		}

		@media ${device.laptop} {
			height: 50px;
			margin-right: 15px;
		}
	}

	p {
		@media ${device.mobileS} {
			font-size: 14px;
		}

		@media ${device.tablet} {
			font-size: 16px;
		}

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 20px;
		}

		@media ${device.laptop} {
			font-size: 24px;
		}
	}
`;

export const RecipeInfoAuthorInfo = styled.div`
	display: flex;
	flex-basis: 13vh;
	width: 100%;
	margin: 0 auto;
	padding-top: 6px;

	@media ${device.tablet} and (orientation: portrait) {
		font-size: 10px;
	}

	@media ${device.laptop} and (orientation: portrait) {
		flex-basis: 8vh;
	}
`;

export const RecipeInfoAuthorImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 15%;

	img {
		width: 70%;
		height: auto;
		margin: 0 auto 0 0;

		@media ${device.laptop} {
			width: 70%;
		}
	}
`;

export const RecipeInfoAuthorTextContainer = styled.div`
	max-width: 80%;

	h3 {
		font-size: 14px;
		font-weight: bold;

		@media ${device.tablet} and (orientation: landscape) {
			font-size: 20px;
		}

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 24px;
		}

		@media ${device.laptop} {
			font-size: 28px;
		}
	}

	p {
		margin-top: 1%;

		@media ${device.tablet} and (orientation: landscape) {
			font-size: 16px;
		}

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 20px;
		}

		@media ${device.laptop} {
			font-size: 24px;
		}
	}
`;

export const RecipeInfoLevelInfo = styled.div`
	display: flex;
	flex-basis: 6vh;
	width: 100%;
	margin: 0 auto;

	@media ${device.iphoneX} and (orientation: portrait) {
		flex-basis: 4vh;
	}

	@media ${device.tablet} and (orientation: portrait) {
		flex-basis: 10vh;
	}

	@media ${device.laptop} and (orientation: portrait) {
		flex-basis: 8vh;
	}

	h3 {
		display: flex;
		align-items: center;
		flex-basis: 40%;

		@media ${device.mobileM} {
			flex-basis: 20%;
		}

		@media ${device.tablet} and (orientation: landscape) {
			font-size: 20px;
		}

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 22px;
		}

		@media ${device.laptop} {
			font-size: 28px;
		}
	}
`;

export const RecipeInfoStarContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-basis: 60%;

	img {
		width: 15%;

		@media ${device.mobileM} and (orientation: landscape) {
			width: 12%;
		}

		@media ${device.tablet} and (orientation: landscape) {
			width: 10%;
		}

		@media ${device.tablet} and (orientation: portrait) {
			width: 12%;
		}

		&::after {
			display: block;
			padding-bottom: 100%;
			content: '';
		}
	}
`;

export const RecipeInfoNutritionInfo = styled.div`
	display: flex;
	flex-basis: 15vh;
	justify-content: space-evenly;
	width: 100%;
	margin: 0 auto;

	@media ${device.iphoneX} and (orientation: portrait) {
		flex-basis: 13vh;
	}

	@media ${device.laptop} and (orientation: portrait) {
		flex-basis: 12vh;
	}
`;

export const NutritionContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 22%;
	justify-content: center;
	height: ${({updateWidth}) => `${0.21 * updateWidth}px`};
	margin: 10px 3px;
	border: 2px solid black;
	border-radius: 50%;
	text-align: center;

	@media ${device.mobileS} {
		flex-basis: 19.5%;
		height: ${({updateWidth}) => `${0.19 * updateWidth}px`};
	}

	@media ${device.mobileM} and (orientation: landscape) {
		flex-basis: 14.5%;
		height: ${({updateWidth}) => `${0.14 * updateWidth}px`};
	}

	@media ${device.mobileL} and (orientation: landscape) {
		flex-basis: 12.5%;
		height: ${({updateWidth}) => `${0.12 * updateWidth}px`};
	}

	@media ${device.tablet} and (orientation: landscape) {
		flex-basis: 10.5%;
		height: ${({updateWidth}) => `${0.1 * updateWidth}px`};
	}

	@media ${device.tablet} and (orientation: portrait) {
		flex-basis: 13.5%;
		height: ${({updateWidth}) => `${0.13 * updateWidth}px`};
	}

	@media ${device.laptop} {
		flex-basis: 12.5%;
		height: ${({updateWidth}) => `${0.1 * updateWidth}px`};
	}

	@media ${device.laptop} and (orientation: portrait) {
		flex-basis: 12.5%;
		height: ${({updateWidth}) => `${0.11 * updateWidth}px`};
	}

	@media ${device.laptopL} {
		flex-basis: 12.5%;
		height: ${({updateWidth}) => `${0.07 * updateWidth}px`};
	}

	p:nth-of-type(1) {
		font-size: 12px;
		font-weight: bold;

		@media ${device.mobileL} {
			font-size: 14px;
		}

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 20px;
		}

		@media ${device.laptop} {
			font-size: 24px;
		}
	}

	p:nth-of-type(2) {
		margin-top: 2px;
		font-size: 16px;
		font-weight: bold;

		@media ${device.mobileL} {
			font-size: 14px;
		}

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 20px;
		}

		@media ${device.laptop} {
			font-size: 24px;
		}
	}
`;

export const RecipeInfoRecipeAndReviews = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	width: 100%;
	min-height: 24vh;
	margin: 0 auto;

	h2:nth-of-type(1) {
		flex-basis: 50%;
		max-height: 20px;
		text-align: center;
		font-size: 20px;

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 24px;
		}

		@media ${device.laptop} {
			font-size: 28px;
		}
	}

	h2:nth-of-type(2) {
		flex-basis: 50%;
		max-height: 20px;
		text-align: center;
		font-size: 20px;

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 24px;
		}

		@media ${device.laptop} {
			font-size: 28px;
		}
	}
`;

export const RecipeAndReviewsActiveBar = styled.div`
	flex-basis: 100%;
	margin-top: 5px;
	border-bottom: 2px solid rgba(0, 0, 0, 0.4);

	@media ${device.tablet} and (orientation: portrait) {
		margin-top: 10px;
	}

	@media ${device.laptop} {
		margin-top: 15px;
	}

	> div {
		width: 50%;
		height: 10px;
		background-color: #c4c4c4;
	}
`;

export const RecipeInfoIngredientsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;

	h3 {
		display: block;
		margin-top: 10px;

		@media ${device.tablet} and (orientation: landscape) {
			font-size: 20px;
		}

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 24px;
		}

		@media ${device.laptop} {
			font-size: 28px;
		}
	}
`;

export const IngredientContainer = styled.div`
	position: relative;
	margin-top: 10px;
	padding: 8px 0;
	background-color: rgba(255, 255, 255, 0.6);
	border: 0.5px solid #000000;
	border-radius: 5px;

	@media ${device.mobileS} {
		padding: 10px 0;
	}

	@media ${device.mobileL} {
		padding: 3% 0;
	}

	@media ${device.tablet} and (orientation: landscape) {
		padding: 15px 0;
	}

	@media ${device.tablet} and (orientation: portrait) {
		padding: 15px 0;
		border-radius: 6px;
	}

	@media ${device.laptop} {
		padding: 20px 0;
	}

	> p {
		width: 80%;
		margin-left: 10px;
		font-size: 14px;
		font-weight: bold;

		@media ${device.tablet} and (orientation: landscape) {
			font-size: 16px;
		}

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 20px;
		}

		@media ${device.laptop} {
			margin-left: 2%;
			font-size: 24px;
		}
	}
`;

export const RecipeInfoDescription = styled.section`
	width: 100%;
	min-height: 20vh;
	margin: 20px auto 0;
	border-top: 2px solid rgba(0, 0, 0, 0.4);

	h3 {
		margin-top: 7px;
		margin-bottom: 7px;

		@media ${device.tablet} and (orientation: landscape) {
			font-size: 20px;
		}

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 24px;
		}

		@media ${device.laptop} {
			font-size: 28px;
		}
	}
`;

export const DescriptionContainer = styled.div`
	display: flex;
	margin-bottom: 10px;
	padding: 10px;
	background-color: rgba(255, 255, 255, 0.6);
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

	> span {
		flex-basis: 5%;
		font-size: 12px;
		color: rgba(0, 0, 0, 0.46);

		@media ${device.mobileL} {
			font-size: 14px;
		}

		@media ${device.tablet} and (orientation: landscape) {
			font-size: 16px;
		}

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 20px;
		}

		@media ${device.laptop} {
			font-size: 24px;
		}
	}

	> p {
		flex-basis: 95%;

		@media ${device.tablet} and (orientation: landscape) {
			font-size: 16px;
		}

		@media ${device.tablet} and (orientation: portrait) {
			font-size: 20px;
		}

		@media ${device.laptop} {
			font-size: 24px;
		}
	}
`;

export const RecipeAuthorAvatarContainer = styled.div`
	width: 80%;
	border-radius: 50%;
	background-image: url(${(props) => props.url});
	background-size: cover;
	background-position: center;

	&::after {
		display: block;
		padding-bottom: 100%;
		transform-origin: center;
		content: '';
	}
`;
