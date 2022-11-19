import React from "react";

function Navbar() {
	return (
		<div className="flex justify-between px-6 h-14 items-end">
			<div className="flex gap-2 items-center">
				<img
					src="https://static.grammarly.com/assets/files/cb6ce17d281d15f2c819035bcd430b0e/ukraine_grammarly_logo.svg"
					alt="Grammarly Logo"
					width="140"
					height="33"
				></img>
			</div>
			<span className="font-bold login">Log in</span>
		</div>
	);
}

export default Navbar;
