import { combineReducers } from "redux";
import books from "./books";
import cart from "./cart";
import snackbar from "./snackbar";

export default combineReducers({
	books,
	cart,
	snackbar,
});
