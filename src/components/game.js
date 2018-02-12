import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandomNumber, userInput, makeGuess } from '../actions';

class Game extends Component {
	componentDidMount() {
		this.props.getRandomNumber();
	}

	render() {
		return (
			<div>
				<h1>Guessing Game</h1>
				{/* <p>Random Number: {this.props.ranNum}</p> */}
				<h3>Guess a number from 1-10</h3>
				<input
					className="my-4"
					onChange={this.props.userInput}
					value={this.props.userGuess}
					type="number"
				/>
				<br />
				<button className="btn btn-outline-secondary mr-3" onClick={this.props.makeGuess}>
					Make Guess
				</button>
				<button className="btn btn-outline-success" onClick={this.props.getRandomNumber}>
					New Game
				</button>
				<p className="my-3">{this.props.msg} </p>
				{/* <button onClick={this.props.getRandomNumber}>Get Random Number</button> */}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		ranNum: state.game.randomNumber,
		userGuess: state.game.userGuess,
		msg: state.game.message
	};
}

export default connect(mapStateToProps, { getRandomNumber, userInput, makeGuess })(Game);
