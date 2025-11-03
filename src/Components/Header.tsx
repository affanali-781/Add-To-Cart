import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { NavLink } from "react-router-dom";
import type { CardType } from "../types/CardType";
import { ADD, REMOVE, DECREMENT } from "../redux/actions/action";

import HomeIcon from "@mui/icons-material/Home";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Cart from "../assets/images/cart.png";

const Header: React.FC = () => {
	const cartItems = useSelector((state: RootState) => state.cartreducer.carts);
	const dispatch = useDispatch();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const increment = (item: CardType) => {
		dispatch(ADD(item));
	};

	const decrement = (item: CardType) => {
		dispatch(DECREMENT(item));
	};

	const removeItem = (item: CardType) => {
		dispatch(REMOVE(item));
	};

	// Calculate total price for all items in cart
	const totalCartPrice = cartItems.reduce(
		(acc: number, item: CardType) => acc + (item.price || 0) * (item.qnty || 1),
		0
	);

	return (
		<header className="bg-white dark:bg-[#450693] shadow-sm">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between relative">
					{/* Home Icon */}
					<div className="flex items-center">
						<NavLink
							to="/"
							className="flex items-center hover:text-red-500 dark:text-[#F5DAA7] dark:hover:text-teal-100"
						>
							<HomeIcon sx={{ fontSize: 45 }} />
						</NavLink>
					</div>

					{/* Title */}
					<div className="absolute left-1/2 transform -translate-x-1/2">
						<p className="text-2xl font-semibold dark:text-[#FFC400]">
							Add to Cart
						</p>
					</div>

					{/* Cart Icon */}
					<div className="flex items-center">
						<button
							id="basic-button"
							aria-controls={open ? "basic-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}
						>
							<Badge
								badgeContent={cartItems.length}
								color="secondary"
								sx={{
									"& .MuiBadge-badge": {
										backgroundColor: "#a78413ff",
										color: "white",
										fontSize: "1rem",
										height: "20px",
										minWidth: "20px",
									},
								}}
							>
								<ShoppingCartIcon sx={{ fontSize: 40, color: "#F5DAA7" }} />
							</Badge>
						</button>

						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							slotProps={{
								list: {
									"aria-labelledby": "basic-button",
									sx: {
										backgroundColor: "#8927baff",
										color: "#f1f5f9",
										paddingY: 1,
										borderRadius: 2,
										boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
										minWidth: "400px",
									},
								},
							}}
							PaperProps={{
								sx: {
									borderRadius: "10px",
									overflow: "hidden",
									backgroundColor: "#1e293b",
								},
							}}
						>
							{cartItems.length ? (
								<div className="flex flex-col gap-4 p-4 max-h-[400px] overflow-y-auto">
									{cartItems.map((item: CardType, index: number) => (
										<div
											key={index}
											className="flex items-center justify-between bg-[#2a2a2a] p-3 rounded-md"
										>
											{/* Item Info */}
											<NavLink
												to={`/cart/${item.id}`}
												className="flex items-center gap-3"
												onClick={handleClose}
											>
												<img
													src={item.imgdata}
													alt={item.rname}
													className="w-16 h-16 rounded"
												/>
												<div className="flex flex-col">
													<span className="text-white font-semibold">
														{item.rname}
													</span>
													<span className="text-gray-300 text-sm">
														{item.address}
													</span>
													{/* Total price per item */}
													<span className="text-amber-400 font-bold">
														Rs. {(item.price || 0) * (item.qnty || 1)}
													</span>
												</div>
											</NavLink>

											{/* Counter & Remove */}
											<div className="flex items-center gap-2">
												<button
													onClick={() => decrement(item)}
													className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-600"
												>
													-
												</button>
												<span className="text-white font-semibold">
													{item.qnty || 1}
												</span>
												<button
													onClick={() => increment(item)}
													className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-600"
												>
													+
												</button>
												<button
													onClick={() => removeItem(item)}
													className="text-red-500 font-bold hover:text-red-700 ml-2"
												>
													X
												</button>
											</div>
										</div>
									))}

									{/* Total Price of All Items */}
									<div className="flex justify-end mt-4 text-white font-bold text-lg">
										Total: Rs. {totalCartPrice}
									</div>
								</div>
							) : (
								<div className="flex flex-col items-center justify-center p-6 relative w-full h-full">
									{/* Close icon at top-right */}
									<CloseIcon
										sx={{
											fontSize: 28,
											color: "#f43f5e",
											cursor: "pointer",
											position: "absolute",
											top: 8,
											right: 8,
										}}
										onClick={handleClose}
									/>

									<p className="text-[#F5DAA7] mb-3">Your Cart is Empty.</p>
									<img src={Cart} alt="cart" style={{ width: "5rem" }} />
								</div>
							)}
						</Menu>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
