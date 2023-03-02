import '../../styles/Layout.css'
import React from 'react'
function Footer() {
	return (
		<div className='footer'>
			{process.env.REACT_APP_FOOTER_TEXT}
		</div>
	)
}

export default React.memo(Footer)