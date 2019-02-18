import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ProductConsumer } from '../context';
import storeProdcuts from '../data'


export default class Game extends Component {

  render() {

    const { id, title, img, price, inCart } = this.props.product;

    return (
      <div className="gameWrapper">
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <Card className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Game"
                  className="media"
                  height="140"
                  image={img}
                  title="Game"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                  </Typography>
                  <Typography component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                  </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}