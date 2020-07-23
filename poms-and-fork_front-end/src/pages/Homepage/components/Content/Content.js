import React from 'react';

import {
	RecipeListContainer,
	RecipeContainer,
	ImageContainer,
	RecipeTitle,
	ContentCantainer,
	MainRecipeContainer,
	MainImageContainer,
	MainRecipeTitle,
} from './RecipeList.css';

function Content({recipes}) {
	const newRecipesArr = [...recipes];
	const index = Math.floor(Math.random() * recipes.length);
	const deletedRecipe = newRecipesArr.splice(index, 1);
	const mainRecipe = deletedRecipe[0];

	const recipesList = newRecipesArr.map((recipe) => (
		<RecipeContainer key={recipe._id}>
			<ImageContainer
				to={`/recipe/${recipe._id}`}
				url={
					typeof recipe.recipeImageNames[0] !== 'undefined'
						? `${process.env.REACT_APP_API_URL}/files/image/${recipe.recipeImageNames[0]}`
						: ''
				}
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
						url={
							typeof mainRecipe.recipeImageNames[0] !== 'undefined'
								? `${process.env.REACT_APP_API_URL}/files/image/${mainRecipe.recipeImageNames[0]}`
								: ''
						}
					/>
					<MainRecipeTitle>{mainRecipe.recipeTitle}</MainRecipeTitle>
				</MainRecipeContainer>
			)}
			<RecipeListContainer>{recipesList}</RecipeListContainer>
		</ContentCantainer>
	);
}

export default Content;
