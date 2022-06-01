import React from "react";

//create your first component
const Card = () => {
	return (
		<div className="card-div">
			<div className="container">
				<div className="row">
					<div class="col-3">
						<div class="card">
							<div class="card-body">
								<img
									src="https://s3.us-east-1.amazonaws.com/co-assets/assets/images/_fbTw/florida.jpg"
									class="card-img-top"
									alt="..."
								/>

								<h5 class="card-title mt-3 mb-2">Florida</h5>
								<p class="card-text">
									Descubre más sobre este destino haciendo
									clic en el botón.
								</p>
							</div>
						</div>
						<div className="button-card">
							<button
								type="button"
								class="btn btn-primary mt-4 center">
								Ver más
							</button>
						</div>
					</div>

					<div class="col-3">
						<div class="card">
							<div class="card-body">
								<img
									src="https://astelus.com/wp-content/viajes/guia-turistica-de-londres-inglaterra.jpg"
									class="card-img-top"
									alt="..."
								/>

								<h5 class="card-title mt-3 mb-2">Londres</h5>
								<p class="card-text">
									Descubre más sobre este destino haciendo
									clic en el botón.
								</p>
							</div>
						</div>
						<div className="button-card">
							<button
								type="button"
								class="btn btn-primary mt-4 center">
								Ver más
							</button>
						</div>
					</div>

					<div class="col-3">
						<div class="card">
							<div class="card-body">
								<img
									src="https://images.unsplash.com/photo-1612358405970-e1aeba9d76c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2VuaWF8ZW58MHx8MHx8&w=1000&q=80"
									class="card-img-top"
									alt="..."
								/>

								<h5 class="card-title mt-3 mb-2">Kenia</h5>
								<p class="card-text">
									Descubre más sobre este destino haciendo
									clic en el botón.
								</p>
							</div>
						</div>
						<div className="button-card">
							<button
								type="button"
								class="btn btn-primary mt-4 center">
								Ver más
							</button>
						</div>
					</div>

					<div class="col-3">
						<div class="card">
							<div class="card-body">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hong_Kong_Island_Skyline_201108.jpg/1200px-Hong_Kong_Island_Skyline_201108.jpg"
									class="card-img-top"
									alt="..."
								/>

								<h5 class="card-title mt-3 mb-2">Hong Kong</h5>
								<p class="card-text">
									Descubre más sobre este destino haciendo
									clic en el botón.
								</p>
							</div>
						</div>
						<div className="button-card">
							<button
								type="button"
								class="btn btn-primary mt-4 center">
								Ver más
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
