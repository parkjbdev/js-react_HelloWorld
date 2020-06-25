import React from 'react';
import './TicTacToe.css';

class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
		}
	}
	render() {
		return (
			<button
				className="square"
				onClick={() => {this.props.onClick()}}
			>
				{this.props.value}
			</button>
		);
	}
}

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			turn: 'X',
		}
	}

	nextTurn() {
		if(this.state.turn === 'X')	this.setState({turn: 'O'});
		else if(this.state.turn === 'O')	this.setState({turn: 'X'});
	}

	handleClick(squareNum) {
		const squares = this.state.squares.slice();
		squares[squareNum] = this.state.turn;
		this.nextTurn();
		this.setState({squares: squares});
	}

	renderSquare(i) {
		return <Square
			value={this.state.squares[i]}
			onClick={() => this.handleClick(i)}
		/>;
	}

	render() {
		let status = 'Next player: ' + this.state.turn;

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
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
				<div>
					<a href="https://ko.reactjs.org/tutorial/tutorial.html#setup-option-1-write-code-in-the-browser">자습서: React 시작하기</a>
				</div>
			</div>
		);
	}
}

export default Game;