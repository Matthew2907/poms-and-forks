import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { Button } from 'components';
import backIcon from 'images/BackIcon.svg';
import { StepModeModalContainer } from './StepModeModal.css';
import { setDescriptionStepIndex } from 'data/actions/app.actions';

function StepModeModal({ recipeDescription, currentDescriptionStepIndex, setDescriptionStepIndex }) {
	const backButtonRef = useRef(null);
	const nextButtonRef = useRef(null);
	let newIndex = currentDescriptionStepIndex;

	const changeButtonState = (reference, boolean) => {
		const color = boolean ? 'background-color: rgba(0,0,0,0.6);' : 'background-color: rgb(196, 196, 196);';
		reference.current.setAttribute('disabled', boolean);
		reference.current.setAttribute('style', color);
	};

	useEffect(() => {
		if(newIndex === (recipeDescription.length - 1)){
			changeButtonState(backButtonRef, false);
			changeButtonState(nextButtonRef, true);
		} else if (newIndex === 0) {
			changeButtonState(backButtonRef, true);
			changeButtonState(nextButtonRef, false);
		} else {
			changeButtonState(backButtonRef, false);
			changeButtonState(nextButtonRef, false);
		}
	},[newIndex, recipeDescription.length])

	const changeDescriptionStep = (operation) => {
		if(currentDescriptionStepIndex < (recipeDescription.length - 1) && operation === "next"){
			newIndex++;
		} else if (currentDescriptionStepIndex > 0 && operation === "back"){
			newIndex--;
		}
		return setDescriptionStepIndex(newIndex);
	};
	
	return(
		<React.Fragment>
			{typeof recipeDescription !==  "undefined" ?
			<StepModeModalContainer>
			<Button ref={backButtonRef} variant="backStepMode" onClick={currentDescriptionStepIndex === 0 ? null : () => changeDescriptionStep("back")}>
				<img src={backIcon} alt="back"/>
			</Button>
			<Button ref={nextButtonRef} variant="nextStepMode" onClick={currentDescriptionStepIndex === (recipeDescription.length - 1) ? null : () => changeDescriptionStep("next")}>
				<img src={backIcon} alt="next"/>
			</Button>
			<h2>{currentDescriptionStepIndex + 1} of {recipeDescription.length}</h2>
			<p>{recipeDescription[currentDescriptionStepIndex]}</p>
		</StepModeModalContainer>
				: ""
			}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => ({
	currentDescriptionStepIndex: state.applicationRecuder.currentDescriptionStepIndex,
  });

const mapDispatchToProps = dispatch => ({
	setDescriptionStepIndex: (index) => dispatch(setDescriptionStepIndex(index)),
});

export default connect(mapStateToProps,mapDispatchToProps)(StepModeModal);