import * as budget from './data.fetch';
import * as recipe from './recipe.fetch';

export default {	// exportujemy defaultowo obiekt czyli będziemy mogli zaimportować stąd tylko default, który nazwiemy jak chcemy w pliku docelowym, a w nim będzie klucz budget który jeste obiektem zawierającym funkcje fetchBudget oraz fetchBudgetedCategories
	budget,
	recipe,
}