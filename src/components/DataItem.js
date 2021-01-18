import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '5px 20px',
    borderRadius: '5px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  header: {
    display: 'flex',
    marginBottom: '10px',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    marginLeft: '10px',
  },
  pos: {
    marginBottom: 12,
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

function DataItem(props) {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  let { title, authors } = props.book;

  let countChange = () => {
    console.log(count);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {authors}
        </Typography>

        <Typography className={classes.content} color="textPrimary">
          {title}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <div></div>

        <div className={classes.rightBtns}>
          <IconButton aria-label="add" onClick={() => setCount(count + 1)}>
            <AddIcon value="add" />
          </IconButton>
          <span>{count}</span>
          <IconButton
            aria-label="del"
            onClick={() => count && setCount(count - 1)}
          >
            <RemoveIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(DataItem);
