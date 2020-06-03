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
      <div>
        <div className="sub-section">
          <div className="the-end">End</div>
          {this.subSection(0)}
          {this.subSection(0)}
          {this.subSection(0)}
          {this.subSection(0)}
          {this.subSection(0)}
          {this.subSection(0)}
          {this.subSection(0)}
        </div>
        <div className="jail">Jail</div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
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

