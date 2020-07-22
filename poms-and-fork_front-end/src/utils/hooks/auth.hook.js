import {useState, useCallback, useEffect} from 'react';

import {store} from 'index';
import {fetchUserById} from 'data/actions/dataDB.actions';
import {setTokenInStore} from 'data/actions/app.actions';

let logoutTimer;

export const useAuth = () => {
	const [token, setToken] = useState(false);
	const [tokenExpirationDate, setTokenExpirationDate] = useState();
	const [userId, setUserId] = useState(false);
	
	const login = useCallback((uId, token, expirationDate) => {
		setToken(token);
		setUserId(uId);
		const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
		setTokenExpirationDate(tokenExpirationDate);
		localStorage.setItem(
			'userData',
			JSON.stringify({
				userId: uId,
				token: token,
				expiration: tokenExpirationDate.toISOString(),
			}),
		);
		if(token){
			store.dispatch(setTokenInStore(token));
		}
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUserId(null);
		setTokenExpirationDate(null);
		localStorage.removeItem('userData');
	}, []);

	useEffect(() => {
		if(token && tokenExpirationDate) {
			const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
			logoutTimer = setTimeout(logout, remainingTime);
		} else {
			clearTimeout(logoutTimer);
		}
	}, [token, logout, tokenExpirationDate]);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem('userData'));
		if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
			login(storedData.userId, storedData.token, new Date(storedData.expiration));
			store.dispatch(fetchUserById(storedData.userId));
		}
	}, [login]);

	return {token, login, logout, userId};
};