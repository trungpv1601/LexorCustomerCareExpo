import { connect } from 'react-redux';
import CustomerProfile from './CustomerProfile';
import { homeWithProfile, noHistory } from './actions';

const mapStateToProps = (state) => ({});

export default connect(
	null,
	{ homeWithProfile, noHistory }
)(CustomerProfile);
