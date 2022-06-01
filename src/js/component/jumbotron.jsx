import React from "react";

//create your first component
const Jumbotron = () => {
	return (
		<div className="jumbotron-div">
			<div className="container">
				<h1>Las vacaciones que te mereces</h1>
				<p className="mb-3 fs-4">
					¿Estudiar programación te está friendo el cerebro? Vete de
					viaje y despeja tu mente para cargar pilas.
				</p>
				<button type="button btn-lg" class="btn btn-primary">
					Ver ofertas
				</button>
			</div>
		</div>
	);
};

export default Jumbotron;
