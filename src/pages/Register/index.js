import Register from './Register';
import { connect } from 'react-redux';
import { setIsBack } from './actions';

const mapStateToProps = ({ register }) => {
	const { isBack } = register;
	return {
		isBack
	};
};

export default connect(
	mapStateToProps,
	{ setIsBack }
)(Register);
