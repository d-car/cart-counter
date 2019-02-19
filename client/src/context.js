import React, { Component } from 'react'
import { gameArray, detailGame } from './data';


const GameContext = React.createContext();
//Provider
//Consumer

class GameProvider extends Component {

 constructor(props) {
   super(props);
   this.state = {
     games:gameArray,
     detailGame:detailGame
   }
 }


  handleDetail = () => {
    console.log("hello from detail");
  }
  addToCollection = () => {
    console.log("hello from addToCollection");
  }
  render() {

    return (
      <GameContext.Provider value={
        {
          ...this.state,
          handleDetail: this.handleDetail,
          addToCollection: this.addToCollection
        }
      }>
        {/* {this.props.children} */}
      </GameContext.Provider>
    )
  }
}

const GameConsumer = GameContext.Consumer

export { GameProvider, GameConsumer };