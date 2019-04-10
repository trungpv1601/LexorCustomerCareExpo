import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	StatusBar,
	KeyboardAvoidingView,
	TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { Actions } from 'react-native-router-flux';
import { Button, BackButton, LineFlat, Footer } from '../../components';
import GlobalStyles from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';

export default class Register extends Component {
	onToggle = (toggleState) => {
		this.props.setIsBack(toggleState);
	};

	renderBack() {
		if (!this.props.isBack) {
			return <BackButton />;
		}
	}

	onSend = () => {
		dismissKeyboard();
		Actions.customerInfo();
	};

	onRegisterMoreInfo = () => {
		Actions.registerMoreInfo();
	};

	render() {
		return (
			<TouchableWithoutFeedback onPress={dismissKeyboard}>
				<View style={styles.container}>
					<StatusBar backgroundColor={Colors.BACKGROUND} barStyle="light-content" />
					<View style={styles.header}>
						{this.renderBack()}
						<View style={styles.headerTitle}>
							<Text style={[GlobalStyles.text, styles.headerText]}>Registration</Text>
							<TouchableWithoutFeedback onPress={this.onRegisterMoreInfo}>
								<Icon
									name="ios-information-circle-outline"
									size={25}
									color={Colors.LINK}
								/>
							</TouchableWithoutFeedback>
						</View>
					</View>
					<LineFlat />
					<KeyboardAvoidingView style={styles.content} behavior="padding" enabled>
						<Text style={[GlobalStyles.text, styles.text]}>
							Enter the salon address in the search bar.
						</Text>
						<TextInput
							style={styles.textInput}
							placeholder={'Address'}
							placeholderTextColor={Colors.TEXT}
							selectionColor={Colors.TEXT}
						/>
						<Button buttonStyle={styles.buttonSend} onPress={this.onSend}>
							Send
						</Button>
					</KeyboardAvoidingView>
					<Footer />
					<KeyboardSpacer onToggle={this.onToggle} />
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: Colors.BACKGROUND
	},
	header: {
		backgroundColor: Colors.BACKGROUND,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	headerTitle: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginTop: 25
	},
	headerText: {
		fontSize: GlobalStyles.getAdjustedFontSize(20),
		padding: 10
	},
	content: {
		flex: 1,
		backgroundColor: Colors.BACKGROUND,
		alignItems: 'center',
		marginLeft: 20,
		marginRight: 20,
		marginTop: 20
	},
	text: {
		fontSize: GlobalStyles.getAdjustedFontSize(18)
	},
	textInput: {
		maxWidth: '95%',
		minWidth: '95%',
		height: 40,
		borderColor: Colors.TEXT,
		borderWidth: 1,
		borderRadius: 3,
		marginTop: 10,
		padding: 10,
		fontSize: GlobalStyles.getAdjustedFontSize(18),
		color: Colors.TEXT
	},
	buttonSend: {
		width: 120,
		alignSelf: 'center',
		marginTop: 20
	}
};
