import React from "react";

//include components
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<Card></Card>
		</>
	);
};

export default Home;
