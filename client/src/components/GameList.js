import React, { Component } from 'react'
import Game from './Game';
import Title from './Title';
import {GameConsumer, GameProvider} from '../context';

export default class GameList extends Component {

  render() {

    // console.log(this.state.games)

    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='Search' title='Games' />
            <div className='row'>
            <GameConsumer>

              {/* this value comes from context.js. GameConsumer returns value, callback function in value to map through data array */}
              {(value)=>{
                return value.games.map( game => {
                  return <Game key={game.id} game={game} />;
                })
              }}
            </GameConsumer>
            </div>;
          </div>;
        </div>;
      </React.Fragment>
    )
  }
}
