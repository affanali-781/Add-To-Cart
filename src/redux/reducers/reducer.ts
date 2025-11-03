import type { CardType } from "../../types/cardType";

interface CartState {
	carts: CardType[];
}

const initialState: CartState = {
	carts: [],
};

interface Action {
	type: string;
	payload: CardType;
}

export const cartreducer = (
	state = initialState,
	action: Action
): CartState => {
	switch (action.type) {
		case "ADD_CART":
			// Check if item exists
			const exist = state.carts.find((item) => item.id === action.payload.id);
			if (exist) {
				return {
					...state,
					carts: state.carts.map((item) =>
						item.id === action.payload.id
							? { ...item, qnty: (item.qnty || 1) + 1 }
							: item
					),
				};
			} else {
				return {
					...state,
					carts: [...state.carts, { ...action.payload, qnty: 1 }],
				};
			}

		case "DECREMENT_CART":
			const decExist = state.carts.find(
				(item) => item.id === action.payload.id
			);
			if (decExist) {
				if (decExist.qnty && decExist.qnty > 1) {
					return {
						...state,
						carts: state.carts.map((item) =>
							item.id === action.payload.id
								? { ...item, qnty: item.qnty! - 1 }
								: item
						),
					};
				} else {
					// Remove if quantity is 1
					return {
						...state,
						carts: state.carts.filter((item) => item.id !== action.payload.id),
					};
				}
			}
			return state;

		case "REMOVE_CART":
			return {
				...state,
				carts: state.carts.filter((item) => item.id !== action.payload.id),
			};

		default:
			return state;
	}
};
