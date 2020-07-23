export const generatorID = function () {
	return '_' + Math.random().toString(36).substr(2, 9);
};

export const changeButtonState = (reference, boolean) => {
	const color = boolean
		? 'background-color: rgba(0,0,0,0.6);'
		: 'background-color: rgb(255, 255, 255);';
	reference.current.setAttribute('style', color);
	if (boolean) {
		reference.current.setAttribute('disabled', boolean);
	} else {
		reference.current.removeAttribute('disabled');
	}
};

export const starsLevelFunc = (object, whiteStar, blackStar, type) => {
	const starsArr = [];
	let j = 0;
	for (let i = 0; i < 5; i++) {
		for (j; j < object[type]; j++) {
			starsArr.push(whiteStar);
			i++;
		}
		if (object[type] === 5) {
			return starsArr;
		}
		starsArr.push(blackStar);
	}
	return starsArr;
};

export const limitRecipeTitle = (title) => {
	const newTitle = [];
	if (title.length > 12) {
		title.split(' ').reduce((acc, cur) => {
			if (acc + cur.length <= 12) {
				newTitle.push(cur);
			}
			return acc + cur.length;
		}, 0);
		return `${newTitle.join(' ')}...`;
	}
	return title;
};
