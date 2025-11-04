import type { CardType } from "../../types/CardType";

export const ADD = (item: CardType) => {
	return {
		type: "ADD_CART",
		payload: item,
	};
};

export const DECREMENT = (item: CardType) => {
	return {
		type: "DECREMENT_CART",
		payload: item,
	};
};

export const REMOVE = (item: CardType) => {
	return {
		type: "REMOVE_CART",
		payload: item,
	};
};
