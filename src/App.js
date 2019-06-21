import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
function App() {
  return (
    <div className="App">
      <div className="main">
        <Game />
      </div>
    </div>
  );
}
class Game extends React.Component{
  render() {
    return(
      <Board />
    );
  }

}

class Board extends React.Component {
  render() {
    return(
      <div className="board">
        <div className="board-row">
          <Square value={1}/>
          <Square value={2}/>
          <Square value={3}/>
        </div>
        <div className="board-row">
          <Square value={4}/>
          <Square value={5}/>
          <Square value={6}/>
        </div>
        <div className="board-row">
          <Square value={7}/>
          <Square value={8}/>
          <Square value={9}/>
        </div>

      </div>
    );
  }

}
class Square extends React.Component {
  render() {
    return(
        <button className="square">{this.props.value} </button>
      );
  }

}

export default App;
