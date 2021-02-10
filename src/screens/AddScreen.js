import React from 'react';
import { useForm } from 'react-hook-form';
import './AddScreen.css';

function AddScreen() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);

	return (
		<div className='addScreen'>
			<h1 className='addScrean__header'>Enter System Details</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					className='addScreen__input--fields'
					type='text'
					placeholder='Description'
					name='Description'
					ref={register({ required: true, maxLength: 80 })}
				/>

				<input
					className='addScreen__input--fields'
					type='text'
					placeholder='Manufacture'
					name='Manufacture'
					ref={register({ required: true, maxLength: 80 })}
				/>

				<input
					className='addScreen__input--fields'
					type='text'
					placeholder='Serial #'
					name='Serial #'
					ref={register({ required: true, maxLength: 100 })}
				/>

				<input
					className='addScreen__input--fields'
					type='text'
					placeholder='ST#'
					name='ST#'
					ref={register({ required: true, maxLength: 80 })}
				/>

				<input
					className='addScreen__input--fields'
					type='text'
					placeholder='xxx.xxx.xxx.xxx'
					name='ipv4'
					ref={register({ required: true, maxLength: 80 })}
				/>

				<input
					className='addScreen__input--fields'
					type='number'
					placeholder='Test Control ver.'
					name='Test Control version'
					ref={register({ required: true, maxLength: 100 })}
				/>

				<input
					className='addScreen__submitButton'
					type='Submit'
					value='Submit'
				/>
			</form>
		</div>
	);
}

export default AddScreen;
