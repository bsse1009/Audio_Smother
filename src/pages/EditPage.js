import React from 'react';
import PlayAudio from '../components/PlayAudio';

const EditPage = () => {
	return (
		<div>
			<h1 style={{ textAlign: 'center', margin: '1em 0' }}>
				Listen Your Original Track
			</h1>
			<PlayAudio />
		</div>
	);
};

export default EditPage;
