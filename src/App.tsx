import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Fallback404 from './pages/.fallback/404/Fallback404';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Home/>}/>
				<Route path="*" element={ <Fallback404/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
