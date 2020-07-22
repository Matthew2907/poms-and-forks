import React from 'react';

import {
	RecipeContainer,
	ImageContainer,
	RecipeTitle,
	FavouriteListContainer,
} from 'pages/Homepage/components/Content/RecipeList.css';

function Content({recipes}) {
	const recipesList = recipes.map((recipe) => (
		<RecipeContainer key={recipe._id}>
			<ImageContainer
				to={`/recipe/${recipe._id}`}
				url={`http://localhost:5000/files/image/${recipe.recipeImageNames[0]}`}
			/>
			<RecipeTitle>{recipe.recipeTitle}</RecipeTitle>
		</RecipeContainer>
	));

	return <FavouriteListContainer>{recipesList || ''}</FavouriteListContainer>;
};

export default Content;
