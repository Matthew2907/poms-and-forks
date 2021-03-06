import React, {useState, useEffect, useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify';

import {Button} from 'components';
import {
	AddRecipeFormContainer,
	TitleInput,
	AddImagesContainer,
	BigImageContainer,
	ShortDescriptionTextArea,
	RecipeLevelInfoContainer,
	StarsLevelContainer,
	CategoryAndServingsContainer,
	CategorySelectionField,
	ServingsInputField,
	TagsInputField,
	PreparationTimeInputField,
	NutritionFactsContainer,
	NutritionInputField,
	IngredientsContainer,
	IngredientAddContainer,
	IngredientAddInputsContainer,
	IngredientNameInputField,
	IngredientAmountInputField,
	IngredientCategorySelectField,
	SingleIngredientInfoContainer,
	DescriptionStepsContainer,
	DescriptionStepsAddContainer,
	LongDescriptionTextArea,
	SingleDescriptionStepInfoContainer,
	Option,
} from './AddRecipeForm.css';
import {generatorID} from 'utils/globalFunctions';
import addRecipeIcon from 'images/Add icon.svg';
import blackStar from 'images/BlackStar.svg';
import cameraIcon from 'images/Camera icon.svg';
import deleteIcon from 'images/Delete icon.svg';
import whiteStar from 'images/WhiteStar.svg';

function AddRecipeForm({user, setRecipeInfo, saveButtonRef}) {
	const initialRecipe = {
		recipesUser: null,
		recipeTitle: '',
		recipeDescriptionShort: '',
		recipeCategory: '',
		recipeTags: [],
		recipeServings: 0,
		recipePreparationTime: 0,
		recipeChefLevel: 1,
		recipeSocialRank: 0,
		recipeEnergyValue: 0,
		recipeProtein: 0,
		recipeFat: 0,
		recipeCarbohydrate: 0,
		recipeIngredients: [],
		recipeDescriptionInSteps: [],
		recipeImageNames: [],
		date: new Date(),
	};

	const initialStarsArr = [
		{src: whiteStar, name: 'firstStar', alt: 'whiteStar'},
		{src: blackStar, name: 'secondStar', alt: 'blackStar'},
		{src: blackStar, name: 'thirdStar', alt: 'blackStar'},
		{src: blackStar, name: 'fourthStar', alt: 'blackStar'},
		{src: blackStar, name: 'fifthStar', alt: 'blackStar'},
	];

	const [newRecipe, setNewRecipe] = useState(initialRecipe);
	const [longDesc, setLongDesc] = useState('');
	const [newIngredientName, setNewIngredientName] = useState('');
	const [newIngredientAmount, setNewIngredientAmount] = useState('');
	const [newIngredientUnit, setNewIngredientUnit] = useState('Units');
	const [starsLevelArray, setStarsLevelArray] = useState(initialStarsArr);
	const [selectedFile, setSelectedFile] = useState(null);

	const fetchUploadImage = useCallback(async (formData) => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API_URL}/files/upload`, {
				method: 'POST',
				body: formData,
			});

			const newImageNamesArr = [...newRecipe.recipeImageNames];
			const responseData = await response.json();
			newImageNamesArr.push(responseData.file.filename);
			
			setNewRecipe((newRecipe) => ({
				...newRecipe,
				recipeImageNames: newImageNamesArr,
			}));
			toast.success('File has been added successfully!');
		} catch (err) {
			toast.error('Invalid files type or invalid size!');
		}
	},[]);

	useEffect(() => {
		if (selectedFile !== null) {
			const formData = new FormData();
			formData.append('file', selectedFile);
			fetchUploadImage(formData);
		} else {
			return;
		}
	}, [selectedFile, fetchUploadImage]);

	const handleSendImage = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleAddNewRecipe = (event) => {
		event.preventDefault();
		const newDescriptionStepsArr = [...newRecipe.recipeDescriptionInSteps];
		newDescriptionStepsArr.push(longDesc);
		setNewRecipe((newRecipe) => ({
			...newRecipe,
			recipeDescriptionInSteps: newDescriptionStepsArr,
		}));
		setLongDesc('');
	};

	const handleDeleteDescriptionStep = (index, event) => {
		const newDescriptionStepsArr = [...newRecipe.recipeDescriptionInSteps];
		newDescriptionStepsArr.splice(index, 1);
		setNewRecipe((newRecipe) => ({
			...newRecipe,
			recipeDescriptionInSteps: newDescriptionStepsArr,
		}));
	};

	const handleAddNewIngredient = (event) => {
		event.preventDefault();
		const newIngredient = {
			name: newIngredientName,
			amount: newIngredientAmount,
			unit: newIngredientUnit,
			id: generatorID(),
		};
		const newIngredientArr = [...newRecipe.recipeIngredients];
		newIngredientArr.push(newIngredient);
		setNewRecipe((newRecipe) => ({...newRecipe, recipeIngredients: newIngredientArr}));
		setNewIngredientName('');
		setNewIngredientAmount('');
	};

	const handleDeleteIngredient = (index, event) => {
		const newIngredientArr = [...newRecipe.recipeIngredients];
		newIngredientArr.splice(index, 1);
		setNewRecipe((newRecipe) => ({...newRecipe, recipeIngredients: newIngredientArr}));
	};

	const handleSetChefLevel = (event) => {
		switch (event.target.name) {
			case 'firstStar':
				setStarsLevelArray([
					{src: whiteStar, name: 'firstStar', alt: 'whiteStar'},
					{src: blackStar, name: 'secondStar', alt: 'blackStar'},
					{src: blackStar, name: 'thirdStar', alt: 'blackStar'},
					{src: blackStar, name: 'fourthStar', alt: 'blackStar'},
					{src: blackStar, name: 'fifthStar', alt: 'blackStar'},
				]);
				setNewRecipe((newRecipe) => ({...newRecipe, recipeChefLevel: 1}));
				break;
			case 'secondStar':
				setStarsLevelArray([
					{src: whiteStar, name: 'firstStar', alt: 'whiteStar'},
					{src: whiteStar, name: 'secondStar', alt: 'whiteStar'},
					{src: blackStar, name: 'thirdStar', alt: 'blackStar'},
					{src: blackStar, name: 'fourthStar', alt: 'blackStar'},
					{src: blackStar, name: 'fifthStar', alt: 'blackStar'},
				]);
				setNewRecipe((newRecipe) => ({...newRecipe, recipeChefLevel: 2}));
				break;
			case 'thirdStar':
				setStarsLevelArray([
					{src: whiteStar, name: 'firstStar', alt: 'whiteStar'},
					{src: whiteStar, name: 'secondStar', alt: 'whiteStar'},
					{src: whiteStar, name: 'thirdStar', alt: 'whiteStar'},
					{src: blackStar, name: 'fourthStar', alt: 'blackStar'},
					{src: blackStar, name: 'fifthStar', alt: 'blackStar'},
				]);
				setNewRecipe((newRecipe) => ({...newRecipe, recipeChefLevel: 3}));
				break;
			case 'fourthStar':
				setStarsLevelArray([
					{src: whiteStar, name: 'firstStar', alt: 'whiteStar'},
					{src: whiteStar, name: 'secondStar', alt: 'whiteStar'},
					{src: whiteStar, name: 'thirdStar', alt: 'whiteStar'},
					{src: whiteStar, name: 'fourthStar', alt: 'whiteStar'},
					{src: blackStar, name: 'fifthStar', alt: 'blackStar'},
				]);
				setNewRecipe((newRecipe) => ({...newRecipe, recipeChefLevel: 4}));
				break;
			case 'fifthStar':
				setStarsLevelArray([
					{src: whiteStar, name: 'firstStar', alt: 'whiteStar'},
					{src: whiteStar, name: 'secondStar', alt: 'whiteStar'},
					{src: whiteStar, name: 'thirdStar', alt: 'whiteStar'},
					{src: whiteStar, name: 'fourthStar', alt: 'whiteStar'},
					{src: whiteStar, name: 'fifthStar', alt: 'whiteStar'},
				]);
				setNewRecipe((newRecipe) => ({...newRecipe, recipeChefLevel: 5}));
				break;
			default:
				return null;
		}
	};

	useEffect(() => {
		setRecipeInfo(newRecipe);
	}, [newRecipe, setRecipeInfo]);

	const onSubmit = (values) => {
		saveButtonRef.current.removeAttribute('disabled');
		saveButtonRef.current.setAttribute('style', 'background: transparent;');

		const tagsArr = values.recipeTags.split('#');
		tagsArr.splice(0, 1);

		setNewRecipe((newRecipe) => ({
			...newRecipe,
			recipeTitle: values.recipeTitle,
			recipeDescriptionShort: values.recipeDescriptionShort,
			recipeCategory: values.recipeCategory,
			recipeTags: tagsArr,
			recipeServings: values.recipeServings,
			recipePreparationTime: values.recipePreparationTime,
			recipeSocialRank: 1,
			recipeEnergyValue: values.recipeEnergyValue,
			recipeProtein: values.recipeProtein,
			recipeFat: values.recipeFat,
			recipeCarbohydrate: values.recipeCarbohydrate,
			date: new Date(),
			creator: user._id,
		}));
	};

	const [updateWidth, setUpdateWidth] = React.useState(window.innerWidth);

	window.addEventListener('resize', function () {
		setUpdateWidth(window.innerWidth);
	});

	const {handleSubmit, register, errors} = useForm();

	return (
		<AddRecipeFormContainer onSubmit={handleSubmit(onSubmit)}>
			<TitleInput
				style={errors.recipeTitle && {backgroundColor: '#ff000080'}}
				autoComplete="off"
				placeholder={'Title'}
				type="text"
				ref={register({required: true, maxLength: 30})}
				name="recipeTitle"
			/>
			<AddImagesContainer>
				<BigImageContainer url={newRecipe.recipeImageNames[0]}>
					{!newRecipe.recipeImageNames[0] && (
						<React.Fragment>
							<p>File extension: jpeg / png</p>
							<p>File max size: 256 kB</p>
						</React.Fragment>
					)}
					<Button
						updateWidth={updateWidth}
						type="button"
						variant={'addImage'}
						htmlFor="file"
					>
						<img src={cameraIcon} alt="add icon" />
					</Button>
					<input name="file" id="file" type="file" onChange={handleSendImage} />
				</BigImageContainer>

				<BigImageContainer url={newRecipe.recipeImageNames[1]}>
					{!newRecipe.recipeImageNames[1] && (
						<React.Fragment>
							<p>File extension: jpeg / png</p>
							<p>File max size: 256 kB</p>
						</React.Fragment>
					)}
					<Button updateWidth={updateWidth} variant={'addImage'} htmlFor="file">
						<img src={cameraIcon} alt="add icon" />
					</Button>
					<input name="file" id="file" type="file" onChange={handleSendImage} />
				</BigImageContainer>
				<BigImageContainer url={newRecipe.recipeImageNames[2]}>
					{!newRecipe.recipeImageNames[2] && (
						<React.Fragment>
							<p>File extension: jpeg / png</p>
							<p>File max size: 256 kB</p>
						</React.Fragment>
					)}
					<Button updateWidth={updateWidth} variant={'addImage'} htmlFor="file">
						<img src={cameraIcon} alt="add icon" />
					</Button>
					<input name="file" id="file" type="file" onChange={handleSendImage} />
				</BigImageContainer>
				<BigImageContainer url={newRecipe.recipeImageNames[3]}>
					{!newRecipe.recipeImageNames[3] && (
						<React.Fragment>
							<p>File extension: jpeg / png</p>
							<p>File max size: 256 kB</p>
						</React.Fragment>
					)}
					<Button updateWidth={updateWidth} variant={'addImage'} htmlFor="file">
						<img src={cameraIcon} alt="add icon" />
					</Button>
					<input name="file" id="file" type="file" onChange={handleSendImage} />
				</BigImageContainer>
			</AddImagesContainer>
			<ShortDescriptionTextArea
				style={errors.recipeDescriptionShort && {backgroundColor: '#ff000080'}}
				type="text"
				name="recipeDescriptionShort"
				ref={register({required: true, maxLength: {value: 200, message: 'error message'}})}
				cols="30"
				rows="3"
				placeholder={'Short description'}
			/>
			<RecipeLevelInfoContainer>
				<p>Chef level</p>
				<StarsLevelContainer>
					{starsLevelArray.map((star, index) => (
						<img
							key={star.name}
							src={star.src}
							name={star.name}
							onClick={handleSetChefLevel}
							alt={star.alt}
						/>
					))}
				</StarsLevelContainer>
			</RecipeLevelInfoContainer>
			<CategoryAndServingsContainer>
				<CategorySelectionField
					name="recipeCategory"
					ref={register({required: true})}
					defaultValue="Category"
				>
					<Option value="Category" disabled>
						Category
					</Option>
					<Option value="Breakfast">Breakfast</Option>
					<Option value="Lunch">Lunch</Option>
					<Option value="Dessert">Dessert</Option>
					<Option value="Dinner">Dinner</Option>
				</CategorySelectionField>
				<ServingsInputField
					style={errors.recipeServings && {backgroundColor: '#ff000080'}}
					type="number"
					name="recipeServings"
					ref={register({required: true})}
					placeholder={'Servings'}
					min="1"
					max="12"
					step="1"
				/>
			</CategoryAndServingsContainer>
			<TagsInputField
				style={errors.recipeTags && {backgroundColor: '#ff000080'}}
				autoComplete="off"
				type="text"
				name="recipeTags"
				ref={register({required: true, maxLength: 40})}
				placeholder={'#type#here#your#tags#just#like#that'}
			/>
			<PreparationTimeInputField
				style={errors.recipeTitle && {backgroundColor: '#ff000080'}}
				type="number"
				name="recipePreparationTime"
				ref={register({required: true})}
				placeholder={'Preparation itme (in minutes)'}
			/>
			<NutritionFactsContainer>
				<p>Nutrition facts</p>
				<NutritionInputField
					style={errors.recipeEnergyValue && {backgroundColor: '#ff000080'}}
					type="number"
					name="recipeEnergyValue"
					ref={register({required: true})}
					placeholder={'Energy value'}
				/>
				<NutritionInputField
					style={errors.recipeProtein && {backgroundColor: '#ff000080'}}
					type="number"
					name="recipeProtein"
					ref={register({required: true})}
					placeholder={'Protein'}
				/>
				<NutritionInputField
					style={errors.recipeFat && {backgroundColor: '#ff000080'}}
					type="number"
					name="recipeFat"
					ref={register({required: true})}
					placeholder={'Fat'}
				/>
				<NutritionInputField
					style={errors.recipeCarbohydrate && {backgroundColor: '#ff000080'}}
					type="number"
					name="recipeCarbohydrate"
					ref={register({required: true})}
					placeholder={'Carbohydrate'}
				/>
			</NutritionFactsContainer>
			<IngredientsContainer>
				<p>Ingredients</p>
				<IngredientAddContainer>
					<IngredientAddInputsContainer>
						<IngredientNameInputField
							type="text"
							value={newIngredientName}
							onChange={(event) => setNewIngredientName(event.target.value)}
							placeholder="New ingredient"
						/>
						<IngredientAmountInputField
							type="number"
							value={newIngredientAmount}
							onChange={(event) => setNewIngredientAmount(event.target.value)}
							placeholder="Amount"
						/>
						<IngredientCategorySelectField
							onChange={(event) => setNewIngredientUnit(event.target.value)}
							defaultValue={newIngredientUnit}
						>
							<Option value="Units" disabled>
								Units
							</Option>
							<Option value="g">g</Option>
							<Option value="ml">ml</Option>
							<Option value="tablespoon(s)">tablespoon(s)</Option>
							<Option value="teaspoon(s)">teaspoon(s)</Option>
							<Option value="piece(s)">piece(s)</Option>
						</IngredientCategorySelectField>
					</IngredientAddInputsContainer>
					<Button variant="ingredient" onClick={handleAddNewIngredient}>
						<img src={addRecipeIcon} alt="add ingredient" />
					</Button>
				</IngredientAddContainer>
				{newRecipe.recipeIngredients.map((singleIngredient, index) => (
					<SingleIngredientInfoContainer key={index}>
						<p>{`${singleIngredient.name} ${singleIngredient.amount} ${singleIngredient.unit}`}</p>
						<Button
							variant="ingredient"
							onClick={(event) => handleDeleteIngredient(index, event)}
						>
							<img src={deleteIcon} alt="remove ingredient" />
						</Button>
					</SingleIngredientInfoContainer>
				))}
			</IngredientsContainer>
			<DescriptionStepsContainer>
				<p>Description</p>
				<DescriptionStepsAddContainer>
					<LongDescriptionTextArea
						type="text"
						value={longDesc}
						onChange={(event) => setLongDesc(event.target.value)}
						name="recipeDescriptionLong"
						ref={register({maxLength: 200})}
						cols="30"
						rows="6"
						placeholder="Next step"
					/>
					<Button variant="sliderOrDescAdd" onClick={handleAddNewRecipe}>
						<img src={addRecipeIcon} alt="add recipe" />
					</Button>
				</DescriptionStepsAddContainer>
				{newRecipe.recipeDescriptionInSteps.map((singleStep, index) => {
					const id = generatorID();
					return (
						<SingleDescriptionStepInfoContainer key={id}>
							<span>{index + 1}</span>
							<p>{singleStep}</p>
							<Button
								variant="descDelete"
								type="button"
								onClick={(event) => handleDeleteDescriptionStep(index, event)}
							>
								<img src={deleteIcon} alt="remove description step" />
							</Button>
						</SingleDescriptionStepInfoContainer>
					);
				})}
			</DescriptionStepsContainer>
			<Button
				variant="editSubmitUser"
				style={{position: 'static', alignSelf: 'center', transform: 'translateX(0)'}}
				type="submit"
			>
				Confirm
			</Button>
		</AddRecipeFormContainer>
	);
}

export default AddRecipeForm;
