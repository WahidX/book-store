import axios from 'axios';

import {
  START_BOOK_FETCH,
  BOOK_FETCH_SUCCESS,
  BOOK_FETCH_FAIL,
} from './actionTypes';

import { setSnackBar } from './snackbar';
import { APIurls } from '../helpers/urls';

// Book fetching actions
export function startBookFetch() {
  return {
    type: START_BOOK_FETCH,
  };
}

export function bookFetchFailed(errorMessage) {
  return {
    type: BOOK_FETCH_FAIL,
    error: errorMessage,
  };
}

export function bookFetchSuccess(books) {
  return {
    type: BOOK_FETCH_SUCCESS,
    books,
  };
}

export function fetchBooks() {
  return (dispatch) => {
    dispatch(startBookFetch());

    var config = {
      method: 'get',
      url: APIurls.fetchBooks(),
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        // dispatch(bookFetchSuccess(response.data))
        dispatch(setSnackBar('success', 'Fetched books!', 3000));
      })
      .catch((error) => {
        console.log(error);
        // dispatch(bookFetchFailed(error));
        dispatch(setSnackBar('error', error, 3000));
      });
  };
}
