import "./navbar.css";
const Navbar = () => {
	return (
		<>
			<div className="Nav-container">
				<nav>
					<a href="javascript:viod(0)">
						<img
							className="logo"
							height={"31px"}
							width={"120px"}
							src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
							alt="logo"
						/>
					</a>
					<div className="tabs">
						<a href="javascript:void(0)">Fitness</a>
						<a href="javascript:void(0)">Care</a>
						<a href="javascript:void(0)">Mind</a>
						<a href="javascript:void(0)">Store</a>
					</div>
					<div>
						<button className="location">
							location{" "}
							<img
								src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
								width={"26px"}
								height={"26px"}
								alt="location"
							/>
						</button>
						<button className="get-app">GET APP</button>

						<button className="avatar">
							<img
								className="btn-img"
								src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png"
								alt="profile picture"
							/>
						</button>
						<button className="cart">
							<img
								className="btn-img"
								src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"
								alt="cart"
							/>
						</button>
					</div>
				</nav>
			</div>
		</>
	);
};
export default Navbar;
