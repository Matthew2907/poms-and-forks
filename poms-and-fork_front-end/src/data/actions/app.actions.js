import {
	NAVIGATION_SHOW,
	NAVIGATION_HIDE,
	SLIDER_SET_IMAGE_INDEX,
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