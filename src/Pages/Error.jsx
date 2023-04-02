import React from "react";
import { Link } from "react-router-dom";

function Error() {
	return (
		<main>
			<div>
				<h2>404</h2>
				<p> Oups! Nous rencontrons des difficultés à charger la page demandée. </p>
				<Link to="/">
					Home
				</Link>
			</div>
		</main>
	);
}

export default Error