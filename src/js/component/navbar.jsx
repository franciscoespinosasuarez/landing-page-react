import React from "react";

//Componente Navbar
const Navbar = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-dark ">
				<div class="container">
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class="collapse navbar-collapse d-flex justify-content-between"
						id="navbarTogglerDemo01">
						<a class="navbar-brand text-white" href="#">
							Viajes Fran
						</a>
						<ul class="navbar-nav mb-2">
							<li class="nav-item">
								<a
									class="nav-link active text-white"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white" href="#">
									About
								</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link text-white"
									href="#"
									tabindex="-1"
									aria-disabled="true">
									Services
								</a>
							</li>

							<li class="nav-item">
								<a
									class="nav-link text-white"
									href="#"
									tabindex="-1"
									aria-disabled="true">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
