import {
	USER_GET_REQUEST,
	USER_GET_SUCCESS,
	USER_GET_FAILURE,
	RESET_CURRENT_RECIPE_CREATOR_AND_RECIPE,
	CREATOR_GET_REQUEST,
	CREATOR_GET_SUCCESS,
	CREATOR_GET_FAILURE,
	RECIPES_GET_REQUEST,
	RECIPES_GET_SUCCESS,
	RECIPES_GET_FAILURE,
	RECIPE_GET_REQUEST,
	RECIPE_GET_SUCCESS,
	RECIPE_GET_FAILURE,
	LOADING_STATES,
} from 'data/constants';

const initialState = {
	loadingState: {},
	user: {},
	recipes: [],
	currentRecipe: {},
	currentRecipeCreator: {},
};

function dataDB(state = initialState, action) {
	const newLoadingState = {...state.loadingState};
	switch (action.type) {
		// Logged user GET actions
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
		// Current recipe creatorUser GET actions
		case CREATOR_GET_REQUEST:
			return {
				...state,
				loadingState: {
					...state.loadingState,
					[action.type]: LOADING_STATES.LOADING,
				},
			};
		case CREATOR_GET_SUCCESS:
			delete newLoadingState.CREATOR_GET_REQUEST;
			return {
				...state,
				currentRecipeCreator: action.payload,
				loadingState: newLoadingState,
			};
		case CREATOR_GET_FAILURE:
			delete newLoadingState.CREATOR_GET_REQUEST;
			return {
				...state,
				currentRecipeCreator: {},
				loadingState: newLoadingState,
			};
		// Get all recipes  or userWithIdRecipes or searchedByTitleRecipes from DB
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
		// Get on recipeWithId from DB
		case RECIPE_GET_REQUEST:
			return {
				...state,
				loadingState: {
					...state.loadingState,
					[action.type]: LOADING_STATES.LOADING,
				},
			};
		case RECIPE_GET_SUCCESS:
			delete newLoadingState.RECIPE_GET_REQUEST;
			return {
				...state,
				currentRecipe: action.payload,
				loadingState: newLoadingState,
			};
		case RECIPE_GET_FAILURE:
			delete newLoadingState.RECIPE_GET_REQUEST;
			return {
				...state,
				currentRecipe: {},
				loadingState: newLoadingState,
			};
		case RESET_CURRENT_RECIPE_CREATOR_AND_RECIPE:
			delete newLoadingState.RECIPE_GET_REQUEST;
			return {
				...state,
				currentRecipe: {},
				currentRecipeCreator: {},
			};
		default:
			return state;
	}
}

export default dataDB;

