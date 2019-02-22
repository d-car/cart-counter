import React, { Component } from 'react'
import { gamesDisplay, detailGame } from './data';


const GameContext = React.createContext();
//Provider
//Consumer

class GameProvider extends Component {

  state = {
    games:gamesDisplay, 
    detailGame:detailGame
  }
  handleDetail = () => {
    console.log("hello from detail");
  }
  addToCart = () => {
    console.log("hello from addToCart");
  }
  render() {
    return (
      <GameContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
          {this.props.children}
      </GameContext.Provider>
        
      
    )
  }
}

const GameConsumer = GameContext.Consumer

export { GameProvider,GameConsumer };