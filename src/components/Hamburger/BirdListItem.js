import {Link} from "react-router-dom";
import {useEffect} from "react";

function BirdListItem({ bird, ref }) {
	return (
		<div className='birdListItem'>
			<Link to='/bird' state={{birdNum: bird.num}}>
				{bird.name}
			</Link>
		</div>
	)
}

export default BirdListItem;