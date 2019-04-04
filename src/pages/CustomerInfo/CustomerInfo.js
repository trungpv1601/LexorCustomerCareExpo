import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { ButtonIcon, HeaderLogo } from '../../components';
import GlobalStyles from '../../constants/GlobalStyles';
import { Actions } from 'react-native-router-flux';

export default class CustomerInfo extends Component {

	onCorrect () {
		Actions.profileRegistered();
	}

	onInCorrect () {
		Actions.contactCustomerCare();
	}

	render() {
		return (
			<View style={styles.container}>
				<HeaderLogo style={styles.headerLogo} 
							sourceLogoHeader={require('../../images/lexor_logo_while.png')}
							sourceBackgroundHeader={require('../../images/background_header.jpg')} />
				<View style={styles.viewContent}>
					<Text style={GlobalStyles.text}>Business Name: Purely Polish Nails</Text>
					<Text style={GlobalStyles.text}>Address: 9658 Beach Blvd,</Text>
					<Text style={GlobalStyles.text}>Westminster, CA 92342</Text>
					<Text style={GlobalStyles.text}>Customer Name: Thanh Nguyen</Text>
					<Text style={GlobalStyles.text}>Business #: 714-595-6279</Text>
					<Text style={GlobalStyles.text}>Mobile #: 714-564-9865</Text>
					<Text style={GlobalStyles.text}>Email: ThanhN@PPNails.com</Text>
				</View>
				<View style={styles.viewConfirm}>
					<View style={styles.viewConfirmText}>
						<Text style={styles.confirmText}>Verify if above information is correct.</Text>
					</View>
					<View style={styles.viewConfirmButtonIcon}>
						<Grid>
						    <Col>
						    	<ButtonIcon onPress={this.onCorrect.bind(this)} icon="ios-checkmark-outline" iconColor='#42db66' textStyle={styles.buttonIconText}>Correct</ButtonIcon>
						    </Col>
						    <Col>
						    	<ButtonIcon onPress={this.onInCorrect.bind(this)} icon="ios-close-outline" iconColor='#ee284a' textStyle={styles.buttonIconText}>Incorrect</ButtonIcon>
						    </Col>
						</Grid>
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1
	},
	headerLogo: {
		flex: .4
	}, 
	viewContent: {
		flex: .3, 
		flexDirection: 'column', 
		backgroundColor: '#ffffff', 
		justifyContent: 'center', 
		alignItems: 'flex-start', 
		marginLeft: 20
	},
	viewConfirm: {
		flex: .3, 
		backgroundColor: '#383b42'
	},
	viewConfirmText: {
		flex: .2, 
		flexDirection: 'row', 
		justifyContent: 'space-around', 
		alignItems: 'center'
	},
	confirmText: {
		color: '#95989a'
	},
	viewConfirmButtonIcon: {
		flex: .8
	},
	buttonIconText: {
		fontSize: 15
	}
};