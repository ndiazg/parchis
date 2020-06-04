import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  subSection(i) {
    return (
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
    )
  }

  render() {
    return (
      <div class={this.props.bg}>
        <div className="sub-left">
          <div className="the-end"></div>
          {this.subSection(0)}
          {this.subSection(0)}
          {this.subSection(0)}
          {this.subSection(0)}
          {this.subSection(0)}
          {this.subSection(0)}
          {this.subSection(0)}
          {this.subSection(0)}
        </div>
        <div className="sub-right">
          <div className="jail"></div>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board game-top">
          <Board bg="player1"/>
          <Board bg="player2"/>
          <Board bg="player3"/>
        </div>
        <div className="game-board game-bottom">
          <Board bg="player4"/>
          <Board bg="player5"/>
          <Board bg="player6"/>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

