import styled from 'styled-components';

import {
	RecipeInfoIngredientsContainer,
	IngredientContainer,
} from 'pages/SingleRecipePage/components/Content/Content.css';
import {device} from 'utils';

export const ShopinglistIngredientsContainer = styled(RecipeInfoIngredientsContainer)`
	margin-top: 10vh;
	margin-bottom: 2vh;

	@media ${device.mobileM} and (orientation: landscape) {
		margin-top: 14vh;
	}

	@media ${device.tablet} and (orientation: landscape) {
		margin-top: 11vh;
	}

	@media ${device.tablet} and (orientation: portrait) {
		margin-top: 6vh;
	}

	@media (min-height: 500px) and (orientation: landscape) {
		margin-top: 10vh;
	}

	@media ${device.laptop} and (orientation: landscape) {
		margin-top: 10vh;
	}

	@media ${device.laptop} and (orientation: landscape) and (min-height: 250px) and (max-height: 500px) {
		margin-top: 18vh;
	}

	@media ${device.tablet} and (orientation: landscape) and (min-height: 370px) {
		margin-top: 14vh;
	}

	@media ${device.tablet} and (orientation: landscape) and (min-height: 500px) and (max-height: 754px) {
		margin-top: 10vh;
	}

	@media ${device.iphoneX} and (orientation: portrait) {
		margin-top: 9vh;
	}

	@media ${device.iPadPro} and (min-height: 1000px) {
		margin-top: 7vh;
	}

	@media ${device.laptopL} and (orientation: landscape) {
		margin-top: 13h;
	}
`;

export const ShopingIngredientContainer = styled(IngredientContainer)`
	@media ${device.mobileL} {
		padding: 2% 0;
	}

	@media ${device.tablet} and (orientation: landscape) and (min-height: 370px) {
		padding: 3% 0;
	}
`;
