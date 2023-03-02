import '../styles/RandomBirdButton.css'
import {useState} from 'react';
import {Link} from 'react-router-dom';
function RandomBirdButton() {
	const imageUrl = process.env.PUBLIC_URL + "/qbox.png"
	const clickedUrl = process.env.PUBLIC_URL + "/qbox-clicked.png"
	const [isHovering, setIsHovering] = useState(0);

	return (
		<div className='buttonWrapper'>
			<div className='buttonDescription'>
				어떤 새가 나올까?
			</div>
			<div className='buttonContainer'>
				<Link to='/bird'>
					<img
						className="qbox"
						onMouseOver={() => setIsHovering(1)}
						onMouseOut={() => setIsHovering(0)}
						src={isHovering ? clickedUrl : imageUrl}
						alt="Random Bird Button">
					</img>
				</Link>
			</div>
		</div>
	)
}

export default RandomBirdButton;