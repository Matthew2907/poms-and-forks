import React, {useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';

import {
	ContentCantainer,
	Slider,
	RecipeInfoContainer,
	RecipeInfoMainInfo,
	CirclePropertyContainer,
	RecipeInfoAuthorInfo,
	RecipeInfoAuthorImageContainer,
	RecipeInfoAuthorTextContainer,
	RecipeInfoLevelInfo,
	RecipeInfoStarContainer,
	RecipeInfoNutritionInfo,
	NutritionContainer,
	RecipeInfoRecipeAndReviews,
	RecipeAndReviewsActiveBar,
	RecipeInfoIngredientsContainer,
	IngredientContainer,
	RecipeInfoDescription,
	DescriptionContainer,
	RecipeAuthorAvatarContainer,
} from './Content.css';
import {Button} from 'components';
import {setSliderImageIndex} from 'data/actions/app.actions';
import {changeButtonState, starsLevelFunc} from 'utils/globalFunctions';
import backIcon from 'images/BackIcon.svg';
import blackStar from 'images/BlackStar.svg';
import categoryIcon from 'images/Category icon.svg';
import deleteIcon from 'images/Delete icon.svg';
import servingsIcon from 'images/Servings icon.svg';
import timeIcon from 'images/Time icon.svg';
import whiteStar from 'images/Polygon 5.svg';

function Content({
	recipe,
	currentSliderImageIndex,
	setSliderImageIndex,
	setIngredientsArrForShoppingList,
}) {
	
	const starsLevelArr = starsLevelFunc(recipe, whiteStar, blackStar, "recipeChefLevel");
	const [newIngredientsArr, setNewIngredientsArr] = useState(recipe.recipeIngredients);

	const handleDeleteIngredientFromRecipeIngredients = (index) => {
		const newIngredientsArrForDelete = [...newIngredientsArr];
		newIngredientsArrForDelete.splice(index, 1);
		setNewIngredientsArr(newIngredientsArrForDelete);
		setIngredientsArrForShoppingList(newIngredientsArrForDelete);
	};

	const ingredientsList = newIngredientsArr.map((ingredient, index) => (
		<IngredientContainer key={ingredient.name}>
			<p>{`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}</p>
			<Button
				variant="ingredient"
				onClick={() => handleDeleteIngredientFromRecipeIngredients(index)}
			>
				<img src={deleteIcon} alt="remove ingredient" />
			</Button>
		</IngredientContainer>
	));

	useEffect(() => {
		setIngredientsArrForShoppingList(recipe.recipeIngredients);
	}, [recipe.recipeIngredients, setIngredientsArrForShoppingList]);

	const newDescriptionArr =
		Object.entries(recipe).length !== 0 ? [...recipe.recipeDescriptionInSteps] : [];

	const descriptionList = newDescriptionArr.map((step, idx) => (
		<DescriptionContainer key={idx}>
			<span>{idx + 1}</span>
			<p>{step}</p>
		</DescriptionContainer>
	));

	const backButtonRef = useRef(null);
	const nextButtonRef = useRef(null);
	let newIndex = currentSliderImageIndex;

	useEffect(() => {
		if (newIndex === recipe.recipeImageNames.length - 1) {
			changeButtonState(backButtonRef, false);
			changeButtonState(nextButtonRef, true);
		} else if (newIndex === 0) {
			changeButtonState(backButtonRef, true);
			changeButtonState(nextButtonRef, false);
		} else {
			changeButtonState(backButtonRef, false);
			changeButtonState(nextButtonRef, false);
		}
	}, [newIndex, recipe.recipeImageNames.length]);

	const changeSliderImage = (operation) => {
		if (currentSliderImageIndex < recipe.recipeImageNames.length - 1 && operation === 'next') {
			newIndex++;
		} else if (currentSliderImageIndex > 0 && operation === 'back') {
			newIndex--;
		}
		return setSliderImageIndex(newIndex);
	};

	const [updateWidth, setUpdateWidth] = useState(window.innerWidth);

	window.addEventListener('resize', function () {
		setUpdateWidth(window.innerWidth);
	});

	return (
		<ContentCantainer>
			{Object.entries(recipe).length !== 0 && (
				<Slider
					url={`http://localhost:5000/files/image/${recipe.recipeImageNames[currentSliderImageIndex]}`}
				>
					<Button
						ref={backButtonRef}
						variant="mainMenu"
						onClick={
							currentSliderImageIndex === 0 ? null : () => changeSliderImage('back')
						}
					>
						<img src={backIcon} alt="previous image" />
					</Button>
					<Button
						ref={nextButtonRef}
						variant="nextSlider"
						onClick={
							currentSliderImageIndex === recipe.recipeImageNames.length - 1
								? null
								: () => changeSliderImage('next')
						}
					>
						<img src={backIcon} alt="next image" />
					</Button>
				</Slider>
			)}
			<RecipeInfoContainer>
				<RecipeInfoMainInfo>
					<h2>{recipe.recipeTitle}</h2>
					<CirclePropertyContainer>
						<img src={timeIcon} alt="meal time preparation" />
						<p>{recipe.recipePreparationTime} min.</p>
					</CirclePropertyContainer>
					<CirclePropertyContainer>
						<img src={categoryIcon} alt="category" />
						<p>{recipe.recipeCategory}</p>
					</CirclePropertyContainer>
					<CirclePropertyContainer>
						<img src={servingsIcon} alt="number of servings" />
						<p>{recipe.recipeServings} servings</p>
					</CirclePropertyContainer>
				</RecipeInfoMainInfo>
				<RecipeInfoAuthorInfo>
					<RecipeInfoAuthorImageContainer>
						<RecipeAuthorAvatarContainer
							url={`http://localhost:5000/files/image/${recipe.recipesUser.userAvatarImage}`}
						/>
					</RecipeInfoAuthorImageContainer>
					<RecipeInfoAuthorTextContainer>
						<h3>
							Kptn {recipe.recipesUser.userName} {recipe.recipesUser.userLastName}
						</h3>
						<p>{recipe.recipeDescriptionShort}</p>
					</RecipeInfoAuthorTextContainer>
				</RecipeInfoAuthorInfo>
				<RecipeInfoLevelInfo>
					<h3>Chef level</h3>
					<RecipeInfoStarContainer>
						{starsLevelArr.map((star, idx) => (
							<img key={idx} src={star} alt="star" />
						))}
					</RecipeInfoStarContainer>
				</RecipeInfoLevelInfo>
				<RecipeInfoNutritionInfo>
					{recipe.recipeEnergyValue && (
						<React.Fragment>
							<NutritionContainer updateWidth={updateWidth}>
								<p>kcal</p>
								<p>{recipe.recipeEnergyValue}</p>
							</NutritionContainer>
							<NutritionContainer updateWidth={updateWidth}>
								<p>Protein</p>
								<p>{`${recipe.recipeProtein}g`}</p>
							</NutritionContainer>
							<NutritionContainer updateWidth={updateWidth}>
								<p>Fat</p>
								<p>{`${recipe.recipeFat}g`}</p>
							</NutritionContainer>
							<NutritionContainer updateWidth={updateWidth}>
								<p>Carbs</p>
								<p>{`${recipe.recipeCarbohydrate}g`}</p>
							</NutritionContainer>
						</React.Fragment>
					)}
				</RecipeInfoNutritionInfo>
				<RecipeInfoRecipeAndReviews>
					<h2>Recipe</h2>
					<h2>Reviews</h2>
					<RecipeAndReviewsActiveBar>
						<div></div>
					</RecipeAndReviewsActiveBar>
					<RecipeInfoIngredientsContainer>
						<h3>Ingredients</h3>
						{ingredientsList || ''}
					</RecipeInfoIngredientsContainer>
				</RecipeInfoRecipeAndReviews>
				<RecipeInfoDescription>
					<h3>Description</h3>
					{descriptionList || ''}
				</RecipeInfoDescription>
			</RecipeInfoContainer>
		</ContentCantainer>
	);
}

const mapStateToProps = (state) => ({
	currentSliderImageIndex: state.applicationRecuder.currentSliderImageIndex,
});

const mapDispatchToProps = (dispatch) => ({
	setSliderImageIndex: (index) => dispatch(setSliderImageIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
