import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Actions
import { fetchBooks } from '../actions/books';
// Components
import {
  ButtonAppBar,
  Home,
  Cart,
  Footer,
  Page404,
  CustomizedSnackbars,
} from './';

function App(props) {
  useEffect(() => {
    props.dispatch(fetchBooks());
  }, []);

  if (props.books.loading) {
    return <h1>Loading</h1>;
  }

  return (
    <Router>
      <ButtonAppBar />
      <CustomizedSnackbars />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Page404} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

let mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(App);
