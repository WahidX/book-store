import React from 'react';
import { connect } from 'react-redux';
import { DataItem } from './';

function DataTable(props) {
  let books = props.books;

  books = books.splice(0, 10);

  return (
    <div>
      {books.map((book) => (
        <DataItem book={book} />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    books: state.books.books,
  };
};

export default connect(mapStateToProps)(DataTable);
