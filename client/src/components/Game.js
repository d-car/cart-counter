import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GameConsumer } from '../context'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Game extends Component {
  render() {

    
    return (
      <GameWrapper>
        <Card className='card'>
          <CardActionArea>
            <CardMedia
              className='media'
              image='non'
              title='yo'
              onClick={() => console.log('you clicked on media container')}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                yep
            </Typography>
              <Typography component='p'>
                a lot
            </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Share
          </Button>
            <Button size='small' color='primary'>
              Learn More
          </Button>
          </CardActions>
        </Card>
      </GameWrapper>

    )
  }
}

const GameWrapper = styled.div`
  .card {
    maxWidth: 345
  }
  .media {
    height: 140
  }
`