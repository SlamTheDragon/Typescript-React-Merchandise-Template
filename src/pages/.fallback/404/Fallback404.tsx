import React from "react";
import Navigation from "../../../components/common/Navigation/Navigation";

function Fallback404() {
	return (
		<>	
			<Navigation/>
			<div className="align center fill-view no-select">				
				<h1>404</h1>
				<div className="divider" style={{ height: '10%'}}/>
				Page Not Found
			</div>
		</>
	);
}

export default Fallback404;