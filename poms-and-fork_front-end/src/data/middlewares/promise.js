export default function promiseMiddleware() {
	return function(next) {
		return function(action) {
			const { promise, type, ...rest } = action; // za pomocą ...rest przekazujemy pozostałe parametry dalej, żeby ich nie zgubić
			
			if(!promise || typeof promise.then !== 'function') {
				return next(action);	// jeśli nie jest to akcja zwracająca promis to chcemy zwrócić tę akcję do kolejnego middleware w liście middlewareów
			}

			const SUCCESS =	`${type}_SUCCESS`;
			const FAILURE = `${type}_FAILURE`;
			const REQUEST = `${type}_REQUEST`;
			
			next({ type: REQUEST, ...rest }); // dispatchujemy za pomocą funkcji next, poinformuje ona store, że request się zaaczał, przekazujemy tutaj obiekt akcji

			return promise
				.then(response => response.json())
				.then(data => {
					next({
						type: SUCCESS,
						payload: data, // nasze reducery reagują na kluc zpayload
						...rest
					})
				})
				.catch(error => {
					next({
						type: FAILURE,
						error,
						...rest
					})
				})
		}
	}
}