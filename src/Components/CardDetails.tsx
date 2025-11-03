import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../store";
import type { CardType } from "../types/CardType";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

import { ADD, DECREMENT, REMOVE } from "../redux/actions/action";

const CartDetails: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cartItems = useSelector((state: RootState) => state.cartreducer.carts);

	const handleAdd = (item: CardType) => {
		dispatch(ADD({ ...item, qnty: item.qnty + 1 }));
	};

	const handleDecrement = (item: CardType) => {
		if (item.qnty > 1) {
			dispatch(DECREMENT({ ...item, qnty: item.qnty - 1 }));
		} else {
			dispatch(REMOVE(item));
		}
	};

	const handleRemove = (item: CardType) => {
		dispatch(REMOVE(item));
	};

	if (cartItems.length === 0) {
		return (
			<div className="mt-20 text-center text-lg text-gray-700 dark:text-gray-200">
				<p>No items in the cart.</p>
				<button
					onClick={() => navigate("/")}
					className="mt-4 px-6 py-2 bg-[#997b45]/70 dark:bg-[#450693]/70 dark:text-[#c19615] rounded-md dark:hover:bg-[#2e0f50]/70 transition duration-200 font-bold"
				>
					Go back to shop
				</button>
			</div>
		);
	}

	const totalPrice = cartItems.reduce(
		(acc, item) => acc + item.price * item.qnty,
		0
	);

	return (
		<div className="mt-10 px-6">
			<h1 className="text-5xl text-center font-bold italic dark:text-[#D78FEE] mb-10">
				Cart Details
			</h1>

			<div className="space-y-6">
				{cartItems.map((item) => (
					<div
						key={item.id}
						className="flex flex-col md:flex-row items-center md:items-start bg-white dark:bg-[#C584D8]/70 rounded-2xl shadow-2xl p-6 md:p-10 w-full md:w-[70%] lg:w-[60%] mx-auto transition-all duration-300"
					>
						<div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
							<img
								src={item.imgdata}
								alt={item.rname}
								className="rounded-xl w-64 h-64 object-cover shadow-md"
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
									Rs. {item.price * item.qnty}
								</span>
							</p>

							<div className="flex items-center space-x-4">
								<p className="font-semibold">Quantity:</p>
								<div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-lg">
									<button
										className="text-red-500 hover:text-red-700"
										onClick={() => handleDecrement(item)}
									>
										<RemoveIcon />
									</button>
									<span className="font-semibold text-lg text-gray-800 dark:text-white">
										{item.qnty}
									</span>
									<button
										className="text-green-500 hover:text-green-700"
										onClick={() => handleAdd(item)}
									>
										<AddIcon />
									</button>
								</div>
							</div>

							<button
								onClick={() => handleRemove(item)}
								className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md font-semibold transition-colors duration-300"
							>
								<DeleteIcon /> Remove Item
							</button>
						</div>
					</div>
				))}
			</div>

			<div className="mt-10 text-center">
				<p className="text-2xl font-bold">
					Total Price: Rs.{" "}
					<span className="text-[#843b1bff]">{totalPrice}</span>
				</p>
				<button
					onClick={() => navigate("/")}
					className="mt-4 px-6 py-2 bg-[#997b45]/70 dark:bg-[#450693]/70 dark:text-[#c19615] rounded-md dark:hover:bg-[#2e0f50]/70 transition duration-200 font-bold"
				>
					Add More Items
				</button>
			</div>
		</div>
	);
};

export default CartDetails;
