import React, {useState, useMemo, useEffect, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';

import {Button, LoadingIndicator} from 'components';
import Input from 'pages/LoginSignupPage/components/Content/Input';
import {
	ContentContainer,
	UserImageContainer,
	UserInformationContainer,
	SingleUserInfoContainer,
	FormUserEdit,
} from './Content.css';
import {starsLevelFunc} from 'utils/globalFunctions';
import {useForm} from 'utils/hooks/form-hook';
import whiteStar from 'images/WhiteStar.svg';
import blackStar from 'images/BlackStar.svg';

function Content({user, storedToken, fetchUserUpdate}) {
	const [isEditModeOn, setIsEditModeOn] = useState(false);
	const [isReadyForSubmitButton, setIsReadyForSubmitButton] = useState(false);

	const history = useHistory();

	const [formState, inputHandler] = useForm(
		{
			name: {
				value: '',
				isValid: false,
			},
			password: {
				value: '',
				isValid: false,
			},
			mainSkill: {
				value: '',
				isValid: false,
			},
		},
		false,
	);

	const turnOnEditMode = () => {
		setIsEditModeOn((prevIsEditModeOn) => !prevIsEditModeOn);
	};

	const submitChangesInForm = useCallback((event) => {
		event.preventDefault();
		try {
			fetchUserUpdate(
				user._id,
				{
					name: formState.inputs.name.value,
					password: formState.inputs.password.value,
					mainSkill: formState.inputs.mainSkill.value,
				},
				storedToken,
			);
			toast.success('User updated!');
			history.push('/');
		} catch (err) {
			toast.error('Something went wrong! :(');
		}
	},[fetchUserUpdate, formState.inputs, history, storedToken, user._id])

	useEffect(() => {
		setIsReadyForSubmitButton(!formState.isValid);
	}, [formState.isValid]);

	const starsLevelArr = user && starsLevelFunc(user, whiteStar, blackStar, 'userChefLevel');

	const content = useMemo(() => {
		if (!isEditModeOn) {
			return (
				<UserInformationContainer>
					<SingleUserInfoContainer>
						<p>Name:</p>
						<p>{user.name}</p>
					</SingleUserInfoContainer>
					<SingleUserInfoContainer>
						<p>Email:</p>
						<p>{user.email}</p>
					</SingleUserInfoContainer>
					<SingleUserInfoContainer>
						<p>Chef level:</p>
						{starsLevelArr.map((star, idx) => (
							<img key={idx} src={star} alt="star" />
						))}
					</SingleUserInfoContainer>
					<SingleUserInfoContainer>
						<p>Main skill:</p>
						<p>{user.mainSkill}</p>
					</SingleUserInfoContainer>
					<SingleUserInfoContainer>
						<p>Recipes:</p>
						<p>{user.userRecipes.length}</p>
					</SingleUserInfoContainer>
					<SingleUserInfoContainer>
						<p>Joined:</p>
						<p>{user.date.substring(0, 10)}</p>
					</SingleUserInfoContainer>
				</UserInformationContainer>
			);
		}
		return (
			<FormUserEdit onSubmit={submitChangesInForm}>
				<Input
					id="name"
					onInput={inputHandler}
					placeholder="Name"
					type="text"
					errorMessage="field required"
				/>
				<Input
					element="select"
					id="mainSkill"
					defaultValue="Category"
					onInput={inputHandler}
					placeholder="Main skill"
					type="text"
					errorMessage="field required"
				/>
				<Input
					id="password"
					onInput={inputHandler}
					placeholder="Password"
					type="password"
					errorMessage="min. length 7 characters"
				/>
				<Button variant="editSubmitUser" type="submit" disabled={isReadyForSubmitButton}>
					Submit changes
				</Button>
			</FormUserEdit>
		);
	}, [isEditModeOn, isReadyForSubmitButton, inputHandler, starsLevelArr, submitChangesInForm, user]);

	return (
		<React.Fragment>
			{Object.keys(user).length !== 0 ? (
				<ContentContainer>
					<UserImageContainer
						url={`${process.env.REACT_APP_API_URL}/files/image/${user.image}`}
					/>
					{content}
					<Button variant="editUser" onClick={turnOnEditMode}>
						{!isEditModeOn ? 'Edit profile' : 'Back to profile'}
					</Button>
				</ContentContainer>
			) : (
				<LoadingIndicator />
			)}
		</React.Fragment>
	);
}

export default Content;
