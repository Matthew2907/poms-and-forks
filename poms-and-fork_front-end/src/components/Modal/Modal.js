import React from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';

import { Wrapper, Content, CloseIcon } from './Modal.css';
function Modal({ children, resetDescriptionStepIndex }) {
	const history = useHistory();
	const handleClose = event => {
		event.stopPropagation()
		history.goBack();
		resetDescriptionStepIndex(0);
	}
	
	const [updateWidth, setUpdateWidth] = React.useState(window.innerWidth);
	
	window.addEventListener("resize", function() {
		setUpdateWidth(window.innerWidth);
	});
	
	return createPortal(
		<Wrapper onClick={handleClose}>
			<Content updateWidth={updateWidth} onClick={event => event.stopPropagation()}>
				<CloseIcon onClick={handleClose}>&times;</CloseIcon>
				{children}
			</Content>
		</Wrapper>,
		document.querySelector('#modal')
	)
};

export default Modal;