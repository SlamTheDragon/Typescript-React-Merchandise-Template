import { Link } from "react-router-dom";
import Button from "../../components/common/Button/Button";

function Home() {
	return (
		<>
			hello worl
			<Button href="/test" label="test"/>
		</>
	);
}

export default Home;