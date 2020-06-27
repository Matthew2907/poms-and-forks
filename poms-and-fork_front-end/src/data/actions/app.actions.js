import {
	NAVIGATION_SHOW,
	NAVIGATION_HIDE,
	SLIDER_SET_IMAGE_INDEX,
	DESCRIPTION_SET_STEP_INDEX,
	SHOPPINGLIST_ADD_INGREDIENTS,
	FAVOURITE_RECIPE_TOGGLE,
} from 'data/constants';

export const showNavigation = () => {
	return {
	  type: NAVIGATION_SHOW,
	};
  };

export const hideNavigation = () => {
	return {
	  type: NAVIGATION_HIDE,
	};
  };

export const setSliderImageIndex = (index) => {
	return {
	  type: SLIDER_SET_IMAGE_INDEX,
	  payload: index,
	};
  };

export const setDescriptionStepIndex = (index) => {
	return {
	  type: DESCRIPTION_SET_STEP_INDEX,
	  payload: index,
	};
  };

export const setShoppinglistAddIngredients = (data) => {
	return {
	  type: SHOPPINGLIST_ADD_INGREDIENTS,
	  payload: data,
	};
  };

export const setFavouriteRecipeToList = (data) => {
	return {
	  type: FAVOURITE_RECIPE_TOGGLE,
	  payload: data,
	};
  };