import React from 'react';
import { connect } from 'react-redux';
import { ContentCantainer, Slider,RecipeInfoContainer, RecipeInfoMainInfo, CirclePropertyContainer, RecipeInfoAuthorInfo, RecipeInfoAuthorImageContainer, RecipeInfoAuthorTextContainer, RecipeInfoLevelInfo, RecipeInfoStarContainer, RecipeInfoNutritionInfo, NutritionContainer, RecipeInfoRecipeAndReviews, RecipeAndReviewsActiveBar, RecipeInfoIngredientsContainer, IngredientContainer, RecipeInfoDescription, DescriptionContainer  } from './Content.css';
import { Button } from 'components';
import { setSliderImageIndex } from 'data/actions/app.actions'; 
import backIcon from 'images/BackIcon.svg';
import timeIcon from 'images/Time.svg';
import whiteStar from 'images/Polygon 5.svg';
import blackStar from 'images/BlackStar.svg';
import deleteIcon from 'images/Delete icon.svg';

function Content({recipe, setSliderImageIndex, currentSliderImageIndex}) {

	function starsLevelFunc() {
		const starsArr = [];
		let j = 0;
		for(let i = 0; i < 5; i++){
			for(j; j < recipe.recipeChefLevel; j++){
				starsArr.push(blackStar)
				i++;
			}
			starsArr.push(whiteStar)
		}
		return starsArr;
	};

	const starsLevelArr = starsLevelFunc();
	
	const newIngredientsArr = Object.entries(recipe).length !== 0 ? [...recipe.recipeIngredients] : [];

	const ingredientsList = newIngredientsArr.map(ingredient => (
		<IngredientContainer key={ingredient}>
			<p>{ingredient}</p>
			<Button variant="ingredient">
				<img src={deleteIcon} alt="delete"/>
			</Button>
		</IngredientContainer>
	));

	const newDescriptionArr = Object.entries(recipe).length !== 0 ? [...recipe.recipeDescriptionInSteps] : [];

	const descriptionList = newDescriptionArr.map((step, idx) => (
		<DescriptionContainer key={idx}>
			<span>{idx+1}</span>
			<p>{step}</p>
		</DescriptionContainer>
	));

	const changeSliderImage = (operation) => {
		let newIndex = currentSliderImageIndex;
		if(currentSliderImageIndex < (recipe.recipeImageNames.length - 1) && operation === "next"){
			newIndex++;
		} else if (currentSliderImageIndex > 0 && operation === "back"){
			newIndex--;
		}
		return setSliderImageIndex(newIndex);
	};

	return(
		<ContentCantainer>
			{
				Object.entries(recipe).length !== 0 && 
				<Slider url={`http://localhost:5000/image/${recipe.recipeImageNames[currentSliderImageIndex]}`}>
					<Button variant="mainMenu" onClick={() => changeSliderImage("back")}>
						<img src={backIcon} alt=""/>
					</Button>
					<Button variant="nextSlider" onClick={() => changeSliderImage("next")}>
						<img src={backIcon} alt=""/>
					</Button>
				</Slider>
			}
				<RecipeInfoContainer>
					<RecipeInfoMainInfo>
						<h2>{recipe.recipeTitle}</h2>
						<CirclePropertyContainer>
							<img src={timeIcon} alt=""/>
							<p>{recipe.recipePreparationTime} min.</p>
						</CirclePropertyContainer>
						<CirclePropertyContainer>
							<img src={timeIcon} alt=""/>
							<p>{recipe.recipeCategory}</p>
						</CirclePropertyContainer>
						<CirclePropertyContainer>
							<img src={timeIcon} alt=""/>
							<p>{recipe.recipeServings} servings</p>
						</CirclePropertyContainer>
					</RecipeInfoMainInfo>
					<RecipeInfoAuthorInfo>
						<RecipeInfoAuthorImageContainer>
							<img src={timeIcon} alt=""/>
						</RecipeInfoAuthorImageContainer>
						<RecipeInfoAuthorTextContainer>
							<h3>Kptn Mateusz S.</h3>
							<p>{recipe.recipeDescriptionShort}</p>
						</RecipeInfoAuthorTextContainer>
					</RecipeInfoAuthorInfo>
					<RecipeInfoLevelInfo>
						<h3>Chef level</h3>
						<RecipeInfoStarContainer>
							{starsLevelArr.map((star, idx) => <img key={idx} src={star} alt="star"/>)}
						</RecipeInfoStarContainer>
					</RecipeInfoLevelInfo>
					<RecipeInfoNutritionInfo>
					{recipe.recipeEnergyValue &&
					<React.Fragment>
							<NutritionContainer>
								<p>kcal</p>
								<p>{recipe.recipeEnergyValue}</p>
							</NutritionContainer>
							<NutritionContainer>
								<p>Protein</p>
								<p>{`${recipe.recipeProtein}g`}</p>
							</NutritionContainer>
							<NutritionContainer>
								<p>Fat</p>
								<p>{`${recipe.recipeFat}g`}</p>
							</NutritionContainer>
							<NutritionContainer>
								<p>Carbs</p>
								<p>{`${recipe.recipeCarbohydrate}g`}</p>
							</NutritionContainer>
					</React.Fragment>
					}
					</RecipeInfoNutritionInfo>
					<RecipeInfoRecipeAndReviews>
						<h2>Recipe</h2>
						<h2>Reviews</h2>
						<RecipeAndReviewsActiveBar>
							<div></div>
						</RecipeAndReviewsActiveBar>
						<RecipeInfoIngredientsContainer>
							<h3>Ingredients</h3>
							{ingredientsList || ""}
						</RecipeInfoIngredientsContainer>
					</RecipeInfoRecipeAndReviews>
					<RecipeInfoDescription>
						<h3>Description</h3>
						{descriptionList || ""}
					</RecipeInfoDescription>
				</RecipeInfoContainer>
		</ContentCantainer>
	);
};

const mapStateToProps = (state) => ({
	currentSliderImageIndex: state.applicationRecuder.currentSliderImageIndex,
  });

const mapDispatchToProps = dispatch => ({
	setSliderImageIndex: (index) => dispatch(setSliderImageIndex(index)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Content);