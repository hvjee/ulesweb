import {
	BarChart,
	SearchRounded,
	ShoppingCartRounded,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";

function Header() {
	const [{ cart }, dispatch] = useStateValue();

	useEffect(() => {
		const toggleIcon = document.querySelector(".toggleMenu");
		toggleIcon.addEventListener("click", () => {
			document.querySelector(".rightMenu").classList.toggle("active");
		});
	}, []);

	return (
		<header>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/ules-e5ea3.appspot.com/o/uleslogo.png?alt=media&token=2fa6fffb-720c-45ee-ab7b-c8786951c030"
				alt=""
				className="logo"
			/>

			<div className="inputBox">
				<SearchRounded className="searchIcon" />
				<input type="text" placeholder="Поиск" />
			</div>

			<div className="shoppingCart">
				<ShoppingCartRounded className="cart" />
				<div className={`${!cart ? "noCartItem" : "cart_content"}`}>
					<p>{cart ? cart.length : ""}</p>
				</div>
			</div>

			{/* <div className="profileContainer">
				<div className="imgBox">
					<img
						src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937"
						alt=""
					/>
				</div>
				<h2 className="userName">Haji</h2>
			</div> */}

			<div className="toggleMenu">
				<BarChart className="toggleIcon" />
			</div>
		</header>
	);
}

export default Header;
