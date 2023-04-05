import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Fallback404 from './pages/.fallback/404/Fallback404';
import ThemeOverview from './pages/ThemeOverview/ThemeOverview';
import SignIn from './pages/UserSignIn/SignIn';


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ <Home/>}/>
					<Route path="/theme-overview" element={ <ThemeOverview/>}/>
					<Route path="/sign-in" element={ <SignIn/>}/>
					<Route path="*" element={ <Fallback404/>}/>
				</Routes>
			</BrowserRouter>
		</>

	);
}

export default App;
