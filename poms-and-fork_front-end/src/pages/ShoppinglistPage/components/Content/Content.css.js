import styled from 'styled-components';

import { RecipeInfoIngredientsContainer ,IngredientContainer } from 'pages/SingleRecipePage/components/Content/Content.css';
import { device } from 'utils';


export const ShopinglistIngredientsContainer = styled(RecipeInfoIngredientsContainer)`
	margin-top: 10vh;
	margin-bottom: 2vh;

	@media ${device.mobileM} { 
		margin-top: 14vh;
	}

	@media ${device.tablet} and (orientation: portrait) { 
		margin-top: 6vh;
	}

	@media ${device.laptop} and (orientation: landscape) { 
		margin-top: 9vh;
	}

	@media ${device.resolutionI} and (orientation: portrait) { 
		margin-top: 7vh;
	}
`;

export const ShopingIngredientContainer = styled(IngredientContainer)``;