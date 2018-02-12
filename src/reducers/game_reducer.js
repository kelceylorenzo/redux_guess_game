import types from '../actions/types';

const DEFAULT_STATE = {
	randomNumber: null,
	userGuess: '',
	numberOfGuesses: 0,
	message: '',
	win: false
};

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.GET_RANDOM_NUMBER:
			return {
				...state,
				randomNumber: action.payload,
				userGuess: '',
				numberOfGuesses: 0,
				message: '',
				win: false
			};
		case types.USER_INPUT:
			if (state.win === true) {
				message = 'Start a New Game';

				return {
					...state,
					userGuess: '',
					message
				};
			}

			return {
				...state,
				userGuess: action.payload
			};
		case types.MAKE_GUESS:
			let message = 'You Got It!';

			if (state.win === true) {
				message = 'Start a New Game';

				return {
					...state,
					userGuess: '',
					message
				};
			}

			if (state.randomNumber > state.userGuess) {
				message = 'Too Low!';
			} else if (state.randomNumber < state.userGuess) {
				message = 'Too High!';
			} else {
				return {
					...state,
					userGuess: '',
					message,
					numberOfGuesses: state.numberOfGuesses + 1,
					win: true
				};
			}

			return {
				...state,
				userGuess: '',
				message,
				numberOfGuesses: state.numberOfGuesses + 1
			};
		default:
			return state;
	}
}
