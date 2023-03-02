import './styles/App.css';
import Layout from "./components/Layout/Layout";
import RandomBirdButton from "./components/RandomBirdButton";
import BigBird from "./components/BigBird";
import {HashRouter, Routes, Route} from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<HashRouter basename={process.env.P}>
					<Layout>
						<Routes>
							<Route path="/" element={<RandomBirdButton/>}/>
							<Route path="/bird" element={<BigBird/>}/>
						</Routes>
					</Layout>
			</HashRouter>
		</div>
	);
}

export default App;
