import './styles/App.css';
import Layout from "./components/Layout/Layout";
import RandomBirdButton from "./components/RandomBirdButton";
import BigBird from "./components/BigBird";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<RandomBirdButton />} />
						<Route path="/bird" element={<BigBird />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
