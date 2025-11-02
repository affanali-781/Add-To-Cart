import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Cart from "../assets/images/cart.png";

const Header: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<header className="bg-white dark:bg-[#450693] shadow-sm">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between relative">
					<div className="flex items-center">
						<NavLink
							to="/"
							className="flex items-center hover:text-red-500 dark:text-[#F5DAA7] dark:hover:text-teal-100"
						>
							<HomeIcon sx={{ fontSize: 45 }} />
						</NavLink>
					</div>

					{/* Center Section (Text) */}
					<div className="absolute left-1/2 transform -translate-x-1/2">
						<p className="text-2xl font-semibold dark:text-[#FFC400]">
							Add to Cart
						</p>
					</div>

					{/* Right Section (Cart Icon with Badge) */}
					<div className="flex items-center">
						<NavLink
							to="/"
							className="relative flex items-center justify-center rounded-md px-3 py-2 text-base font-medium text-[#F5DAA7] shadow-sm dark:hover:bg-[#8C00FF]"
						>
							<Badge
								badgeContent={1}
								color="secondary"
								id="basic-button"
								aria-controls={open ? "basic-menu" : undefined}
								aria-haspopup="true"
								aria-expanded={open ? "true" : undefined}
								onClick={handleClick}
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
								<ShoppingCartIcon sx={{ fontSize: 40 }} />
							</Badge>
						</NavLink>

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
										boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
										minWidth: "180px",
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
							<div
								className="flex items-center justify-center"
								style={{ width: "24rem", padding: 10, position: "relative" }}
							>
								<p className="text-[#F5DAA7]"> Your Cart is Empty.</p>
								<img
									src={Cart}
									alt="cart"
									style={{ width: "5rem", padding: 10 }}
								/>
								<CloseIcon
									sx={{ fontSize: 28, color: "#f43f5e" }}
									onClick={handleClose}
									style={{
										position: "absolute",
										top: 2,
										right: "20",
										cursor: "pointer",
									}}
								/>
							</div>
						</Menu>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
