import React, { Component } from 'react';
import './App.css';
import State1 from './components/State1/State1.jsx'
import State2 from './components/State2/State2.jsx'
import { Grid, Paper, Cell } from 'react-md'


const state_style = {
  padding: "30px"
}
class App extends Component {
  render() {
    return (
      <Grid>
        <Cell styple={state_style} size={6}>
          <Paper>
            <State1 />
          </Paper>
        </Cell>
        <Cell styple={state_style} size={6}>
          <Paper>
            <State2 />
          </Paper>
        </Cell>
      </Grid>
    );
  }
}

export default App;
