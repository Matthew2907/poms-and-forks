import {
	USER_GET_REQUEST,
	USER_GET_SUCCESS,
	USER_GET_FAILURE,
	USER_UPDATE_FAVOURITE_RECIPES,
	RECIPES_GET_REQUEST,
	RECIPES_GET_SUCCESS,
	RECIPES_GET_FAILURE,
	LOADING_STATES,
} from 'data/constants';

const initialState = {
	user: {},
	recipes: [],
};

function budget(state = initialState, action) {
	const newLoadingState = {...state.loadingState};

	switch (action.type) {
		case USER_GET_REQUEST:
			return {
				...state,
				loadingState: {
					...state.loadingState,
					[action.type]: LOADING_STATES.LOADING,
				},
			};
		case USER_GET_SUCCESS:
			delete newLoadingState.USER_GET_REQUEST;
			return {
				...state,
				user: action.payload,
				loadingState: newLoadingState,
			};
		case USER_GET_FAILURE:
			delete newLoadingState.USER_GET_REQUEST;
			return {
				...state,
				user: {},
				loadingState: newLoadingState,
			};
		case USER_UPDATE_FAVOURITE_RECIPES:
			return {
				...state,
				user: {
					...state.user,
					favouriteRecipes: action.payload,
				},
			};
		case RECIPES_GET_REQUEST:
			return {
				...state,
				loadingState: {
					...state.loadingState,
					[action.type]: LOADING_STATES.LOADING,
				},
			};
		case RECIPES_GET_SUCCESS:
			delete newLoadingState.RECIPES_GET_REQUEST;
			return {
				...state,
				recipes: action.payload,
				loadingState: newLoadingState,
			};
		case RECIPES_GET_FAILURE:
			delete newLoadingState.RECIPES_GET_REQUEST;
			return {
				...state,
				recipes: [],
				loadingState: newLoadingState,
			};
		default:
			return state;
	}
}

export default budget;
