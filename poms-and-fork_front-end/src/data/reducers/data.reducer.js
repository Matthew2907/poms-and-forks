import {
	USERS_GET_REQUEST,
	USERS_GET_SUCCESS,
	USERS_GET_FAILURE,
	RECIPES_GET_REQUEST,
	RECIPES_GET_SUCCESS,
	RECIPES_GET_FAILURE,
	IMAGES_GET_REQUEST,
	IMAGES_GET_SUCCESS,
	IMAGES_GET_FAILURE,
	LOADING_STATES,
} from 'data/constants';

const initialState = {
	users: [],
	recipes: [],
	images: [],
}

function budget(state = initialState, action) {
	const newLoadingState = { ...state.loadingState };		// tworzymy nowy obiekt zawierający dane loadingState, aby pracować na nim i z niego usunąć w momencie wykonania akcji BUDGET_GET_SUCCESS klucz LODING_STATE_LOADING bo dane się załadowały, a z racji że korzystamy z Redux'a to nie możemy MUTOWAĆ STANU tylko zwracać nowy :) nie będzie miał referencji, będzie to nowy obiekt

	switch (action.type) {
		// USERS
		case USERS_GET_REQUEST:
			return {
				...state,
				loadingState: {
					...state.loadingState,
					[action.type]: LOADING_STATES.LOADING,
				}
			}
		case USERS_GET_SUCCESS:
			delete newLoadingState.USERS_GET_REQUEST;
			
			return {
				...state,
				users: action.payload,
				loadingState: newLoadingState,
			}
		case USERS_GET_FAILURE:
			delete newLoadingState.USERS_GET_REQUEST;
			
			return {
				...state,
				users: [],
				loadingState: newLoadingState,
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