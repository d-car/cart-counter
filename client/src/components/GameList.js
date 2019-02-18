import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {ProductConsumer} from '../context';
import Game from './Game'
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GameList extends React.Component {
  state = {
    spacing: '16',
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            <ProductConsumer>
                {[0, 1, 2].map(value => (
                <Grid key={value.games}>
                    <Paper className={classes.paper} />
                </Grid>
                ))}
            </ProductConsumer>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

GameList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameList);
