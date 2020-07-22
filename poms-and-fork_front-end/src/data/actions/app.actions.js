import {
	NAVIGATION_SHOW,
	NAVIGATION_HIDE,
	SLIDER_SET_IMAGE_INDEX,
	DESCRIPTION_SET_STEP_INDEX,
	SET_TOKEN,
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

export const setTokenInStore = (token) => {
	return {
		type: SET_TOKEN,
		payload: token,
	};
};
