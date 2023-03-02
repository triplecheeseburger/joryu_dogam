import HeaderBar from "./HeaderBar";
import Footer from "./Footer";
import HamburgerMenu from "../Hamburger/HamburgerMenu";
import {useState, useEffect} from "react";
import '../../styles/Layout.css'

function Layout({children}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	}
	const closeMenu = () => {
		setIsMenuOpen(false);
	}

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
	}, [isMenuOpen]);

	return (
		<div className='layout'>
			<HeaderBar toggleMenu={toggleMenu}/>
			{isMenuOpen && <HamburgerMenu closeMenu={closeMenu}/>}
			<div className='content'>
				{children}
			</div>
			<Footer/>
		</div>
	)
}

export default Layout