import React, { Component } from 'react';
import { Text, View } from 'react-native';
import GlobalStyles from '../constants/GlobalStyles';
import Colors from '../constants/Colors';

export class Footer extends Component {
	render() {
		return (
			<View style={styles.footer}>
				<Text style={[GlobalStyles.text, styles.footerText]}>Questions? Click bellow.</Text>
				<Text style={styles.linkPhone}>1(800) 559-3630</Text>
			</View>
		);
	}
}
const styles = {
	footer: {
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingTop: 10,
		paddingBottom: 20,
		backgroundColor: Colors.BACKGROUND
	},
	footerText: {
		fontSize: GlobalStyles.getAdjustedFontSize(20),
		marginBottom: 10
	},
	linkPhone: {
		color: Colors.LINK,
		fontSize: GlobalStyles.getAdjustedFontSize(24),
		textDecorationLine: 'underline'
	}
};
