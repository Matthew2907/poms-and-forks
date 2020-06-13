import styled from 'styled-components';

export const ContentCantainer = styled.div`
	width: 100%;
	min-height: 80vh;
	margin-bottom: 10vh;
	margin-top: 10vh;
	background-color: rgb(236,236,236);
`;

export const Slider = styled.div`
	position: relative;
	width: 100%;
	height: 45vh;
	background-image: url(${(props) => props.url});
	background-size: cover;
	background-position: center;
`;

export const RecipeInfoContainer = styled.section`
	display: flex;
	flex-direction: column;
`;

export const RecipeInfoMainInfo = styled.div`
	display: flex;
	box-sizing: border-box;
	flex-wrap: wrap;
	flex-direction: row;
	flex-basis: 15vh;
	width: 100%;
	margin: 0 auto;
	border-bottom: 2px solid rgba(0, 0, 0, 0.4);

	h2 {
		flex-basis: 100%;
		margin-top: 2vh;
		font-size: 20px;
		font-weight: bold;
	}
`;

export const CirclePropertyContainer = styled.div`
	display: flex;
	align-items: center;
	flex-basis: 30%;
	height: 45px;

	:nth-of-type(2){
		flex-basis: 40%;
	}

	img {
		margin-right: 3px;
	}
`;

export const RecipeInfoAuthorInfo = styled.div`
	display: flex;
	flex-basis: 13vh;
	width: 100%;
	margin: 0 auto;
	padding-top: 6px;
`;

export const RecipeInfoAuthorImageContainer = styled.div`
	display: flex;
	width: 20%;
	justify-content: center;
	align-items: flex-start;

	img {
		width: 70%;
		height: auto;
	}
`;

export const RecipeInfoAuthorTextContainer = styled.div`
	max-width: 80%;

	h3 {
		font-size: 14px;
		font-weight: bold;
	}

	p {
		font-weight: normal;
	}
`;

export const RecipeInfoLevelInfo = styled.div`
	display: flex;
	flex-basis: 6vh;
	width: 100%;
	margin: 0 auto;

	h3 {
		display: flex;
		align-items: center;
		flex-basis: 40%;
	}
`;

export const RecipeInfoStarContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-basis: 60%;

	img {
		width: 15%;

		&::after {
			content: "";
			display: block;
			padding-bottom: 100%;
		}
	}
`;

export const RecipeInfoNutritionInfo = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-basis: 15vh;
	width: 100%;
	margin: 0 auto;
`;

export const NutritionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-basis: 22%;
	height: ${0.21 * window.innerWidth}px;
	margin: 10px 3px;
	border: 2px solid black;
	border-radius: 50%;
	text-align: center;

	p:nth-of-type(1){
		font-size: 12px;
		font-weight: bold;
	}

	p:nth-of-type(2){
		margin-top: 2px;
		font-size: 16px;
		font-weight: bold;
	}
`;

export const RecipeInfoRecipeAndReviews = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	min-height: 24vh;
	width: 90%;
	margin: 0 auto;

	h2:nth-of-type(1){
		flex-basis: 50%;
		max-height: 20px;
		text-align: center;
		font-size: 20px;
	}

	h2:nth-of-type(2){
		flex-basis: 50%;
		max-height: 20px;
		text-align: center;
		font-size: 20px;
	}
`;

export const RecipeAndReviewsActiveBar = styled.div`
	flex-basis: 100%;
	border-bottom: 2px solid rgba(0, 0, 0, 0.4);
	
	>div {
		width: 50%;
		height: 10px;
		background-color: #C4C4C4;
	}
`;

export const RecipeInfoIngredientsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;

	h3 {
		display: block;
		margin-top: 10px;
	}
`;

export const IngredientContainer = styled.div`
	position: relative;
	margin-top: 10px;
	padding: 5px;
	background: #FFFFFF;
	border: 0.5px solid #000000;
	border-radius: 5px;

	>p {
		margin-left: 10px;
		font-size: 18px;
		font-weight: bold;
	}
`;

export const RecipeInfoDescription = styled.section`
	min-height: 20vh;
	width: 90%;
	margin: 20px auto 0;
	border-top: 2px solid rgba(0, 0, 0, 0.4);

	h3 {
		margin-top: 7px;
		margin-bottom: 7px;
	}
`;

export const DescriptionContainer = styled.div`
	display: flex;
	margin-bottom: 10px;
	padding: 10px;
	background-color: #fff;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

	> span {
		flex-basis: 10%;
		margin-right: 10px;
		font-size: 12px;
		color: rgba(0, 0, 0, 0.46);
	}
`;