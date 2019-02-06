import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Search extends Component {

    continue = e => {
        e.preventDefault();
        this.props.showResults();
    }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Cart-Counter" />
            <TextField
                hintText="Search for Game"
                floatingLabelText="Game"
                onChange={handleChange('gameSearch')}
                defaultValue={values.continue}
            />
            <br/>
            <RaisedButton
                label="Search"
                primary={true}
                style={styles.button}
                onClick={this.continue}
            />
          </React.Fragment>
      </MuiThemeProvider>
    
    )
  }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Search
