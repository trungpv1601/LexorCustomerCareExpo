import { Actions } from 'react-native-router-flux';
import { CALL_CUSTOMER_CARE } from '../../constants/ActionTypes';

export const homeWithProfile = () => {
	return {
		type: HOME_WITH_PROFILE
	};
};

export const noHistory = () => {
	return {
		type: NO_HISTORY
	};
};
