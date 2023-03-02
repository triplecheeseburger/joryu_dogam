import {Link} from "react-router-dom";

function BirdListItem({ bird }) {
	return (
		<div className='birdListItem'>
			<Link to='/bird' state={{birdNum: bird.num}}>
				{bird.name}
			</Link>
		</div>
	)
}

export default BirdListItem;