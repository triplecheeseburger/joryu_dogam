import InfinityScrollBirdList from './InfinityScrollBirdList'
import InfinityScrollSearchBird from "./InfinityScrollSearchBird";
import {IoMdClose} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'
import {useState} from "react";
import '../../styles/HamburgerMenu.css'
function HamburgerMenu({closeMenu}) {
	const [birdQuery, setBirdQuery] = useState('');
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	}

	const inputHandler = (e) => {
		setBirdQuery(e.target.value);
	}

	return (
		<div className='background' onClick={closeMenu}>
			<div className='hamburgerMenu' onClick={(e) => e.stopPropagation()}>
				<div className='buttonsContainer'>
					<div className='searchButton' onClick={toggleSearch}>
						<BsSearch />
					</div>
					{isSearchOpen &&
						<input
							type='text'
							onChange={inputHandler}
							placeholder=''
							value={birdQuery}
						/>}
					<div className='closeButton'>
						<IoMdClose onClick={closeMenu}/>
					</div>
				</div>
				{isSearchOpen ?
					birdQuery && <InfinityScrollSearchBird birdQuery={birdQuery}/>
					: <InfinityScrollBirdList />
				}

			</div>
		</div>
	)
}

export default HamburgerMenu