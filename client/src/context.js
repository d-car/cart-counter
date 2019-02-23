import React, { Component } from 'react'
import { gamesDisplay, detailGame } from './data';


const GameContext = React.createContext();
//Provider
//Consumer

class GameProvider extends Component {

  state = {
    games: [],
    detailGame: detailGame,
    collection: [],
    modalOpen: true,
  };

  componentDidMount() {
    this.setGames();
  }

  // this copies values of the nested objects in data.js and 
  // sets the state with the values instead of manipulating data.js values

  setGames = () => {
    let games = [];
    gamesDisplay.forEach(item => {
      const singleItem = { ...item };
      games = [...games, singleItem];
    })

    this.setState(() => {
      return { games }
    })
  }
  // if the item id in data.js matches the id being passed here,,return that game
  getGame = (id) => {
    const game = this.state.games.find(game => game.id === id);
    return game;
  }

  // Grab and return selected game then reset the state to swap in selected game id in detailGame
  handleDetail = (id) => {
    const game = this.getGame(id);
    this.setState(() => {
      return { detailGame: game }
    });
  };

  addToCollection = (id) => {
    let tempGames = [...this.state.games];
    const index = tempGames.indexOf(this.getGame(id));
    const game = tempGames[index];
    game.inCollection = true;
    game.count = 1;
    const price = game.price;
    game.total = price;
    this.setState(() => {
      return {games: tempGames, collection: [...this.state.collection, game]};
    },
    () => {
      console.log(this.state);
    });



  };


  render() {
    return (
      <GameContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCollection: this.addToCollection
      }}>
        {this.props.children}
      </GameContext.Provider>


    )
  }
}

const GameConsumer = GameContext.Consumer

export { GameProvider, GameConsumer };