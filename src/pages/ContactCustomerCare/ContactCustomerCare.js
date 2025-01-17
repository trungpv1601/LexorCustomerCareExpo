import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { ButtonIcon, HeaderLogo, LineUp } from '../../components';
import GlobalStyles from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';

export default class ContactCustomerCare extends Component {
	handlePressMessage = () => {
		Actions.customerMessage();
	};

	render() {
		return (
			<View style={styles.container}>
				<HeaderLogo
					style={styles.headerLogo}
					sourceLogoHeader={require('../../images/lexor_logo_while.png')}
					sourceBackgroundHeader={require('../../images/background_header.jpg')}
				/>
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
					<View style={styles.viewMessage}>
						<Text style={GlobalStyles.text}>
							Please call our customer care to correct your information and
							troubleshoot your product. Use this screen as reference when speaking
							with a customer care representative.
						</Text>
					</View>
					<View style={styles.viewConfirmText}>
						<Text style={GlobalStyles.text}>Send a message to customer care.</Text>
					</View>
					<View style={styles.viewConfirmButtonIcon}>
						<Grid>
							<Col>
								<ButtonIcon
									icon="ios-mail"
									textStyle={styles.buttonIconText}
									onPress={this.handlePressMessage}
									style={{ marginTop: 0, marginBottom: 0 }}>
									Message
								</ButtonIcon>
							</Col>
							<LineUp />
							<Col style={styles.viewTollFree}>
								<Text style={[GlobalStyles.text, styles.toolFreeText]}>
									Toll free:
								</Text>
								<Text style={styles.linkPhone}>1(800) 559-3630</Text>
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
		flex: 0.4
	},
	viewContent: {
		flex: 0.3,
		flexDirection: 'column',
		backgroundColor: '#ffffff',
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	viewConfirm: {
		flex: 0.4,
		backgroundColor: Colors.BACKGROUND
	},
	viewConfirmText: {
		flex: 0.2,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	confirmText: {
		color: '#95989a'
	},
	viewConfirmButtonIcon: {
		flex: 0.5
	},
	viewMessage: {
		flex: 0.4,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	linkPhone: {
		color: Colors.LINK,
		fontSize: GlobalStyles.getAdjustedFontSize(18),
		textDecorationLine: 'underline'
	},
	viewTollFree: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
		// marginTop: 40
	},
	toolFreeText: {
		marginBottom: 10
	},
	buttonIconText: {
		fontSize: GlobalStyles.getAdjustedFontSize(16)
	}
};
