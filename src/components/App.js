import React, { useEffect } from 'react';

// fetching test
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/books';

function App(props) {
  useEffect(() => {
    props.dispatch(fetchBooks());
  }, []);

  return (
    <div>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(App);
