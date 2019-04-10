import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { ButtonIcon, LineUp, Footer } from '../../components';
import GlobalStyles from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';

export default class CustomerProfile extends Component {
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
					<View style={{ flex: 1 }}>
						<Grid style={styles.viewConfirmButtonIcon}>
							<Col style={{ height: 130 }}>
								<ButtonIcon icon="ios-home" onPress={this.handlePressHome}>
									Home
								</ButtonIcon>
							</Col>
							<LineUp />
							<Col style={{ height: 130 }}>
								<ButtonIcon icon="ios-list-box" onPress={this.handlePressHistory}>
									History
								</ButtonIcon>
							</Col>
						</Grid>
					</View>
				</View>
				<Footer />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#ffffff'
	},
	viewContent: {
		flex: 0.3,
		flexDirection: 'column',
		backgroundColor: '#ffffff',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		margin: 20
	},
	viewConfirm: {
		flex: 0.7,
		backgroundColor: Colors.BACKGROUND
	},
	viewConfirmButtonIcon: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	addPhoto: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainer: {
		height: 120,
		width: 120,
		borderRadius: 60,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: Colors.TEXT
	}
};
