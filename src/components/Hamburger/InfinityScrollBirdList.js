import {useEffect, useState, useRef} from "react";
import BirdListItem from "./BirdListItem";
import '../../styles/InfinityScrollBirdList.css'
function InfinityScrollBirdList() {
	let totalCount;
	const numOfRows = 20;
	const [pageNo, setPageNo] = useState(0);
	const [birdList, setBirdList] = useState([]);
	const [bottom, setBottom] = useState(null);
	const bottomObserver = useRef(null);

	useEffect(() => {
		if (pageNo === 0)
			return ;
		fetchBirdList(pageNo);
	}, [pageNo]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					if (totalCount <= pageNo * numOfRows) {
						return;
					}
					setPageNo((prev) => prev + 1);
				}
			},
			{ threshold: 0.1, rootMargin: '1000px'},
		);
		bottomObserver.current = observer;
	}, []);

	useEffect(() => {
		const observer = bottomObserver.current;
		if (bottom) {
			observer.observe(bottom);
		}
		return () => {
			if (bottom) {
				observer.unobserve(bottom);
			}
		};
	}, [bottom]);

	async function fetchBirdList(no) {
		try {
			const url = process.env.REACT_APP_DATA_LIST_URL + '?serviceKey=' + process.env.REACT_APP_DATA_KEY + '&st=1&numOfRows=' + numOfRows + '&pageNo=' + no;
			const response = await fetch(url);
			const birdList = await response.text();
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(birdList, "text/xml");
			totalCount = xmlDoc.getElementsByTagName('totalCount')[0].innerHTML;
			if (totalCount === '0') {
				return;
			}
			const birdNums = xmlDoc.getElementsByTagName('anmlSpecsId');
			const birdNames = xmlDoc.getElementsByTagName('anmlGnrlNm');
			const newBirds = [];
			for (let i = 0; i < birdNums.length; i++) {
				newBirds.push({name: birdNames[i].innerHTML, num: birdNums[i].innerHTML});
			}
			setBirdList((prev) => [...prev, ...newBirds]);
		} catch (e) {
			console.log(e); // todo: error handling
		}
	}

	return (
		<div className='birdList'>
			{birdList.map((bird, index) => {
				return <BirdListItem bird={bird} key={bird.num} />
			})}
			<div className='bottom' ref={setBottom}>
				Surprise!
			</div>
		</div>
	)
}

export default InfinityScrollBirdList