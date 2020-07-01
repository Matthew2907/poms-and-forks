import React from 'react';
import {connect} from 'react-redux';

import {
	RecipeContainer,
	ImageContainer,
	RecipeTitle,
	FavouriteListContainer,
} from 'pages/Homepage/components/Content/RecipeList.css';

function Content({favouriteRecipesList}) {
	const recipesList = favouriteRecipesList.map((recipe) => (
		<RecipeContainer key={recipe._id}>
			<ImageContainer
				to={`/recipe/${recipe._id}`}
				url={`http://localhost:5000/image/${recipe.recipeImageNames[0]}`}
			/>
			<RecipeTitle>{recipe.recipeTitle}</RecipeTitle>
		</RecipeContainer>
	));

	return <FavouriteListContainer>{recipesList || ''}</FavouriteListContainer>;
}

const mapStateToProps = (state) => ({
	favouriteRecipesList: state.applicationRecuder.favouriteRecipesList,
});

export default connect(mapStateToProps)(Content);
