import types from '../actions/types';

const DEFAULT_STATE = {
	randomNumber: null,
	userGuess: '',
	numberOfGuesses: 0,
	message: ''
};

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		default:
			return state;
	}
}
