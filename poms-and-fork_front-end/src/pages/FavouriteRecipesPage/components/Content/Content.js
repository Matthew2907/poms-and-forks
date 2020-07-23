import React from 'react';

import {
	RecipeContainer,
	ImageContainer,
	RecipeTitle,
	FavouriteListContainer,
} from 'pages/Homepage/components/Content/RecipeList.css';

function Content({recipes}) {
	
	let recipesList = [];
	if(!recipes.message){
		 recipesList = recipes.map((recipe) => (
			<RecipeContainer key={recipe._id}>
				<ImageContainer
					to={`/recipe/${recipe._id}`}
					url={`${process.env.REACT_APP_API_URL}/files/image/${recipe.recipeImageNames[0]}`}
				/>
				<RecipeTitle>{recipe.recipeTitle}</RecipeTitle>
			</RecipeContainer>
		));
	}

	return <FavouriteListContainer>{recipesList.length > 0 ? recipesList : ''}</FavouriteListContainer>;
}

export default Content;
