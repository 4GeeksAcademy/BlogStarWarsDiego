import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Navbar = (item, resource) => {
	const context = useContext(Context);
	const params = useParams();

	return (
		<nav className="navbar mb-3 px-5 d-flex justify-content-between align-items-center">

			{/* Logo and author section */}
			<Link to="/" className="mx-auto">
				<div className="logo-image m-4" style={{ width: "600px" }}>
					<img src="https://framerusercontent.com/images/So44kHjjBZVdvTWmwdUULC04.jpeg" className="img-fluid" />
				</div>
				<p className="text-center">
					by{" "}
					<a href="https://github.com/Dvg-Dexter">Diego Vega</a>
				</p>
			</Link>

			{/* Dropdown for favorites */}
			<div className="dropdown mx-5">
				<button className="btn btn-secondary dropdown-toggle btn-lg" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos
					<span className="badge badge-pill badge-danger">
						{context.store.list.length}
					</span>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{context.store.favorite && (
						context.store.list.map((favorite, index) => {
							return (
								<li className="dropdown-item" key={favorite.uid}>
									<Link to={`${favorite.resource}/${favorite.uid}`}>
										{favorite.properties.name}
									</Link>
									<i
										className="fas fa-solid fa-trash close"
										onClick={(e) => {
											const deleteFavorite = context.store.list.filter(
												(deleteFavorite, i) => {
													if (index == i) {
														return false;
													} else {
														return true;
													}
												}
											);
											console.log(deleteFavorite);
											context.actions.deleteFavorite(deleteFavorite);
										}}>
									</i>
								</li>
							);
						})
					)}
				</ul>
			</div>
			<div>
				<Link to="/" className="btn btn-primary btn-lg">
				<i className="fas fa-undo"></i>
				</Link>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	item: PropTypes.object,
	resource: PropTypes.string,
};
