import {
	USER_GET_REQUEST,
	USER_GET_SUCCESS,
	USER_GET_FAILURE,
	USER_UPDATE_FAVOURITE_RECIPES,
	RECIPES_GET_REQUEST,
	RECIPES_GET_SUCCESS,
	RECIPES_GET_FAILURE,
	IMAGES_GET_REQUEST,
	IMAGES_GET_SUCCESS,
	IMAGES_GET_FAILURE,
	LOADING_STATES,
} from 'data/constants';

const initialState = {
	user: {},
	recipes: [],
	images: [],
}

function budget(state = initialState, action) {
	const newLoadingState = { ...state.loadingState };		// tworzymy nowy obiekt zawierający dane loadingState, aby pracować na nim i z niego usunąć w momencie wykonania akcji BUDGET_GET_SUCCESS klucz LODING_STATE_LOADING bo dane się załadowały, a z racji że korzystamy z Redux'a to nie możemy MUTOWAĆ STANU tylko zwracać nowy :) nie będzie miał referencji, będzie to nowy obiekt

	switch (action.type) {
		// USER
		case USER_GET_REQUEST:
			return {
				...state,
				loadingState: {
					...state.loadingState,
					[action.type]: LOADING_STATES.LOADING,
				}
			}
		case USER_GET_SUCCESS:
			delete newLoadingState.USER_GET_REQUEST;
			
			return {
				...state,
				user: action.payload,
				loadingState: newLoadingState,
			}
		case USER_GET_FAILURE:
			delete newLoadingState.USER_GET_REQUEST;
			
			return {
				...state,
				user: {},
				loadingState: newLoadingState,
			}
		case USER_UPDATE_FAVOURITE_RECIPES:
			return {
				...state,
				user: {
					...state.user,
					favouriteRecipes: action.payload,
				},
				}
		// RECIPES
		case RECIPES_GET_REQUEST:
			return {
				...state,
				loadingState: {
					...state.loadingState,
					[action.type]: LOADING_STATES.LOADING,
				}
			}
		case RECIPES_GET_SUCCESS:
			delete newLoadingState.RECIPES_GET_REQUEST;
			
			return {
				...state,
				recipes: action.payload,
				loadingState: newLoadingState,
			}
		case RECIPES_GET_FAILURE:
			delete newLoadingState.RECIPES_GET_REQUEST;
			
			return {
				...state,
				recipes: [],
				loadingState: newLoadingState,
			}
		// IMAGES
		case IMAGES_GET_REQUEST:
			return {
				...state,
				loadingState: {
					...state.loadingState,
					[action.type]: LOADING_STATES.LOADING,
				}
			}
		case IMAGES_GET_SUCCESS:
			delete newLoadingState.IMAGES_GET_REQUEST;
			
			return {
				...state,
				images: action.payload,
				loadingState: newLoadingState,
			}
		case IMAGES_GET_FAILURE:
			delete newLoadingState.IMAGES_GET_REQUEST;
			
			return {
				...state,
				images: [],
				loadingState: newLoadingState,
			}
		default:
			return state;			// jeśli nie przyjdzie nam żadna akcja do reducera to nie chcemy nic robić, więc tylko zwracamy state
	}
}

export default budget;