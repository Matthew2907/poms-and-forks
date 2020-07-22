import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';

import {Button} from 'components';
import {StepModeModalContainer} from './StepModeModal.css';
import {setDescriptionStepIndex} from 'data/actions/app.actions';
import {changeButtonState} from 'utils/globalFunctions';
import backIcon from 'images/BackIcon.svg';

function StepModeModal({recipeDescription, currentDescriptionStepIndex, setDescriptionStepIndex}) {
	const backButtonRef = useRef(null);
	const nextButtonRef = useRef(null);
	let newIndex = currentDescriptionStepIndex;

	useEffect(() => {
		if (newIndex === recipeDescription.length - 1) {
			if(recipeDescription.length === 1){
				changeButtonState(backButtonRef, true);	
			} else {
				changeButtonState(backButtonRef, false);
			}
			changeButtonState(nextButtonRef, true);
		} else if (newIndex === 0) {
			changeButtonState(backButtonRef, true);
			changeButtonState(nextButtonRef, false);
		} else {
			changeButtonState(backButtonRef, false);
			changeButtonState(nextButtonRef, false);
		}
	}, [newIndex, recipeDescription.length]);

	const changeDescriptionStep = (operation) => {
		if (currentDescriptionStepIndex < recipeDescription.length - 1 && operation === 'next') {
			newIndex++;
		} else if (currentDescriptionStepIndex > 0 && operation === 'back') {
			newIndex--;
		}
		return setDescriptionStepIndex(newIndex);
	};

	return (
		<React.Fragment>
			{typeof recipeDescription !== 'undefined' ? (
				<StepModeModalContainer>
					<Button
						ref={backButtonRef}
						variant="backStepMode"
						onClick={
							currentDescriptionStepIndex === 0
								? null
								: () => changeDescriptionStep('back')
						}
					>
						<img src={backIcon} alt="previous description step" />
					</Button>
					<Button
						ref={nextButtonRef}
						variant="nextStepMode"
						onClick={
							currentDescriptionStepIndex === recipeDescription.length - 1
								? null
								: () => changeDescriptionStep('next')
						}
					>
						<img src={backIcon} alt="next description step" />
					</Button>
					<h2>
						{currentDescriptionStepIndex + 1} of {recipeDescription.length}
					</h2>
					<p>{recipeDescription[currentDescriptionStepIndex]}</p>
				</StepModeModalContainer>
			) : (
				''
			)}
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	currentDescriptionStepIndex: state.applicationRecuder.currentDescriptionStepIndex,
});

const mapDispatchToProps = (dispatch) => ({
	setDescriptionStepIndex: (index) => dispatch(setDescriptionStepIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepModeModal);
