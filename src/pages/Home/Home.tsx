import Footer from "../../components/common/Footer/Footer";
import Navigation from "../../components/common/Navigation/Navigation";
import Featured from "../../components/pages/Home/Featured";
import Shelf from "../../components/pages/Home/Shelf";
import '../../index.scss';

function Home() {
	return (
		<>
			<Navigation/>
			<div style={{marginTop:"60px"}}></div>
			<div className="viewport-container">
				<Featured/>
				<Shelf/>
				<Footer/>
			</div>
		</>
	);
}

export default Home;