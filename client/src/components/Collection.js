import React, { Component } from 'react'
import Game from './Game';
import Title from './Title';
import {GameConsumer, GameProvider} from '../context';

export default class Collection extends Component {

  render() {

    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='Game' title='Collection' />
            <div className='row'>
            <GameConsumer>

              {/* this value comes from context.js. GameConsumer returns value, callback function in value to map through data array */}
              {(value)=>{
                return value.collection.map(game => {
                  return <Game key={game.id} game={game} collection={game.inCollection} />;
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
