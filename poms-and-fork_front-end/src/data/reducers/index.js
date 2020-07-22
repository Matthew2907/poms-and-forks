import {combineReducers} from 'redux';

import applicationRecuder from './app.reducer';
import dataDB from './dataDB.reducer';

const rootReducer = combineReducers({
	applicationRecuder,
	dataDB,
});

export default rootReducer;
