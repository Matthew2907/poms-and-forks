import React from 'react';

import {
	RecipeContainer,
	ImageContainer,
	RecipeTitle,
	FavouriteListContainer,
} from 'pages/Homepage/components/Content/RecipeList.css';

function Content({searchedRecipesByTitle, title}) {
	const recipesList = searchedRecipesByTitle.map((recipe) => (
		<RecipeContainer key={recipe._id}>
			<ImageContainer
				to={`/recipe/${recipe._id}`}
				url={`${process.env.REACT_APP_API_URL}/files/image/${recipe.recipeImageNames[0]}`}
			/>
			<RecipeTitle>{recipe.recipeTitle}</RecipeTitle>
		</RecipeContainer>
	));

	const message = (
		<h2>
			We can't find any recipes contain fraze <span style={{color: 'red'}}>{title}</span>
		</h2>
	);

	return (
		<FavouriteListContainer>
			{searchedRecipesByTitle.length === 0 ? message : recipesList}
		</FavouriteListContainer>
	);
}

export default Content;
