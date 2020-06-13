import { combineReducers } from 'redux';

import data from './data.reducer';
import recipe from './recipe.reducer';
import applicationRecuder from './app.reducer';

const rootReducer = combineReducers({
	data,
	recipe,
	applicationRecuder,
});

export default rootReducer;