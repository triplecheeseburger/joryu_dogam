import InfinityScrollBirdList from './InfinityScrollBirdList'
import InfinityScrollSearchBird from "./InfinityScrollSearchBird";
import {IoMdClose} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'
import {useState, useEffect, useCallback} from "react";
import {debounce} from "lodash";
import '../../styles/HamburgerMenu.css'

function HamburgerMenu({closeMenu}) {
	const [showValue, setShowValue] = useState('');
	const [debounceValue, setDebounceValue] = useState('');
	const [birdQuery, setBirdQuery] = useState('');
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	}

	const inputHandler = (e) => {
		setShowValue(e.target.value)
		debounceInputHandler(e.target.value);
	}

	const debounceInputHandler = useCallback(debounce((value) => {
		setDebounceValue(value);
	}, 500), []);

	useEffect(() => {
		console.log('out useEffect: ' + debounceValue);
		setBirdQuery(debounceValue);
	}, [debounceValue])

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
							value={showValue}
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