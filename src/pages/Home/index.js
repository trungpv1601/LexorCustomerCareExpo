import { connect } from 'react-redux';
import Home from './Home';
import { scanSerialToRegister, register } from './actions';

const mapStateToProps = (state) => ({});

export default connect(
	null,
	{ scanSerialToRegister, register }
)(Home);
