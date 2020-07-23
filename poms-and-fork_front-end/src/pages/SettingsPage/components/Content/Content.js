import React from 'react';
import {toast} from 'react-toastify';

import {List, Container} from './Content.css';
import {Button} from 'components';
import {useAuth} from 'utils/hooks/auth.hook';
import deleteIcon from 'images/DeleteUser icon.svg';
import logoutIcon from 'images/LogOut icon.svg';

function Content({loggedUser, storedToken}) {
	const {logout} = useAuth();

	const handleLogoutUser = () => {
		logout();
		toast.info('You are logged out!');
		setTimeout(() => {
			window.location.reload(true);
		}, 2000);
	};

	const handleDeleteUser = async () => {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${loggedUser.id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + storedToken,
			},
		});
		const responseData = await response.json();
		toast.warning(responseData.message);
		handleLogoutUser();
	};

	return (
		<Container>
			<List>
				<h2>General</h2>
				<li>
					<Button variant={'settings'} onClick={handleLogoutUser}>
						<img src={logoutIcon} alt="Log out" />
					</Button>
					<p>Log out</p>
				</li>
			</List>
			<List
				style={{
					border: '2px solid red',
					borderRadius: '5px',
				}}
			>
				<h2>Danger zone</h2>
				<li>
					<Button
						variant={'settings'}
						onClick={handleDeleteUser}
						style={{backgroundColor: 'rgba(255, 0,0,0.6)'}}
					>
						<img src={deleteIcon} alt="Delete user" />
					</Button>
					<p>Delete user</p>
				</li>
			</List>
			<p>Copyright &copy; by Mateusz Skołyszewski</p>
		</Container>
	);
}

export default Content;
