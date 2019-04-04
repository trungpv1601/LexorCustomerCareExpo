import { Actions } from 'react-native-router-flux';
import { SCAN_SERIAL_TO_REGISTER, REGISTER } from '../../constants/ActionTypes';

export const scanSerialToRegister = () => {
	Actions.scanSerialToRegister();
	
	return {
		type: SCAN_SERIAL_TO_REGISTER
	}
}

export const register = () => {
	Actions.register();
	
	return {
		type: REGISTER
	}
}