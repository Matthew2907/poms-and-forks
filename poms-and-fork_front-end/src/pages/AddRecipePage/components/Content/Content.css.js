import styled from 'styled-components';

export const ContentCantainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 90vh;
	margin-top: 11vh;
	margin-bottom: 2%;
`;

const RootInput = styled.input`
	width: 100%;
	margin-top: 10px;
	padding: 5px;
	background: rgb(196,196,196);
	border: 0.5px solid #000000;
	border-radius: 5px;
	color: rgb(0, 0, 0);
	opacity: 1; 
	font-weight: bold;
	letter-spacing: 0.5px;

	&::placeholder {
		color: rgb(0, 0, 0);
		opacity: 1; 
		font-weight: bold;
		letter-spacing: 0.5px;
	}	
`;

export const TitleInput = styled(RootInput)``;

export const AddImagesContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
`;

export const BigImageContainer = styled.div`
	position: relative;
	flex-basis: 45%;
	margin: 4% auto 5%;
	border: 0.5px solid #000000;
	border-radius: 7px;
	background-color: #C4C4C4;

	&::after {
		content: "";
		display: block;
		padding-bottom: 70%;
	}	

	input {
		display: none;
	}
`;

export const ShortDescriptionTextArea = styled.textarea`
	padding: 5px;
	border: 0.5px solid #000000;
	border-radius: 5px;
	background: rgb(196,196,196);
	font-weight: bold;
	line-height: 16px;
	font-size: 12px;

	&::placeholder {
		color: rgb(0, 0, 0);
		opacity: 1; 
		font-weight: bold;
		letter-spacing: 0.5px;
		font-weight: bold;
	}
`;

export const RecipeLevelInfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-top: 10px;
	padding: 5px;
	background: rgb(196,196,196);
	border: 0.5px solid #000000;
	border-radius: 5px;

	>p {
		display: flex;
		align-items: center;
		flex-basis: 40%;
		font-size: 18px;
	}
`;

export const StarsLevelContainer = styled.div`
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

export const CategoryAndServingsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin-top: 10px;
`;

const RootSelect = styled.select`
	padding: 5px;
	border: 0.5px solid #000000;
	border-radius: 5px;
	color: rgb(0, 0, 0);
	background: rgb(196,196,196);
	opacity: 1; 
	font-weight: bold;
	letter-spacing: 0.5px;
`;

export const CategorySelectionField = styled(RootSelect)`
	flex-basis: 45%;
	margin-right: 5px;
`;

export const ServingsInputField = styled(RootInput)`
	margin-top: 0;
	width: 45%;
`;

export const TagsInputField = styled(RootInput)``;

export const PreparationTimeInputField = styled(RootInput)``;

export const NutritionFactsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 10px;
	border-top: 2px solid rgba(0, 0, 0, 0.4);

	>p {
		padding: 0;
		margin-top: 10px;
		font-size: 18px;
		flex-basis: 100%;
	}
`;

export const NutritionInputField = styled.input`
	width: 48%;
	margin-top: 10px;
	padding: 5px;
	background: rgb(196,196,196);
	border: 0.5px solid #000000;
	border-radius: 5px;
	font-weight: bold;

	&::placeholder {
		color: rgb(0, 0, 0);
		opacity: 1; 
		font-weight: bold;
		letter-spacing: 0.5px;
	}
`;

export const IngredientsContainer = styled(NutritionFactsContainer)`
	display: block;
`;

export const IngredientAddContainer = styled.div`
	position: relative;
	width: 100%;
`;

export const IngredientAddInputsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	margin-top: 5px;
`;

export const IngredientNameInputField = styled(RootInput)`
	width: 80%;
	margin-top: 0;
	margin-bottom: 10px;
`;

export const IngredientAmountInputField = styled(RootInput)`
	width: 35%;
	margin-top:0;
	margin-right: 10px;
`;

export const IngredientCategorySelectField = styled(RootSelect)`
	flex-basis: 31%;
	margin-right: 5px;

	&::placeholder {
		color: rgb(0, 0, 0);
		opacity: 1; 
		font-weight: bold;
		letter-spacing: 0.5px;
	}
`;

export const SingleIngredientInfoContainer = styled.div`
	position: relative;
	margin-top: 10px;
	padding: 5px;
	background: rgb(196,196,196);
	border: 0.5px solid #000000;
	border-radius: 5px;

	>p {
		font-size: 18px;
		font-weight: bold;
	}
`;

export const DescriptionStepsContainer = styled(NutritionFactsContainer)`
	display: block;
`;

export const DescriptionStepsAddContainer = styled.div`
	position: relative;
`;

export const LongDescriptionTextArea = styled(ShortDescriptionTextArea)`
	margin-top: 10px;
`;

export const SingleDescriptionStepInfoContainer = styled.div`
	display: flex;
	margin-bottom: 10px;
	margin-top: 10px;
	padding: 10px;
	background-color: #fff;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

	>span {
		flex-basis: 5%;
		margin-right: 5px;
		font-size: 12px;
		color: rgba(0, 0, 0, 0.46);
	}

	>p {
		max-width: 80%;
		font-size: 12px;
	}
`;