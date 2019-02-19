import React, { Component } from 'react'
import Game from './Game';
import { GameProvider, GameConsumer } from '../context';

export default class GameList extends Component {

  render() {

    // console.log(this.state.games)

    return (
      <React.Fragment>
        <div className='container'>
          <GameConsumer>
            {/* this value comes from context.js. gameConsumer returns value, callback function in value to map through data array */}
            {(value) => {
              return value.games.map(game => {
                return <Game key={game.id} game={game} />;
              })
            }}
          </GameConsumer>
        </div>
      </React.Fragment>
    )
  }
}
