import { Avatar } from '@material-ui/core';
import React from 'react';
import './MessageSender.css';

function MessageSender() {
	return (
		<div className='messageSender'>
			<div className='messageSender__top'>
				<Avatar />
				<form>
					<input
						className='messageSender__input'
						type='text'
						placeholder={'Whats on your mind...'}
					/>
					<input type='text' placeholder='image URL (optional)' />
				</form>
			</div>
			<div className='messageSender__bottom'></div>
		</div>
	);
}

export default MessageSender;
