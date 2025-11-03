import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import type { CardType } from "../types/cardType";
import Cardsdata from "./CardsData";

import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

const Cards: React.FC = () => {
	const [data, setData] = useState(Cardsdata);

	const dispatch = useDispatch();

	const send = (e: CardType) => {
		dispatch(ADD(e));
	};
	return (
		<>
			<div className="mt-11 px-6">
				<p className="text-6xl text-center font-bold font-italics dark:text-[#D78FEE] my-20">
					<span>Shop</span>
					<span className="dark:text-[#FFC400]">Stop</span>
				</p>
				<div className="flex flex-wrap justify-center gap-8">
					{data.map((d, id) => (
						<div
							key={id}
							className="transition-transform duration-300 hover:-translate-y-2"
						>
							<Card
								sx={{
									width: 300,
									boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
									borderRadius: "16px",
									transition: "all 0.3s ease",
									backgroundColor: "rgba(197, 132, 216, 0.73)",
									"&:hover": {
										boxShadow: "0 8px 20px rgba(47, 8, 59, 0.73)",
										transform: "scale(1.03)",
									},
								}}
							>
								<CardMedia
									sx={{
										height: 250,
										borderTopLeftRadius: "16px",
										borderTopRightRadius: "16px",
									}}
									image={d.imgdata}
									title={d.rname}
								/>

								<CardContent>
									<Typography
										variant="h6"
										component="div"
										sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
									>
										{d.rname}
									</Typography>

									<Typography
										variant="body2"
										sx={{
											color: "text.secondary",
											fontSize: "0.9rem",
											marginBottom: "6px",
										}}
									>
										From: <span className="text-gray-700">{d.address}</span>
									</Typography>

									<Typography
										variant="body1"
										sx={{
											color: "#843b1bff",
											fontWeight: "700",
											marginBottom: "10px",
										}}
									>
										Rs. {d.price}
									</Typography>

									<button
										className="w-full bg-amber-500 text-white py-2 rounded-md font-semibold hover:bg-amber-600 active:scale-95 transition-transform duration-200"
										onClick={() => send(d)}
									>
										Add to Cart
									</button>
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Cards;
