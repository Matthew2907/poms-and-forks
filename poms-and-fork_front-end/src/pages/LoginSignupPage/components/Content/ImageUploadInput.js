import React, {useRef, useState, useEffect} from 'react';

import {ImageUploadContainer, ImageUploadPreview} from './ImageUploadInput.css';
import {Button} from './Content.css';

const ImageUploadInput = (props) => {
	const [file, setFile] = useState();
	const [previewUrl, setPreviewUrl] = useState();
	const [isValid, setIsValid] = useState(false);
	const filePickerRef = useRef();

	useEffect(() => {
		if (!file) {
			return;
		}
		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPreviewUrl(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	}, [file]);

	const pickedHandler = (event) => {
		let pickedFile;
		let fileIsValid = isValid;
		if (event.target.files && event.target.files.length === 1) {
			pickedFile = event.target.files[0];
			setFile(pickedFile);
			setIsValid(true);
			fileIsValid = true;
		} else {
			setIsValid(false);
			fileIsValid = false;
		}
		props.onInput(props.id, pickedFile, fileIsValid);
	};

	const pickImageHandler = () => {
		filePickerRef.current.click();
	};

	return (
		<div className="form-control">
			<input
				id={props.id}
				style={{display: 'none'}}
				type="file"
				accept=".jpg,.png,.jpeg"
				ref={filePickerRef}
				onChange={pickedHandler}
			/>
			<ImageUploadContainer>
				<ImageUploadPreview className="image-upload__preview">
					{previewUrl && <img src={previewUrl} alt="Preview" />}
					{!previewUrl && <p>Please pick an image.</p>}
				</ImageUploadPreview>
				<Button type="button" onClick={pickImageHandler}>
					Pick image
				</Button>
			</ImageUploadContainer>
			{!isValid && <p>{props.errorText}</p>}
		</div>
	);
};

export default ImageUploadInput;
