import React, { Component } from 'react'

export class SearchForm extends Component {
    state = {
        step: 1,
        gameSearch: '',
    }

    // Show Results

    searchResults = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Back to Search

    goBack = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle Change

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    };

  render() {
      const { step } = this.state;
      const { gameSearch } = this.state;
      const values = { gameSearch }

      switch(step) {
          case 1:
            return (
                <Search 
                    searchResults={this.results}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
        case 2:
            return (
                <h1>SearchResult</h1>
            )
      }
    return (
      <div>
        
      </div>
    )
  }
}

export default SearchForm
