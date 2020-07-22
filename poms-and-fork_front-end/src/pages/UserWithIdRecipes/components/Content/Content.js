import React, {useMemo} from 'react';

import {
	RecipeContainer,
	ImageContainer,
	RecipeTitle,
	FavouriteListContainer,
} from 'pages/Homepage/components/Content/RecipeList.css';

function Content({recipes}) {
	const recipesList = useMemo(() => {
		if (recipes.message) {
			return (
				<div>
					<h2>{recipes.message}</h2>
				</div>
			);
		}
		return recipes.map((recipe) => (
			<RecipeContainer key={recipe._id}>
				<ImageContainer
					to={`/recipe/${recipe._id}`}
					url={`http://localhost:5000/files/image/${recipe.recipeImageNames[0]}`}
				/>
				<RecipeTitle>{recipe.recipeTitle}</RecipeTitle>
			</RecipeContainer>
		));
	}, [recipes]);

	return <FavouriteListContainer>{recipesList || ''}</FavouriteListContainer>;
}

export default Content;
