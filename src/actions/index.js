import types from './types';

export function getRandomNumber() {
	return {
		type: types.GET_RANDOM_NUMBER,
		payload: Math.floor(Math.random() * 10) + 1
	};
}

export function userInput(event) {
	return {
		type: types.USER_INPUT,
		payload: event.target.value
	};
}

export function makeGuess() {
	return {
		type: types.MAKE_GUESS
	};
}
