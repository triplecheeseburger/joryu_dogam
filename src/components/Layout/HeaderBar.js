import Header from "./Header";
import RandomButton from "./RandomButton";
import Hamburger from "../Hamburger/Hamburger";
import '../../styles/Layout.css'
import React from 'react'
function HeaderBar({toggleMenu}) {
	return (
		<div className='headerBar'>
			<Hamburger toggleMenu={toggleMenu}/>
			<Header />
			<RandomButton />
		</div>
	)
}

export default React.memo(HeaderBar)