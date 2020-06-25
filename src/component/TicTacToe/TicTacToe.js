import React from 'react';
import './TicTacToe.css';

function Square(props) {
	return (
		<button
			className="square"
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

class Board extends React.Component {
	renderSquare(i) {
		return <Square
			value={this.props.squares[i]}
			onClick={() => this.props.onClick(i)}
		/>;
	}

	render() {
		return (
			<div>
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
function checkFull(squares) {
	let cnt = 0;
	for(let i = 0;i < squares.length;i++)
		if(squares[i])	cnt++;

	if(cnt === squares.length)	return true;
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

	nextTurn() {
		if(this.state.turn === 'X')	this.setState({turn: 'O'});
		else if(this.state.turn === 'O')	this.setState({turn: 'X'});
		this.setState({turnCount: this.state.turnCount + 1});
	}

	handleClick(squareID) {
		const history = this.state.history;
		const current = history[history.length - 1];
		const squares = current.squares.slice();

		if(checkWinner(squares) || checkFull(squares))	return;

		if(!squares[squareID]) {
			squares[squareID] = this.state.turn;
			this.nextTurn();
			this.setState({
				history: history.concat([{
					squares: squares
				}]),
			});
		}
		else	alert("안돼여");

		const winner = checkWinner(squares);
		if(winner)	alert('Winner: ' + winner);
		else if(checkFull(squares))	alert("Draw");
	}

	render() {
		const history = this.state.history;
		const current = history[history.length - 1];
		const winner = checkWinner(current.squares);

		let status;
		if(winner)	status = 'Winner: ' + winner;
		else status = 'Next player: ' + this.state.turn;
		if(checkFull(current.squares))	status = 'Draw!';

		return (
			<div className="game">
				<div className="game-board">
					<Board
						squares={current.squares}
						onClick={(i) => this.handleClick(i)}
					/>
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

// https://ko.reactjs.org/tutorial/tutorial.html#setup-option-1-write-code-in-the-browser

export default Game;