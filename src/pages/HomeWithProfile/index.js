import { connect } from 'react-redux';
import HomeWithProfile from './HomeWithProfile';
import { scanSerialToRegister, register } from './actions';

const mapStateToProps = (state) => ({});

export default connect(
	null,
	{ scanSerialToRegister, register }
)(HomeWithProfile);
