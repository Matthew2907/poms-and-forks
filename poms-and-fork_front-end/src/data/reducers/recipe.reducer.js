import {
	RECIPE_GET_REQUEST,
	RECIPE_GET_SUCCESS,
	RECIPE_GET_FAILURE,
	SEARCHED_RECIPE_GET_REQUEST,
	SEARCHED_RECIPE_GET_SUCCESS,
	SEARCHED_RECIPE_GET_FAILURE,
	SEARCHED_RECIPE_RESET,
	LOADING_STATES,
} from 'data/constants';

const initialState = {
	loadingState: null,
	recipe: {},	
	searchedRecipeByTitle: [],
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
		case SEARCHED_RECIPE_GET_REQUEST:
			return {
				...state,
				loadingState: {
					...state.loadingState,
					[action.type]: LOADING_STATES.LOADING,
				}
			}
		case SEARCHED_RECIPE_GET_SUCCESS:
			delete newLoadingState.SEARCHED_RECIPE_GET_REQUEST;
			
			return {
				...state,
				searchedRecipeByTitle: action.payload,
				loadingState: newLoadingState,
			}
		case SEARCHED_RECIPE_GET_FAILURE:
			delete newLoadingState.SEARCHED_RECIPE_GET_REQUEST;
			
			return {
				...state,
				searchedRecipeByTitle: [],
				loadingState: newLoadingState,
			}
		case SEARCHED_RECIPE_RESET:
			return {
				...state,
				searchedRecipeByTitle: [],
			}
		default:
			return state;		
	}
}

export default recipe