import { SCAN_SERIAL_TO_REGISTER, REGISTER } from '../constants/ActionTypes';

const INITIAL_STATE = {  }

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SCAN_SERIAL_TO_REGISTER:
			return {...state};
		case REGISTER:
			return {...state};
		default:
			return state;
	}
};