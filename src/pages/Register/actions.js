import { ON_TOGGLE } from '../../constants/ActionTypes';

export const setIsBack = (isBack) => {
	return {
		type: ON_TOGGLE,
		payloads: isBack
	};
};
