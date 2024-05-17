import './imageUpload.scss';
import '../../styles/components/_button.scss';
import { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
	const [file, setFile] = useState(null);
	const [status, setStatus] = useState('');

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!file) {
			setStatus('Please select a file.');
			return;
		}

		const formData = new FormData();
		formData.append('file', file);

		try {
			const response = await axios.post('localhost:4000/upload/upload/', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			setStatus(`File uploaded successfully: ${response.data.filename}`);
		} catch (error) {
			setStatus('Failed to upload file.');
		}
	};

	return (
		<div className='image-upload-form'>
			<div className='image-upload-form__wrapper'>
				<form className='form' onSubmit={handleSubmit}>
					<h4>Upload Image</h4>
					<div className='form-group'>
						<input
							type='file'
							name='file'
							onChange={handleFileChange}
						/>
					</div>
					<div className='form-group'>
						<button className='button'>Upload</button>
					</div>
					{status && <p>{status}</p>}
				</form>
			</div>
		</div>
	);
};

export default ImageUpload;
