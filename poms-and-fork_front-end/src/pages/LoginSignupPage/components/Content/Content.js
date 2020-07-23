import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';

import ImageUploadInput from './ImageUploadInput';
import Input from './Input';
import {useForm} from 'utils/hooks/form-hook';
import {useAuth} from 'utils/hooks/auth.hook';
import {Container, FormContainer, Button} from './Content.css';

function Content({fetchUserById}) {
	const [isLoginMode, setIsLoginMode] = useState(true);
	const [isReadyForSubmitButton, setIsReadyForSubmitButton] = useState(false);

	const history = useHistory();

	const [formState, inputHandler, setFormData] = useForm(
		{
			email: {
				value: '',
				isValid: false,
			},
			password: {
				value: '',
				isValid: false,
			},
		},
		false,
	);

	const {login} = useAuth();

	const switchModeHandler = () => {
		if (!isLoginMode) {
			setFormData(
				{
					...formState.inputs,
					name: undefined,
					mainSkill: undefined,
					image: undefined,
				},
				formState.inputs.email.isValid && formState.inputs.password.isValid,
			);
		} else {
			setFormData(
				{
					...formState.inputs,
					name: {
						value: '',
						isValid: false,
					},
					mainSkill: {
						value: '',
						isValid: false,
					},
					image: {
						value: null,
						isValid: false,
					},
				},
				false,
			);
		}
		setIsLoginMode((prevMode) => !prevMode);
	};

	useEffect(() => {
		setIsReadyForSubmitButton(!formState.isValid);
	}, [formState.isValid]);

	const authSubmitHandler = async (event) => {
		event.preventDefault();
		if (isLoginMode) {
			try {
				const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
					method: 'POST',
					body: JSON.stringify({
						email: formState.inputs.email.value,
						password: formState.inputs.password.value,
					}),
					headers: {'Content-Type': 'application/json'},
				});
				const responseData = await response.json();
				login(responseData.userId, responseData.token);
				fetchUserById(responseData.userId);

				if (responseData.message) {
					toast.error(responseData.message);
					return;
				}
				history.push('/');
				toast.success('You are logged in!');
				return;
			} catch (err) {
				toast.error('Something went wrong! :(');
			}
		} else {
			try {
				const formData = new FormData();
				formData.append('name', formState.inputs.name.value);
				formData.append('email', formState.inputs.email.value);
				formData.append('password', formState.inputs.password.value);
				formData.append('mainSkill', formState.inputs.mainSkill.value);
				formData.append('image', formState.inputs.image.value);
				const response = await fetch(`${process.env.REACT_APP_API_URL}/users/signup`, {
					method: 'POST',
					body: formData,
				});
				const responseData = await response.json();

				if (!response.ok) {
					throw new Error(responseData.message);
				}
				login(responseData.userId, responseData.token);
				fetchUserById(responseData.userId);

				if (responseData.message) {
					toast.error(responseData.message);
					return;
				}
				history.push('/');
				toast.success('User created! You are logged in!');

				return;
			} catch (err) {
				toast.error('Something went wrong! :(');
			}
		}
	};

	return (
		<Container>
			<FormContainer onSubmit={authSubmitHandler}>
				{!isLoginMode && (
					<Input
						onInput={inputHandler}
						id="name"
						placeholder="Name"
						type="text"
						errorMessage="field required"
					/>
				)}
				<Input
					id="email"
					onInput={inputHandler}
					placeholder="Email"
					type="email"
					loginMode={!isLoginMode}
					errorMessage="field required"
				/>
				{!isLoginMode && (
					<ImageUploadInput
						id="image"
						onInput={inputHandler}
						placeholder=""
						type="file"
					/>
				)}
				<Input
					id="password"
					onInput={inputHandler}
					loginMode={!isLoginMode}
					placeholder="Password"
					type="password"
					errorMessage={isLoginMode ? 'field required' : 'min. length 7 characters'}
				/>
				{!isLoginMode && (
					<Input
						element="select"
						id="mainSkill"
						defaultValue="Main skill"
						onInput={inputHandler}
						placeholder="Main skill"
						type="text"
						errorMessage="field required"
					/>
				)}
				<Button type="submit" disabled={isReadyForSubmitButton}>
					{isLoginMode ? 'Login' : 'Signup'}
				</Button>
			</FormContainer>
			<div style={{textAlign: 'center'}}>
				<Button styleType="inverse" onClick={switchModeHandler}>
					{isLoginMode ? 'Switch to Sign Up' : 'Switch to Log In'}
				</Button>
			</div>
		</Container>
	);
}

export default Content;
