import {Link} from 'react-router-dom'
import React from "react";
function Header() {
	return (
		<Link to='/'>{process.env.REACT_APP_TITLE}</Link>
	)
}

export default React.memo(Header)