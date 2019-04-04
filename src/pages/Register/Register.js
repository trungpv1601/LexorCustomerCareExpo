import React, { Component } from 'react';
import { View, Text, TextInput, StatusBar, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button, BackButton } from '../../components';
import GlobalStyles from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';

export default class Register extends Component {

	onToggle (toggleState) {
		this.props.setIsBack(toggleState);
	}

	renderBack () {
		if (!this.props.isBack) {
			return (
				<BackButton />
			);
		}
	}

	onSend () {
		dismissKeyboard();
		Actions.customerInfo();
	}

	onRegisterMoreInfo () {
		Actions.registerMoreInfo();
	}

	render() {

		return (
			<TouchableWithoutFeedback style={{flex:1}} onPress={dismissKeyboard}>
				<View style={styles.container}>
					<StatusBar
					backgroundColor={Colors.BACKGROUND}
					barStyle="light-content"
					/>
					<View style={styles.header}>
						{this.renderBack()}
						<View style={styles.headerTitle}>
							<Text style={[GlobalStyles.text, styles.headerText]}>Registration </Text>
							<TouchableWithoutFeedback onPress={this.onRegisterMoreInfo.bind(this)}>
									<Icon name='ios-information-circle-outline' size={25} color='#007aff' />
							</TouchableWithoutFeedback>
						</View>
					</View>
					<View style={styles.lineFlat} />
					<View style={styles.content}>
						<Text style={[GlobalStyles.text, styles.text]}>Enter the salon address in the search bar.</Text>
						<TextInput
							style={styles.textInput}
							placeholder={'Address'}
							placeholderTextColor={Colors.TEXT}
							selectionColor={Colors.TEXT}
						/>
						<Button buttonStyle={styles.buttonSend} onPress={this.onSend.bind(this)}>Send</Button>
					</View>
					<View style={styles.footer}>
						<Text style={[GlobalStyles.text, styles.footerText]}>Questions? Click bellow.</Text>
						<Text style={styles.linkPhone}>1(800) 559-3630</Text>
					</View>
					<KeyboardSpacer onToggle={this.onToggle.bind(this)}/>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: Colors.BACKGROUND,
	},
	header: {
		flex: .15,
		backgroundColor: Colors.BACKGROUND,
		flexDirection: 'column', 
		justifyContent: 'flex-end', 
		alignItems: 'center'
	},
	headerTitle: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end', 
		alignItems: 'center',
		marginTop: 25
	},
	headerText: {
		fontSize: 16
	},
	content: {
		flex: .7,
		backgroundColor: Colors.BACKGROUND,
		alignItems: 'center',
		marginLeft: 20,
		marginRight: 20
	},
	footer: {
		flex: .15,
		backgroundColor: Colors.BACKGROUND,
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	footerText: {
		fontSize: 14,
		marginBottom: 10
	},
	text: {
		fontSize: 16
	},
	textInput: {
		height: 40, 
		borderColor: Colors.TEXT, 
		borderWidth: 1, 
		borderRadius: 3, 
		marginTop: 10,
		padding: 10,
		fontSize: 16,
		color: Colors.TEXT, 
	},
	linkPhone: {
		color: '#007aff',
		fontSize: 18,
		textDecorationLine: 'underline'
	},
	lineFlat: {
		backgroundColor: '#2d2e2e',
		height: 1,
    	width: null	,
    	margin: 20,
    	marginTop: 10,
	},
	buttonSend: {
		width: 90, 
		alignSelf: 'center', 
		marginTop: 20
	}
};