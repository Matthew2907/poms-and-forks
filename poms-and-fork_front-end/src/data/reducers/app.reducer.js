import {
	NAVIGATION_SHOW,
	NAVIGATION_HIDE,
	SLIDER_SET_IMAGE_INDEX,
	DESCRIPTION_SET_STEP_INDEX,
	SHOPPINGLIST_ADD_INGREDIENTS,
	FAVOURITE_RECIPE_TOGGLE,
} from 'data/constants';

const initialState = {
	isNavigationActive: false,
	currentSliderImageIndex: 0,
	currentDescriptionStepIndex: 0,
	shoppinglistIngredients: [],
	favouriteRecipesList: [],
}

function applicationRecuder(state = initialState, action) {
	switch (action.type) {
		case NAVIGATION_SHOW:
			const navigationIsShowed = true;
			return {
				...state,
				isNavigationActive: navigationIsShowed,
				}
		case NAVIGATION_HIDE:
			const navigationIsHide = false;
			return {
				...state,
				isNavigationActive: navigationIsHide,
				}
		case SLIDER_SET_IMAGE_INDEX:
			return {
				...state,
				currentSliderImageIndex: action.payload,
				}
		case DESCRIPTION_SET_STEP_INDEX:
			return {
				...state,
				currentDescriptionStepIndex: action.payload,
				}
		case SHOPPINGLIST_ADD_INGREDIENTS:
			return {
				...state,
				shoppinglistIngredients: action.payload,
				}
		case FAVOURITE_RECIPE_TOGGLE:
			return {
				...state,
				favouriteRecipesList: action.payload,
				}
		default:
			return state;		
	}
}

export default applicationRecuder;