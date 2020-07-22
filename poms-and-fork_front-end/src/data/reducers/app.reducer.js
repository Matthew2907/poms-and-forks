import {
	NAVIGATION_SHOW,
	NAVIGATION_HIDE,
	SLIDER_SET_IMAGE_INDEX,
	DESCRIPTION_SET_STEP_INDEX,
	SET_TOKEN,
} from 'data/constants';

const initialState = {
	isNavigationActive: false,
	currentSliderImageIndex: 0,
	currentDescriptionStepIndex: 0,
	storedToken: null,
};

function applicationRecuder(state = initialState, action) {
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
		case SET_TOKEN:
			return {
				...state,
				storedToken: action.payload,
			};
		default:
			return state;
	}
}

export default applicationRecuder;
