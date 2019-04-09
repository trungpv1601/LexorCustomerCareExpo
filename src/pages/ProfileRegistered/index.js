import { connect } from 'react-redux';
import ProfileRegistered from './ProfileRegistered';
import { homeWithProfile, customerProfile } from './actions';

const mapStateToProps = (state) => ({});

export default connect(
	null,
	{ homeWithProfile, customerProfile }
)(ProfileRegistered);
