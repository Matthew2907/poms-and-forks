import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {
	ContentCantainer,
	MainRecipeContainer,
	MainImageContainer,
	MainRecipeTitle,
} from './MainRecipe.css';
import {RecipeListContainer, RecipeContainer, ImageContainer, RecipeTitle} from './RecipeList.css';
import {fetchRecipes} from 'data/actions/data.actions';

function Content({fetchRecipes, recipes}) {
	useEffect(() => {
		fetchRecipes();
	}, [fetchRecipes]);

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

const mapStateToProps = (state) => ({
	recipes: state.data.recipes,
});

const mapDispatchToProps = (dispatch) => ({
	fetchRecipes: () => dispatch(fetchRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
