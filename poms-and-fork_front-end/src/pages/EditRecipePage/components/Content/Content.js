import React, {useEffect} from 'react';

import {useForm} from 'utils/hooks/form-hook';
import {Container, FormContainer} from '../../../LoginSignupPage/components/Content/Content.css';
import Input from '../../../LoginSignupPage/components/Content/Input';

function Content({setUpdatedRecipe, setIsReadyForSubmitButton}) {
	const [formState, inputHandler, setFormData] = useForm(
		{
			recipeTitle: {
				value: '',
				isValid: false,
			},
			recipeDescriptionShort: {
				value: '',
				isValid: false,
			},
			recipeEnergyValue: {
				value: '',
				isValid: false,
			},
			recipeProtein: {
				value: '',
				isValid: false,
			},
			recipeFat: {
				value: '',
				isValid: false,
			},
			recipeCarbohydrate: {
				value: '',
				isValid: false,
			},
		},
		false,
	);

	useEffect(() => {
		setIsReadyForSubmitButton(!formState.isValid);
		setUpdatedRecipe({
			recipeTitle: formState.inputs.recipeTitle.value,
			recipeDescriptionShort: formState.inputs.recipeDescriptionShort.value,
			recipeEnergyValue: formState.inputs.recipeEnergyValue.value,
			recipeProtein: formState.inputs.recipeProtein.value,
			recipeFat: formState.inputs.recipeFat.value,
			recipeCarbohydrate: formState.inputs.recipeCarbohydrate.value,
		});
	}, [formState.isValid, formState.inputs]);

	return (
		<Container>
			<FormContainer>
				<Input id="recipeTitle" onInput={inputHandler} placeholder="Title" type="text" />
				<Input
					id="recipeDescriptionShort"
					onInput={inputHandler}
					placeholder="Short description"
					type="text"
					errorMessage="min. length 10 characters"
				/>
				<Input
					id="recipeEnergyValue"
					onInput={inputHandler}
					placeholder="Energy value"
					type="number"
					errorMessage="field required"
				/>
				<Input
					id="recipeProtein"
					onInput={inputHandler}
					placeholder="Protein"
					type="number"
					errorMessage="field required"
				/>
				<Input
					id="recipeFat"
					onInput={inputHandler}
					placeholder="Fat"
					type="number"
					errorMessage="field required"
				/>
				<Input
					id="recipeCarbohydrate"
					onInput={inputHandler}
					placeholder="Carbohydrate"
					type="number"
					errorMessage="field required"
				/>
			</FormContainer>
		</Container>
	);
}

export default Content;
