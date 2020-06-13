export * from './data.constants';		// tak exportuje wszystko co exportowalem normalnie w pliku budget.constants
export * from './recipe.constatns';	
export * from './app.constants';	

// LOADING STATES
export const LOADING_STATES = {		// exportuje normalnie obiekt 
	INITIAL: 'INITIAL',
	LOADING: 'LOADING',
	LOADED: 'LOADED',
	FAILED: 'FAILED',
};

export default {			// dorzucam defaultowy export żeby "dopisać" do wszystkiego z budget.constants
	LOADING_STATES,
};