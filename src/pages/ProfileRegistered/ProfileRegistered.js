import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { ButtonIcon, LineFlat, LineUp, Footer } from '../../components';
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
				<LineFlat />
				<View style={styles.content}>
					<Text style={[GlobalStyles.text, styles.text]}>View here</Text>
					<Grid style={styles.viewActions}>
						<Col style={{ height: 130 }}>
							<ButtonIcon icon="ios-home" onPress={this.onButtonPressHome}>
								Home
							</ButtonIcon>
						</Col>
						<LineUp />
						<Col style={{ height: 130 }}>
							<ButtonIcon icon="md-person" onPress={this.onButtonPressProfile}>
								Profile
							</ButtonIcon>
						</Col>
					</Grid>
				</View>
				<Footer />
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
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 36
	},
	headerText: {
		fontSize: GlobalStyles.getAdjustedFontSize(20)
	},
	content: {
		flex: 1,
		backgroundColor: Colors.BACKGROUND,
		alignItems: 'center',
		marginLeft: 20,
		marginRight: 20
	},
	viewActions: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: GlobalStyles.getAdjustedFontSize(18),
		marginTop: 10
	}
};
