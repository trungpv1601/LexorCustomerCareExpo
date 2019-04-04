import { Actions } from 'react-native-router-flux';
import { CALL_CUSTOMER_CARE } from '../../constants/ActionTypes';

export const callCustomerCare = (text) => {
	
	return {
		type: CALL_CUSTOMER_CARE,
		payload: text
	}
}