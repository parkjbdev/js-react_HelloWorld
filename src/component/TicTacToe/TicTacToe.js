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

		if(checkWinner(squares))	return;
		if(squares[squareNum] == null)
		{
			squares[squareNum] = this.state.turn;
			this.nextTurn();
		}
		else alert("안돼 돌아가");

		this.setState({squares: squares});
	}

	renderSquare(i) {
		return <Square
			value={this.state.squares[i]}
			onClick={() => this.handleClick(i)}
		/>;
	}

	render() {
		let status;
		const winner = checkWinner(this.state.squares);
		if(winner)	status = 'Winner: ' + winner;
		else	status = 'Next player: ' + this.state.turn;

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

function checkWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for(let i = 0;i < lines.length; i++)
	{
		const [a, b, c] = lines[i];
		if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])	return squares[a];
	}
	return null;
}

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [{
				squares: Array(9).fill(null),
			}],
			turn: 'X',
		}
	}
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