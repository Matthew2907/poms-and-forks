import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Button } from 'components';
import { AddRecipeFormContainer, TitleInput, AddImagesContainer, BigImageContainer, ShortDescriptionTextArea, RecipeLevelInfoContainer, StarsLevelContainer, CategoryAndServingsContainer, CategorySelectionField, ServingsInputField, TagsInputField, PreparationTimeInputField, NutritionFactsContainer, NutritionInputField, IngredientsContainer, IngredientAddContainer, IngredientAddInputsContainer, IngredientNameInputField, IngredientAmountInputField, IngredientCategorySelectField, SingleIngredientInfoContainer, DescriptionStepsContainer, DescriptionStepsAddContainer, LongDescriptionTextArea, SingleDescriptionStepInfoContainer, ConfirmInput, Option } from './AddRecipeForm.css';
import cameraIcon from 'images/Camera icon.svg';
import addRecipeIcon from 'images/Vector 20.svg'
import deleteIcon from 'images/Delete icon.svg';
import whiteStar from 'images/Polygon 5.svg';
import blackStar from 'images/BlackStar.svg';

function AddRecipeForm({ user, setRecipeInfo, saveButtonRef }){
	
	const generatorID = function () {
		return '_' + Math.random().toString(36).substr(2, 9);
	  };

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
		{src: whiteStar, name: "firstStar", alt: "whiteStar"},
		{src: blackStar, name: "secondStar", alt: "blackStar"},
		{src: blackStar, name: "thirdStar", alt: "blackStar"},
		{src: blackStar, name: "fourthStar", alt: "blackStar"},
		{src: blackStar, name: "fifthStar", alt: "blackStar"},
	];

	const [newRecipe, setNewRecipe] = useState(initialRecipe);
	const [longDesc, setLongDesc] = useState("");		// wartość textarea
	const [newIngredientName, setNewIngredientName] = useState("");
	const [newIngredientAmount, setNewIngredientAmount] = useState("");
	const [newIngredientUnit, setNewIngredientUnit] = useState("Units");
	const [starsLevelArray, setStarsLevelArray] = useState(initialStarsArr);
	const [selectedFile, setSelectedFile] = useState(null);

	useEffect(() => {
		if(selectedFile !== null){
			const fd = new FormData();
			fd.append('file', selectedFile);	// IMPORTANT: 'file'  musi być równe upload.single('file'). Bo inaczej Multer nie rozpozna pola i nie umieści pliku!
			axios.post('http://localhost:5000/upload', fd, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			.then(res => {
				// Dodaje nazwę zdjęcia do tablicy zdjęć
				const newImageNamesArr = [...newRecipe.recipeImageNames];
				newImageNamesArr.push(res.data.file.filename);
				setNewRecipe(newRecipe => ({ ...newRecipe, recipeImageNames: newImageNamesArr}));
				toast.success("File has been added successfully!", {
					position: toast.POSITION.TOP_RIGHT
				});
			})
			.catch(() => {
				toast.error("Invalid type (jpeg/png) or file too large (<256kB)!", {
					position: toast.POSITION.TOP_RIGHT
				});
			  });
		}else{
			return;
		}
	},[selectedFile])

	const handleSendImage = (event) => {
		setSelectedFile(event.target.files[0]);	
	};

	const handleAddNewRecipe = (event) => {
		event.preventDefault();
		const newDescriptionStepsArr = [...newRecipe.recipeDescriptionInSteps];
		newDescriptionStepsArr.push(longDesc);
		setNewRecipe(newRecipe => ({ ...newRecipe, recipeDescriptionInSteps: newDescriptionStepsArr}));
		setLongDesc("");
	};

	const handleDeleteDescriptionStep = (index, event) => {
		const newDescriptionStepsArr = [...newRecipe.recipeDescriptionInSteps];
		newDescriptionStepsArr.splice(index, 1);
		setNewRecipe(newRecipe => ({ ...newRecipe, recipeDescriptionInSteps: newDescriptionStepsArr}));
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
		setNewRecipe(newRecipe => ({ ...newRecipe, recipeIngredients: newIngredientArr}));
		setNewIngredientName("");
		setNewIngredientAmount("");
	};

	const handleDeleteIngredient = (index, event) => {
		const newIngredientArr = [...newRecipe.recipeIngredients];
		newIngredientArr.splice(index, 1);
		setNewRecipe(newRecipe => ({ ...newRecipe, recipeIngredients: newIngredientArr}));
	};

	const handleSetChefLevel = (event) => {
		switch (event.target.name) {
			case 'firstStar':
				setStarsLevelArray([
					{src: whiteStar, name: "firstStar", alt: "whiteStar"},
					{src: blackStar, name: "secondStar", alt: "blackStar"},
					{src: blackStar, name: "thirdStar", alt: "blackStar"},
					{src: blackStar, name: "fourthStar", alt: "blackStar"},
					{src: blackStar, name: "fifthStar", alt: "blackStar"},
				]);
				setNewRecipe(newRecipe => ({ ...newRecipe, recipeChefLevel: 1}));
			break;
			case 'secondStar':
				setStarsLevelArray([
					{src: whiteStar, name: "firstStar", alt: "whiteStar"},
					{src: whiteStar, name: "secondStar", alt: "whiteStar"},
					{src: blackStar, name: "thirdStar", alt: "blackStar"},
					{src: blackStar, name: "fourthStar", alt: "blackStar"},
					{src: blackStar, name: "fifthStar", alt: "blackStar"},
				]);
				setNewRecipe(newRecipe => ({ ...newRecipe, recipeChefLevel: 2}));
				break;
			case 'thirdStar':
				setStarsLevelArray([
					{src: whiteStar, name: "firstStar", alt: "whiteStar"},
					{src: whiteStar, name: "secondStar", alt: "whiteStar"},
					{src: whiteStar, name: "thirdStar", alt: "whiteStar"},
					{src: blackStar, name: "fourthStar", alt: "blackStar"},
					{src: blackStar, name: "fifthStar", alt: "blackStar"},
				]);
				setNewRecipe(newRecipe => ({ ...newRecipe, recipeChefLevel: 3}));
				break;
			case 'fourthStar':
				setStarsLevelArray([
					{src: whiteStar, name: "firstStar", alt: "whiteStar"},
					{src: whiteStar, name: "secondStar", alt: "whiteStar"},
					{src: whiteStar, name: "thirdStar", alt: "whiteStar"},
					{src: whiteStar, name: "fourthStar", alt: "whiteStar"},
					{src: blackStar, name: "fifthStar", alt: "blackStar"},
				]);
				setNewRecipe(newRecipe => ({ ...newRecipe, recipeChefLevel: 4}));
				break;
			case 'fifthStar':
				setStarsLevelArray([
					{src: whiteStar, name: "firstStar", alt: "whiteStar"},
					{src: whiteStar, name: "secondStar", alt: "whiteStar"},
					{src: whiteStar, name: "thirdStar", alt: "whiteStar"},
					{src: whiteStar, name: "fourthStar", alt: "whiteStar"},
					{src: whiteStar, name: "fifthStar", alt: "whiteStar"},
				]);
				setNewRecipe(newRecipe => ({ ...newRecipe, recipeChefLevel: 5}));
				break;
			default:
				return null;
		}
	};

	useEffect(() => {
		// Starting after form subit. newRecipe.recipeTitle is included in form sent by useForm hook.
		setRecipeInfo(newRecipe);
	},[newRecipe.recipeTitle])

	const onSubmit = (values) => {
		saveButtonRef.current.setAttribute('disabled', false);
		saveButtonRef.current.setAttribute('style', 'background-color: rgb(196, 196, 196);');
		
		const tagsArr = values.recipeTags.split("#");
		tagsArr.splice(0,1);
		
		// setRecipeInfo(newRecipe => ({
		// 	...newRecipe,
		// 	recipesUser: user,
		// 	recipeTitle: values.recipeTitle,
		// 	recipeDescriptionShort: values.recipeDescriptionShort,
		// 	recipeCategory: values.recipeCategory,
		// 	recipeTags: tagsArr,
		// 	recipeServings: values.recipeServings,
		// 	recipePreparationTime: values.recipePreparationTime,
		// 	recipeSocialRank: 77,
		// 	recipeEnergyValue: values.recipeEnergyValue,
		// 	recipeProtein: values.recipeProtein,
		// 	recipeFat: values.recipeFat,
		// 	recipeCarbohydrate: values.recipeCarbohydrate,
		// 	date: new Date(),
		// }));
		setNewRecipe(newRecipe => ({
			...newRecipe,
			recipesUser: user,
			recipeTitle: values.recipeTitle,
			recipeDescriptionShort: values.recipeDescriptionShort,
			recipeCategory: values.recipeCategory,
			recipeTags: tagsArr,
			recipeServings: values.recipeServings,
			recipePreparationTime: values.recipePreparationTime,
			recipeSocialRank: 77,
			recipeEnergyValue: values.recipeEnergyValue,
			recipeProtein: values.recipeProtein,
			recipeFat: values.recipeFat,
			recipeCarbohydrate: values.recipeCarbohydrate,
			date: new Date(),
		}));
		
	};

	const { handleSubmit, register, errors } = useForm();
	
	return(
			<AddRecipeFormContainer onSubmit={handleSubmit(onSubmit)}>
				<TitleInput style={errors.recipeTitle && {backgroundColor: "red"}} autoComplete="off" placeholder={"Title"} type="text" ref={register({ required: true, maxLength: 30 })} name="recipeTitle"/>
				<AddImagesContainer>
					<BigImageContainer 
						url={newRecipe.recipeImageNames[0]}
					>
						<Button type="button" variant={"addImage"} htmlFor="file">
							<img src={cameraIcon} alt="add icon"/>
						</Button>
						<input name="file" id="file" type="file" onChange={handleSendImage}/>
					</BigImageContainer>
					
					<BigImageContainer 
						url={newRecipe.recipeImageNames[1]}
					>
						<Button variant={"addImage"} htmlFor="file">
							<img src={cameraIcon} alt="add icon"/>
						</Button>
						<input name="file" id="file" type="file" onChange={handleSendImage}/>
					</BigImageContainer>
					<BigImageContainer 
						url={newRecipe.recipeImageNames[2]}
					>
						<Button variant={"addImage"} htmlFor="file">
							<img src={cameraIcon} alt="add icon"/>
						</Button>
						<input name="file" id="file" type="file" onChange={handleSendImage}/>
					</BigImageContainer>
					<BigImageContainer 
						url={newRecipe.recipeImageNames[3]}
					>
						<Button variant={"addImage"} htmlFor="file">
							<img src={cameraIcon} alt="add icon"/>
						</Button>
						<input name="file" id="file" type="file" onChange={handleSendImage}/>
					</BigImageContainer>
				</AddImagesContainer>
				<ShortDescriptionTextArea style={errors.recipeDescriptionShort && {backgroundColor: "red"}} type="text" name="recipeDescriptionShort" ref={register({ required: true, maxLength: { value: 200, message: "error message" } })} cols="30" rows="3" placeholder={"Short description"}/>
				<RecipeLevelInfoContainer>
					<p>Chef level</p>
					<StarsLevelContainer>
						{starsLevelArray.map((star,index) => (
							<img key={star.name} src={star.src} name={star.name} onClick={handleSetChefLevel} alt={star.alt}/>
						))}
					</StarsLevelContainer>
				</RecipeLevelInfoContainer>
				<CategoryAndServingsContainer>
					<CategorySelectionField name="recipeCategory" ref={register({ required: true })} defaultValue="Category">
						<Option value="Category" disabled >Category</Option>
						<Option value="Breakfast">Breakfast</Option>
						<Option value="Lunch">Lunch</Option>
						<Option value="Dessert">Dessert</Option>
						<Option value="Dinner">Dinner</Option>
					</CategorySelectionField>
					<ServingsInputField style={errors.recipeServings && {backgroundColor: "red"}} type="number" name="recipeServings" ref={register({ required: true  })} placeholder={"Servings"} min="1" max="12" step="1"/>
				</CategoryAndServingsContainer>
				<TagsInputField style={errors.recipeTags && {backgroundColor: "red"}} autoComplete="off" type="text" name="recipeTags" ref={register({ required: true, maxLength: 40 })} placeholder={"#type#here#your#tags#just#like#that"}/>
				<PreparationTimeInputField style={errors.recipeTitle && {backgroundColor: "red"}} type="number" name="recipePreparationTime" ref={register({ required: true })} placeholder={"Preparation itme (in minutes)"}/>
				<NutritionFactsContainer>
					<p>Nutrition facts</p>
					<NutritionInputField style={errors.recipeEnergyValue && {backgroundColor: "red"}} type="number" name="recipeEnergyValue" ref={register({ required: true })} placeholder={"Energy value"}/>
					<NutritionInputField style={errors.recipeProtein && {backgroundColor: "red"}} type="number" name="recipeProtein" ref={register({ required: true })} placeholder={"Protein"}/>
					<NutritionInputField style={errors.recipeFat && {backgroundColor: "red"}} type="number" name="recipeFat" ref={register({ required: true })} placeholder={"Fat"}/>
					<NutritionInputField style={errors.recipeCarbohydrate && {backgroundColor: "red"}} type="number" name="recipeCarbohydrate" ref={register({ required: true })} placeholder={"Carbohydrate"}/>
				</NutritionFactsContainer>
				<IngredientsContainer>
					<p>Ingredients</p>
					<IngredientAddContainer>
						<IngredientAddInputsContainer>
							<IngredientNameInputField type="text" value={newIngredientName} onChange={(event) => setNewIngredientName(event.target.value)} placeholder="New ingredient"/>
							<IngredientAmountInputField type="number" value={newIngredientAmount} onChange={(event) => setNewIngredientAmount(event.target.value)} placeholder="Amount"/>
							<IngredientCategorySelectField onChange={(event) => setNewIngredientUnit(event.target.value)} defaultValue={newIngredientUnit}>
								<Option value="Units" disabled>Units</Option>
								<Option value="g">g</Option>
								<Option value="ml">ml</Option>
								<Option value="tablespoon(s)">tablespoon(s)</Option>
								<Option value="teaspoon(s)">teaspoon(s)</Option>
								<Option value="piece(s)">piece(s)</Option>
							</IngredientCategorySelectField>
						</IngredientAddInputsContainer>
						<Button variant="ingredient" onClick={handleAddNewIngredient}>
							<img src={addRecipeIcon} alt="add"/>
						</Button>
					</IngredientAddContainer>
					{newRecipe.recipeIngredients.map((singleIngredient, index) => (
						<SingleIngredientInfoContainer key={index}>
							<p>{`${singleIngredient.name} ${singleIngredient.amount} ${singleIngredient.unit}`}</p>
							<Button variant="ingredient" onClick={(event) => handleDeleteIngredient(index, event)}>
								<img src={deleteIcon}  alt="delete"/>
							</Button>
						</SingleIngredientInfoContainer>
					))}
				</IngredientsContainer>
				<DescriptionStepsContainer>
					<p>Description</p>
					<DescriptionStepsAddContainer>
						<LongDescriptionTextArea type="text" value={longDesc} onChange={(event) => setLongDesc(event.target.value)} name="recipeDescriptionLong" ref={register({ maxLength: 200 })} cols="30" rows="6" placeholder="Next step"/>
						<Button variant="sliderOrDescAdd" onClick={handleAddNewRecipe}>
							<img src={addRecipeIcon} alt="add recipe button"/>
						</Button>
					</DescriptionStepsAddContainer>
					{/* FIXME: zmień key na coś innego niż index! */}
						{newRecipe.recipeDescriptionInSteps.map((singleStep, index) => {
							const id = generatorID();
							return (
								<SingleDescriptionStepInfoContainer key={id}> 
									<span>{index + 1}</span>
									<p>{singleStep}</p>
									<Button variant="descDelete" type="button" onClick={(event) => handleDeleteDescriptionStep(index, event)}>
										<img src={deleteIcon} alt="delete"/>
									</Button>
								</SingleDescriptionStepInfoContainer>
							);
						})}
				</DescriptionStepsContainer>
				<ConfirmInput type="submit" value="Confirm"/>
			</AddRecipeFormContainer>
	);
};

export default AddRecipeForm;