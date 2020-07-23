import React, {useReducer, useEffect} from 'react';

// import {validate} from '../../util/validators';
import {TextInputStyled} from './TextInput.css';
import {
	MainSkillSelectionField,
	Option,
} from 'pages/AddRecipePage/components/AddRecipeForm/AddRecipeForm.css';

const inputReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return {
				...state,
				value: action.val,
				isValid: action.val === '' ? false : true,
			};
		case 'TOUCH':
			return {
				...state,
				isTouched: true,
			};
		default:
			return;
	}
};

const Input = (props) => {
	const [inputState, dispatchInputState] = useReducer(inputReducer, {
		value: props.initialValue || '',
		isValid: props.initialValid || false,
		isTouched: false,
	});

	const {id, onInput} = props;
	const {value, isValid} = inputState;

	useEffect(() => {
		onInput(id, value, isValid);
	}, [id, value, isValid, onInput]);

	const changeHandler = (event) => {
		dispatchInputState({type: 'CHANGE', val: event.target.value, validators: props.validators});
	};

	const touchHandler = () => {
		dispatchInputState({
			type: 'TOUCH',
		});
	};

	const element =
		props.element === 'select' ? (
			<MainSkillSelectionField
				id="mainSkill"
				defaultValue="Main skill"
				onChange={changeHandler}
				placeholder="Main skill"
				type="text"
			>
				<Option value="Main skill" disabled>
					Main skill
				</Option>
				<Option value="Breakfast">Breakfast</Option>
				<Option value="Lunch">Lunch</Option>
				<Option value="Dessert">Dessert</Option>
				<Option value="Dinner">Dinner</Option>
			</MainSkillSelectionField>
		) : (
			<TextInputStyled
				loginMode={props.loginMode}
				id={props.id}
				type={props.type}
				placeholder={
					!isValid && inputState.isTouched
						? `${props.placeholder} - ${props.errorMessage}`
						: props.placeholder
				}
				onChange={changeHandler}
				onBlur={touchHandler}
				value={inputState.value}
				style={{
					backgroundColor: `${
						!inputState.isValid && inputState.isTouched ? '#ff000080' : ''
					}`,
				}}
				autoComplete="off"
			/>
		);

	return <React.Fragment>{element}</React.Fragment>;
};

export default Input;
