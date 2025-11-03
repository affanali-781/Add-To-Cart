import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import type { CardType } from "../types/cardType";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";

import { ADD, DECREMENT, REMOVE } from "../redux/actions/action";

const CardDetails: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useDispatch();
	const cartItems = useSelector((state: RootState) => state.cartreducer.carts);

	const [item, setItem] = useState<CardType | null>(null);
	const [quantity, setQuantity] = useState<number>(1);

	useEffect(() => {
		if (id) {
			// Only find item in cart
			const cartItem = cartItems.find((e: CardType) => e.id.toString() === id);
			if (cartItem) {
				setItem(cartItem);
				setQuantity(cartItem.qnty ?? 1);
			} else {
				// Item not in cart
				setItem(null);
				setQuantity(0);
			}
		}
	}, [id, cartItems]);

	const handleAdd = () => {
		if (item) {
			dispatch(ADD({ ...item, qnty: quantity + 1 }));
			setQuantity((prev) => prev + 1);
		}
	};

	const handleDecrement = () => {
		if (!item) return;
		if (quantity > 1) {
			dispatch(DECREMENT({ ...item, qnty: quantity - 1 }));
			setQuantity((prev) => prev - 1);
		} else {
			dispatch(REMOVE(item));
		}
	};

	const handleRemove = () => {
		if (!item) return;
		dispatch(REMOVE(item));
	};

	if (!item) {
		return (
			<div className="mt-20 text-center text-xl text-gray-700 dark:text-gray-200">
				No items in the cart. <br />
				<NavLink
					to="/"
					className="text-xl text-center font-bold italic dark:text-[#D78FEE] my-20"
				>
					Go back to Shop
				</NavLink>
			</div>
		);
	}

	return (
		<>
			<div className="mt-11 px-6">
				<p className="text-6xl text-center font-bold italic dark:text-[#D78FEE] my-20">
					Item Details
				</p>
			</div>

			<section className="flex justify-center items-center my-12">
				<div className="flex flex-col md:flex-row items-center md:items-start bg-white dark:bg-[#C584D8]/70 rounded-2xl shadow-2xl p-6 md:p-10 w-[90%] md:w-[70%] lg:w-[60%] transition-all duration-300">
					<div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
						<img
							src={item.imgdata}
							alt={item.rname}
							className="rounded-xl w-80 h-80 object-cover shadow-md"
						/>
					</div>

					<div className="w-full md:w-1/2 md:pl-10 space-y-4 text-gray-800 dark:text-white">
						<h2 className="text-3xl font-bold">{item.rname}</h2>

						<p className="text-lg text-gray-700 dark:text-gray-200">
							<span className="font-semibold text-[#450693] dark:text-[#FFC400]">
								Restaurant:
							</span>{" "}
							{item.address}
						</p>

						<p className="text-lg font-semibold">
							Price:{" "}
							<span className="text-[#843b1bff] dark:text-[#FFC400]">
								Rs. {item.price}
							</span>
						</p>

						<div className="flex items-center">
							<StarIcon sx={{ color: "#facc15" }} />
							<StarIcon sx={{ color: "#facc15" }} />
							<StarIcon sx={{ color: "#facc15" }} />
							<StarIcon sx={{ color: "#facc15" }} />
							<StarIcon sx={{ color: "#9ca3af" }} />
							<p className="ml-2 text-sm text-gray-600 dark:text-gray-300">
								(4.0 / 5 - 112 reviews)
							</p>
						</div>

						<div className="flex items-center space-x-4">
							<p className="font-semibold">Quantity:</p>
							<div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-lg">
								<button
									className="text-red-500 hover:text-red-700"
									onClick={handleDecrement}
								>
									<RemoveIcon />
								</button>
								<span className="font-semibold text-lg text-gray-800 dark:text-white">
									{quantity}
								</span>
								<button
									className="text-green-500 hover:text-green-700"
									onClick={handleAdd}
								>
									<AddIcon />
								</button>
							</div>
						</div>

						<button
							onClick={handleRemove}
							className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md font-semibold transition-colors duration-300"
						>
							<DeleteIcon /> Remove Item
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default CardDetails;
