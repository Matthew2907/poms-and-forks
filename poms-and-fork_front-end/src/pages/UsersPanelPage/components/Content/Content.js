import React from 'react';

import { Button, LoadingIndicator } from 'components';
import { ContentContainer, UserImageContainer, UserInformationContainer, SingleUserInfoContainer} from './Content.css';
import whiteStar from 'images/Polygon 5.svg';
import blackStar from 'images/BlackStar.svg';

function Content({ user }) {

	const functionWillCreate = () => {
		console.log("Jeszcze nie działam!");
	};

	function starsLevelFunc() {
		const starsArr = [];
		let j = 0;
		for(let i = 0; i < 5; i++){
			for(j; j < user.userChefLevel; j++){
				starsArr.push(whiteStar)
				i++;
			}
			if(user.userChefLevel === 5){
				return starsArr;
			}
			starsArr.push(blackStar)
		}
		return starsArr;
	};

	const starsLevelArr = user && starsLevelFunc();

	return(
		<React.Fragment>
			{ Object.keys(user).length !== 0 ? 
			<ContentContainer>
				<UserImageContainer url={`http://localhost:5000/image/${user.userAvatarImage}`}/>
				<UserInformationContainer>
					<SingleUserInfoContainer>
						<p>Name:</p>
						<p>{user.userName}</p>
					</SingleUserInfoContainer>
					<SingleUserInfoContainer>
						<p>Lastname:</p>
						<p>{user.userLastName}</p>
					</SingleUserInfoContainer>
					<SingleUserInfoContainer>
						<p>Chef level:</p>
						{starsLevelArr.map((star, idx) => <img key={idx} src={star} alt="star"/>)}
					</SingleUserInfoContainer>
					<SingleUserInfoContainer>
						<p>Main skill:</p>
						<p>{user.mainCookSkill}</p>
					</SingleUserInfoContainer>
					<SingleUserInfoContainer>
						<p>Recipes:</p>
						<p>{user.userRecipes.length}</p>
					</SingleUserInfoContainer>
					<SingleUserInfoContainer>
						<p>Joined:</p>
						<p>{user.createdAt.substring(0, 10)}</p>
					</SingleUserInfoContainer>
				</UserInformationContainer>
				<Button variant="editUser" onClick={functionWillCreate}>Edit profile</Button>
			</ContentContainer>
			: <LoadingIndicator/>
		}
		</React.Fragment>
	);
};

export default Content;