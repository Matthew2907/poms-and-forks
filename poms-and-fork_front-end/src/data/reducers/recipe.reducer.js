import {
	RECIPE_GET_REQUEST,
	RECIPE_GET_SUCCESS,
	RECIPE_GET_FAILURE,
	LOADING_STATES,
} from 'data/constants';

const initialState = {
	loadingState: null,
	recipe: {},	
}

function recipe(state = initialState, action) {
	const newLoadingState = { ...state.loadingState };

	switch (action.type) {
		case RECIPE_GET_REQUEST:
			return {
				...state,
				loadingState: {
					...state.loadingState,
					[action.type]: LOADING_STATES.LOADING,
				}
			}
		case RECIPE_GET_SUCCESS:
			delete newLoadingState.RECIPE_GET_REQUEST;
			
			return {
				...state,
				recipe: action.payload,
				loadingState: newLoadingState,
			}
		case RECIPE_GET_FAILURE:
			delete newLoadingState.RECIPE_GET_REQUEST;
			
			return {
				...state,
				recipe: {},
				loadingState: newLoadingState,
			}
		default:
			return state;		
	}
}

export default recipe