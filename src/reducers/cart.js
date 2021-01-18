import {} from '../actions/actionTypes';

const initialState = {
  items: [
    {
      book: {},
      qty: 0,
    },
  ],
  error: null,
  inProgress: false,
  total: 0,
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
