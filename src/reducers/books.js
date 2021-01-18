import {
  BOOK_FETCH_FAIL,
  START_BOOK_FETCH,
  BOOK_FETCH_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  books: [],
  wishList: [],
  error: null,
  loading: false,
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case START_BOOK_FETCH:
      return {
        ...state,
        loading: true,
      };
    case BOOK_FETCH_SUCCESS:
      return {
        ...state,
        books: action.books,
        loading: false,
      };
    case BOOK_FETCH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
