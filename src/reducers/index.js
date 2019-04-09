import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import RegisterReducer from './RegisterReducer';

export default combineReducers({
	home: HomeReducer,
	register: RegisterReducer
});
