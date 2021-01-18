import {} from "../actions/actionTypes";

const initialState = {
	books: {},
	error: null,
	inProgress: false,
};

export default function books(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
