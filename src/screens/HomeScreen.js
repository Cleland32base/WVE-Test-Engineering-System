import React, { useState } from 'react';
import AddScreen from './AddScreen';
import './HomeScreen.css';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import ContactsIcon from '@material-ui/icons/Contacts';
import Header from '../Header';

function HomeScreen() {
	const [signIn, setSignIn] = useState(false);

	return (
		<div className='homeScreen'>

		<Header/>
			<div className='homeScreen__background'>
				{/* <img
					className='homeScreen__logo'
					src='images\WVElogo-removebg-preview.png'
					alt=''
				/>

				<LibraryAddIcon
					onClick={() => setSignIn(true)}
					className='homeScreen__button--add'
				/>

				<ContactsIcon className="homeScreen__button--contacts"/> */}

				<div className='homeScreen__gradiant' />
			</div>
			<div className='homeScreen__body'>
				{signIn ? (
					<AddScreen />
				) : (
					<>
						<div className='homeScreen__input'>
							<form>
								<input type='text' placeholder='Search' />
								<button
									onClick={() => setSignIn(true)}
									className='homeScreen__search'>
									GO!!
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default HomeScreen;
