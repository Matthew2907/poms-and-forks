import React from 'react';

import {
	ContentCantainer,
	MainRecipeContainer,
	MainImageContainer,
	MainRecipeTitle,
} from './MainRecipe.css';
import {RecipeListContainer, RecipeContainer, ImageContainer, RecipeTitle} from './RecipeList.css';

function Content({recipes}) {
	const newRecipesArr = [...recipes];
	const index = Math.floor(Math.random() * recipes.length);
	const deletedRecipe = newRecipesArr.splice(index, 1);
	const mainRecipe = deletedRecipe[0];

	const recipesList = newRecipesArr.map((recipe) => (
		<RecipeContainer key={recipe._id}>
			<ImageContainer
				to={`/recipe/${recipe._id}`}
				url={`http://localhost:5000/files/image/${recipe.recipeImageNames[0]}`}
			/>
			<RecipeTitle>{recipe.recipeTitle}</RecipeTitle>
		</RecipeContainer>
	));
	return (
		<ContentCantainer>
			{mainRecipe && (
				<MainRecipeContainer key={mainRecipe._id}>
					<MainImageContainer
						to={`/recipe/${mainRecipe._id}`}
						url={`http://localhost:5000/files/image/${mainRecipe.recipeImageNames[0]}`}
					/>
					<MainRecipeTitle>{mainRecipe.recipeTitle}</MainRecipeTitle>
				</MainRecipeContainer>
			)}
			<RecipeListContainer>{recipesList}</RecipeListContainer>
		</ContentCantainer>
	);
}

export default Content;
