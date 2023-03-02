import {FaRandom} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import React from 'react'
function RandomButton() {
	return (
		<div className='random'>
			<Link to='/bird'>
				<FaRandom/>
			</Link>
		</div>
	)
}

export default React.memo(RandomButton)