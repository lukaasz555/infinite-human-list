import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Humans } from './views/Humans';
import './App.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Humans />} />
			</Routes>
		</Router>
	);
}

export default App;
