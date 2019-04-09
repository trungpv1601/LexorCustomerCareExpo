import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import { ButtonIcon } from '../../components';
import GlobalStyles from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';

export default class ProfileRegistered extends Component {
	onButtonPressHome = () => {
		this.props.homeWithProfile();
	};

	onButtonPressProfile = () => {
		this.props.customerProfile();
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor={Colors.BACKGROUND} barStyle="light-content" />
				<View style={styles.header}>
					<Text style={[GlobalStyles.text, styles.headerText]}>
						Thank you for registering.
					</Text>
					<Text style={[GlobalStyles.text, styles.headerText]}>
						Please see bellow to get started.
					</Text>
				</View>
				<View style={styles.lineFlat} />
				<View style={styles.content}>
					<Text style={[GlobalStyles.text, styles.text]}>View here</Text>
					<Grid>
						<Col style={{ height: 130 }}>
							<ButtonIcon icon="ios-home" onPress={this.onButtonPressHome}>
								Home
							</ButtonIcon>
						</Col>
						<View style={styles.lineUp} />
						<Col style={{ height: 130 }}>
							<ButtonIcon icon="md-person" onPress={this.onButtonPressProfile}>
								Profile
							</ButtonIcon>
						</Col>
					</Grid>
				</View>
				<View style={styles.footer}>
					<Text style={[GlobalStyles.text, styles.footerText]}>
						Questions? Click bellow.
					</Text>
					<Text style={styles.linkPhone}>1(800) 559-3630</Text>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: Colors.BACKGROUND
	},
	header: {
		flex: 0.15,
		backgroundColor: Colors.BACKGROUND,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	headerText: {
		fontSize: GlobalStyles.getAdjustedFontSize(16)
	},
	content: {
		flex: 0.7,
		backgroundColor: Colors.BACKGROUND,
		alignItems: 'center',
		marginLeft: 20,
		marginRight: 20
	},
	footer: {
		flex: 0.15,
		backgroundColor: Colors.BACKGROUND,
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	footerText: {
		fontSize: GlobalStyles.getAdjustedFontSize(14),
		marginBottom: 10
	},
	text: {
		fontSize: GlobalStyles.getAdjustedFontSize(16),
		marginTop: 10
	},
	textInput: {
		height: 40,
		borderColor: Colors.TEXT,
		borderWidth: 1,
		borderRadius: 3,
		marginTop: 10,
		padding: 10,
		fontSize: GlobalStyles.getAdjustedFontSize(16),
		color: Colors.TEXT
	},
	linkPhone: {
		color: Colors.LINK,
		fontSize: GlobalStyles.getAdjustedFontSize(18),
		textDecorationLine: 'underline'
	},
	lineFlat: {
		backgroundColor: Colors.BACKGROUND_LINE,
		height: 1,
		width: null,
		margin: 20,
		marginTop: 10
	},
	lineUp: {
		backgroundColor: Colors.BACKGROUND_LINE,
		height: 100,
		width: 1,
		marginTop: 20,
		marginBottom: 10
	}
};
