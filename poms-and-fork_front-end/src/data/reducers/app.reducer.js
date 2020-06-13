import {
	NAVIGATION_SHOW,
	NAVIGATION_HIDE,
	SLIDER_SET_IMAGE_INDEX,
} from 'data/constants';

const initialState = {
	isNavigationActive: false,
	currentSliderImageIndex: 0,
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
		default:
			return state;		
	}
}

export default applicationRecuder;