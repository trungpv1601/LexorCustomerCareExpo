import { ON_TOGGLE } from '../constants/ActionTypes';

const INITIAL_STATE = { isBack: false }

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ON_TOGGLE:
			return {...state, isBack: action.payloads};
		default:
			return state;
	}
};