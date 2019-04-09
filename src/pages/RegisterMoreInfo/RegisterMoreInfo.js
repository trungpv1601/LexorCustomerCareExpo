import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';
import { BackButton } from '../../components';

export default class RegisterMoreInfo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor={Colors.BACKGROUND} barStyle="light-content" />
				<View style={styles.header}>
					<BackButton />
					<View style={styles.headerTitle}>
						<Text style={[GlobalStyles.text, styles.headerText]}>Info</Text>
					</View>
				</View>
				<View style={styles.lineFlat} />
				<View style={styles.content}>
					<Text style={[GlobalStyles.text, styles.text]}>
						Enter a registered business phone or cell phone number that is in file with
						Lexor.
					</Text>
					<Text style={[GlobalStyles.text, styles.text]}>
						Phone numbers that are not registered with Lexor will require verification
						with our customer care team.
					</Text>
					<Text style={[GlobalStyles.text, styles.text]}>
						It is important to register and your information are correct in order for
						our customer care team to can assist you promptly.
					</Text>
					<Text style={[GlobalStyles.text, styles.text]}>
						Any information that is inconsistant, please call or request a change in the
						memo box when requesting a service.
					</Text>
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
	headerTitle: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginTop: 25
	},
	headerText: {
		fontSize: GlobalStyles.getAdjustedFontSize(16)
	},
	content: {
		flex: 0.7,
		backgroundColor: Colors.BACKGROUND,

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
	}
};
