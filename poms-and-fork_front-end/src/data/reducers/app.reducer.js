import {
	NAVIGATION_SHOW,
	NAVIGATION_HIDE,
	SLIDER_SET_IMAGE_INDEX,
	DESCRIPTION_SET_STEP_INDEX,
	SHOPPINGLIST_ADD_INGREDIENTS,
	FAVOURITE_RECIPE_TOGGLE,
	FAVOURITE_RECIPE_GET_REQUEST,
	FAVOURITE_RECIPE_GET_SUCCESS,
	FAVOURITE_RECIPE_GET_FAILURE,
	LOADING_STATES,
} from 'data/constants';

const initialState = {
	loadingState: null,
	isNavigationActive: false,
	currentSliderImageIndex: 0,
	currentDescriptionStepIndex: 0,
	shoppinglistIngredients: [],
	favouriteRecipesList: [],
};

function applicationRecuder(state = initialState, action) {
	const arrFav = [...state.favouriteRecipesList];
	const newLoadingState = {...state.loadingState};

	switch (action.type) {
		case NAVIGATION_SHOW:
			const navigationIsShowed = true;
			return {
				...state,
				isNavigationActive: navigationIsShowed,
			};
		case NAVIGATION_HIDE:
			const navigationIsHide = false;
			return {
				...state,
				isNavigationActive: navigationIsHide,
			};
		case SLIDER_SET_IMAGE_INDEX:
			return {
				...state,
				currentSliderImageIndex: action.payload,
			};
		case DESCRIPTION_SET_STEP_INDEX:
			return {
				...state,
				currentDescriptionStepIndex: action.payload,
			};
		case SHOPPINGLIST_ADD_INGREDIENTS:
			return {
				...state,
				shoppinglistIngredients: action.payload,
			};
		case FAVOURITE_RECIPE_TOGGLE:
			return {
				...state,
				favouriteRecipesList: action.payload,
			};
		case FAVOURITE_RECIPE_GET_REQUEST:
			return {
				...state,
				loadingState: {
					...state.loadingState,
					[action.type]: LOADING_STATES.LOADING,
				},
			};
		case FAVOURITE_RECIPE_GET_SUCCESS:
			delete newLoadingState.FAVOURITE_RECIPE_GET_REQUEST;
			arrFav.push(action.payload);
			return {
				...state,
				favouriteRecipesList: arrFav,
				loadingState: newLoadingState,
			};
		case FAVOURITE_RECIPE_GET_FAILURE:
			delete newLoadingState.FAVOURITE_RECIPE_GET_REQUEST;
			return {
				...state,
				favouriteRecipesList: [],
				loadingState: newLoadingState,
			};
		default:
			return state;
	}
}

export default applicationRecuder;
