import { Actions } from 'react-native-router-flux';
import { HOME_WITH_PROFILE, CUSTOMER_PROFILE } from '../../constants/ActionTypes';

export const homeWithProfile = () => {
	Actions.homeWithProfile();

	return {
		type: HOME_WITH_PROFILE
	};
};

export const customerProfile = () => {
	Actions.customerProfile();

	return {
		type: CUSTOMER_PROFILE
	};
};
