import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Home from './Home';
import ScanSerialToRegister from './ScanSerialToRegister';
import CustomerInfo from './CustomerInfo';
import ContactCustomerCare from './ContactCustomerCare';
import Register from './Register';
import RegisterMoreInfo from './RegisterMoreInfo';
import ProfileRegistered from './ProfileRegistered';
import HomeWithProfile from './HomeWithProfile';
import NoHistory from './NoHistory';
import RegisterConfirmation from './RegisterConfirmation';
import CustomerProfile from './CustomerProfile';
import CustomerMessage from './CustomerMessage';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{}} hideNavBar={true}>
			<Stack key="root">
				<Scene key="home" component={Home} title="Home" />
				<Scene key="scanSerialToRegister" component={ScanSerialToRegister} title="ScanSerialToRegister" />
				<Scene key="customerInfo" component={CustomerInfo} title="CustomerInfo" />
				<Scene key="contactCustomerCare" component={ContactCustomerCare} title="ContactCustomerCare" />
				<Scene key="register" component={Register} title="Register" />
				<Scene key="registerMoreInfo" component={RegisterMoreInfo} title="RegisterMoreInfo" />
				<Scene key="profileRegistered" component={ProfileRegistered} title="ProfileRegistered" />
				<Scene key="homeWithProfile" component={HomeWithProfile} title="HomeWithProfile" />
				<Scene key="noHistory" component={NoHistory} title="NoHistory" />
				<Scene key="registerConfirmation" component={RegisterConfirmation} title="RegisterConfirmation" />
				<Scene key="customerProfile" component={CustomerProfile} title="CustomerProfile" />
				<Scene key="customerMessage" component={CustomerMessage} title="CustomerMessage" />
			</Stack>
		</Router>
	);
};

export default RouterComponent;