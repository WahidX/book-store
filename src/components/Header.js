import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'white',
    flexGrow: 1,
    textDecoration: 'none',
  },
  cartLink: {
    color: 'white',
  },
}));

function ButtonAppBar(props) {
  const classes = useStyles();
  let items = props.items;
  let count = items.length;

  console.log(items);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.title}>
            <Typography variant="h6">Book Store</Typography>
          </Link>

          <Link to="/cart" className={classes.cartLink}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ShoppingCartIcon />
              &nbsp;{count}
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  };
};

export default connect(mapStateToProps)(ButtonAppBar);
