import {RxHamburgerMenu} from 'react-icons/rx'

function Hamburger({toggleMenu}) {
	return (
		<div className='hamburger' onClick={toggleMenu}>
			<RxHamburgerMenu/>
		</div>
	)
}

export default Hamburger