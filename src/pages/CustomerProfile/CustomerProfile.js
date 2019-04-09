import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { ButtonIcon, Link } from '../../components';
import GlobalStyles from '../../constants/GlobalStyles';

export default class CustomerProfile extends Component {
	callCustomerCare = (url) => {
		// Linking.canOpenURL(url).then((supported) => {
		// 	if (supported) {
		// 		Linking.openURL(url);
		// 	} else {
		// 		console.log("Don't know how to open URI: " + url);
		// 	}
		// });
	};

	handlePressHome = () => {
		Actions.homeWithProfile();
	};

	handlePressHistory = () => {
		Actions.noHistory();
	};

	render() {
		return (
			<View style={styles.container}>
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
					<View style={styles.addPhoto}>
						<TouchableOpacity style={styles.imageContainer}>
							<Icon
								style={styles.image}
								name="ios-share"
								size={30}
								color={Colors.BLUE}
							/>
							<Text style={GlobalStyles.text}>Add photo</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.viewConfirmButtonIcon}>
						<Grid>
							<Col>
								<ButtonIcon icon="ios-home" onPress={this.handlePressHome}>
									Home
								</ButtonIcon>
							</Col>
							<View style={styles.lineUp} />
							<Col>
								<ButtonIcon icon="ios-list-box" onPress={this.handlePressHistory}>
									History
								</ButtonIcon>
							</Col>
						</Grid>
					</View>
				</View>
				<View style={styles.footer}>
					<Text style={[GlobalStyles.text, styles.footerText]}>
						Questions? Click bellow.{' '}
						<Icon name="ios-information-circle-outline" size={25} color={Colors.LINK} />
					</Text>
					<Link
						onPress={this.callCustomerCare('tel:9876543210')}
						style={styles.linkPhone}>
						1(800) 559-3630
					</Link>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#ffffff'
	},
	headerLogo: {
		flex: 0.4
	},
	viewContent: {
		flex: 0.35,
		flexDirection: 'column',
		backgroundColor: '#ffffff',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginLeft: 20,
		marginTop: 30
	},
	viewConfirm: {
		flex: 0.5,
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
		flex: 0.8
	},
	buttonIconText: {
		fontSize: GlobalStyles.getAdjustedFontSize(15)
	},
	lineUp: {
		backgroundColor: Colors.BACKGROUND_LINE,
		height: 100,
		width: 1,
		marginTop: 20,
		marginBottom: 10
	},
	footer: {
		flex: 0.2,
		backgroundColor: Colors.BACKGROUND,
		alignItems: 'center'
	},
	footerText: {
		fontSize: GlobalStyles.getAdjustedFontSize(14),
		marginBottom: 10
	},
	linkPhone: {
		fontSize: GlobalStyles.getAdjustedFontSize(18)
	},
	addPhoto: {
		flex: 0.2,
		alignItems: 'center'
	},
	imageContainer: {
		height: 100,
		width: 100,
		borderRadius: 64,
		marginTop: -50,
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: Colors.TEXT
	},
	image: {}
};
