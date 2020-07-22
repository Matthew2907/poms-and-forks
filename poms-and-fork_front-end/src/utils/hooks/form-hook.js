import {useCallback, useReducer} from 'react';

const formReducer = (state, action) => {
	switch (action.type) {
		case 'INPUT_CHANGE':
			let formIsValid = true;
			for (const inputId in state.inputs) {
				
				if (!state.inputs[inputId]) {
					continue;
				}
				if (inputId === action.inputId) {
					if(action.inputId === 'email' || action.inputId === 'password' || action.inputId === 'name'){
						formIsValid = formIsValid && action.isValid && action.value.length > 6;
					}
					formIsValid = formIsValid && action.isValid;
				} else {
					formIsValid = formIsValid && state.inputs[inputId].isValid;
				}
			}
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.inputId]: {value: action.value, isValid: action.isValid},
				},
				isValid: formIsValid,
			};
		case 'SET_DATA':
			return {
				inputs: action.inputs,
				isValid: action.formIsValid
			}
		default:
			return state;
	}
};

export const useForm = (initialInputs, initialFormValidity) => {
	const [formState, formStateDispatch] = useReducer(formReducer, {
		inputs: initialInputs,
		isValid: initialFormValidity,
	});

	const inputHandler = useCallback((id, value, isValid) => {

		formStateDispatch({type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id});
	}, []);

	const setFormdata = useCallback((inputData, formValidity) => {

		formStateDispatch({
			type: 'SET_DATA',
			inputs: inputData,
			formIsValid: formValidity
		})
	},[]);

	return [formState, inputHandler, setFormdata];
};
