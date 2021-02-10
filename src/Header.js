import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import ContactsIcon from '@material-ui/icons/Contacts';
import AddScreen from './screens/AddScreen';

function Header() {
	const [addItem, setAddItem] = useState(false);
	return (
		<div className='header'>
			<div className='header__left'>
				<img src='images\WVElogo-removebg-preview.png' alt='' />
				<div className='header__input'>
					<SearchIcon />
					<input type='text' />
				</div>
			</div>
			<div className='header__middle'>
				<div className='header__option'>
					<LibraryAddIcon onClick={() => setAddItem(true)} fontSize='large' />
                    {addItem ? (
                        <AddScreen/>
                    ) : (
                        <>
                        </>

                    )}
				</div>

				<div className='header__option'>
					<ContactsIcon fontSize='large' />
				</div>
			</div>
			<div className='header__right'></div>
		</div>

        
	);
}

export default Header;
