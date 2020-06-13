import React from 'react';
import { Button } from 'components';
import { ContentCantainer, TitleInput, AddImagesContainer, BigImageContainer, ShortDescriptionTextArea, RecipeLevelInfoContainer, StarsLevelContainer, CategoryAndServingsContainer, CategorySelectionField, ServingsInputField, TagsInputField, PreparationTimeInputField, NutritionFactsContainer, NutritionInputField, IngredientsContainer, IngredientAddContainer, IngredientAddInputsContainer, IngredientNameInputField, IngredientAmountInputField, IngredientCategorySelectField, SingleIngredientInfoContainer, DescriptionStepsContainer, DescriptionStepsAddContainer, LongDescriptionTextArea, SingleDescriptionStepInfoContainer } from './Content.css';
import cameraIcon from 'images/Camera icon.svg';
import addRecipeIcon from 'images/Vector 20.svg'
import deleteIcon from 'images/Delete icon.svg';
import whiteStar from 'images/Polygon 5.svg';
import blackStar from 'images/BlackStar.svg';

function Content(){
	return(
		<ContentCantainer>
			<TitleInput placeholder="Title..."/>
			<AddImagesContainer>
				<BigImageContainer>
					<Button variant={"addImage"} htmlFor="file-input">
						<img src={cameraIcon} alt="add icon"/>
					</Button>
					<input id="file-input" type="file"/>
				</BigImageContainer>
				<BigImageContainer>
					<Button variant={"addImage"} htmlFor="file-input">
						<img src={cameraIcon} alt="add icon"/>
					</Button>
					<input id="file-input" type="file"/>
				</BigImageContainer>
				<BigImageContainer>
					<Button variant={"addImage"} htmlFor="file-input">
						<img src={cameraIcon} alt="add icon"/>
					</Button>
					<input id="file-input" type="file"/>
				</BigImageContainer>
				<BigImageContainer>
					<Button variant={"addImage"} htmlFor="file-input">
						<img src={cameraIcon} alt="add icon"/>
					</Button>
					<input id="file-input" type="file"/>
				</BigImageContainer>
			</AddImagesContainer>
			<ShortDescriptionTextArea cols="30" rows="3" placeholder="Short description..."/>
			<RecipeLevelInfoContainer>
				<p>Chef level</p>
				<StarsLevelContainer>
					<img src={blackStar} alt="star"/>
					<img src={whiteStar} alt="star"/>
					<img src={whiteStar} alt="star"/>
					<img src={whiteStar} alt="star"/>
					<img src={whiteStar} alt="star"/>
				</StarsLevelContainer>
			</RecipeLevelInfoContainer>
			<CategoryAndServingsContainer>
				<CategorySelectionField defaultValue="Category">
					<option value="Category" disabled >Category</option>
					<option value="Lunch">Lunch</option>
					<option value="Breakfast">Breakfast</option>
					<option value="Dessert">Dessert</option>
				</CategorySelectionField>
				<ServingsInputField type="number" placeholder="Servings" min="1" max="12" step="1"/>
			</CategoryAndServingsContainer>
			<TagsInputField type="text" placeholder="Tag(s)"/>
			<PreparationTimeInputField type="number" placeholder="Preparation itme (in minutes)"/>
			<NutritionFactsContainer>
				<p>Nutrition facts</p>
				<NutritionInputField type="number" placeholder="Energy value"/>
				<NutritionInputField type="number" placeholder="Protein"/>
				<NutritionInputField type="number" placeholder="Fat"/>
				<NutritionInputField type="number" placeholder="Carbohydrate"/>
			</NutritionFactsContainer>
			<IngredientsContainer>
				<p>Ingredients</p>
				<IngredientAddContainer>
					<IngredientAddInputsContainer>
						<IngredientNameInputField type="text" placeholder="New ingredient"/>
						<IngredientAmountInputField type="number" placeholder="Amount"/>
						<IngredientCategorySelectField defaultValue="Units">
							<option value="Units" disabled>Units</option>
							<option value="g">g</option>
							<option value="ml">ml</option>
							<option value="spoon(s)">spoon(s)</option>
						</IngredientCategorySelectField>
					</IngredientAddInputsContainer>
					<Button variant="ingredient">
						<img src={addRecipeIcon} alt="add"/>
					</Button>
				</IngredientAddContainer>
				<SingleIngredientInfoContainer>
					<p>250 g flour</p>
					<Button variant="ingredient">
						<img src={deleteIcon} alt="delete"/>
					</Button>
				</SingleIngredientInfoContainer>
				<SingleIngredientInfoContainer>
					<p>250 g flour</p>
					<Button variant="ingredient">
						<img src={deleteIcon} alt="delete"/>
					</Button>
				</SingleIngredientInfoContainer>
				<SingleIngredientInfoContainer>
					<p>250 g flour</p>
					<Button variant="ingredient">
						<img src={deleteIcon} alt="delete"/>
					</Button>
				</SingleIngredientInfoContainer>
				<SingleIngredientInfoContainer>
					<p>250 g flour</p>
					<Button variant="ingredient">
						<img src={deleteIcon} alt="delete"/>
					</Button>
				</SingleIngredientInfoContainer>
			</IngredientsContainer>
			<DescriptionStepsContainer>
				<p>Description</p>
				<DescriptionStepsAddContainer>
					<LongDescriptionTextArea cols="30" rows="6" placeholder="Next step..."/>
					<Button variant="sliderOrDescAdd">
						<img src={addRecipeIcon} alt="add"/>
					</Button>
				</DescriptionStepsAddContainer>
				<SingleDescriptionStepInfoContainer>
					<span>1</span>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					<Button variant="descDelete">
						<img src={addRecipeIcon} alt="add"/>
					</Button>
				</SingleDescriptionStepInfoContainer>
				<SingleDescriptionStepInfoContainer>
					<span>1</span>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					<Button variant="descDelete">
						<img src={addRecipeIcon} alt="add"/>
					</Button>
				</SingleDescriptionStepInfoContainer>
				<SingleDescriptionStepInfoContainer>
					<span>1</span>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					<Button variant="descDelete">
						<img src={addRecipeIcon} alt="add"/>
					</Button>
				</SingleDescriptionStepInfoContainer>
				<SingleDescriptionStepInfoContainer>
					<span>1</span>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					<Button variant="descDelete">
						<img src={addRecipeIcon} alt="add"/>
					</Button>
				</SingleDescriptionStepInfoContainer>
				<SingleDescriptionStepInfoContainer>
					<span>1</span>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					<Button variant="descDelete">
						<img src={addRecipeIcon} alt="add"/>
					</Button>
				</SingleDescriptionStepInfoContainer>
			</DescriptionStepsContainer>
		</ContentCantainer>
	);
};

export default Content;

