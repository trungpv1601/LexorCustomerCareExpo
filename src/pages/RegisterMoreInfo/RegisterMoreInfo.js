import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { LayoutMessage } from '../../layouts';
import GlobalStyles from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';
import { BackButton, LineFlat } from '../../components';

export default class RegisterMoreInfo extends Component {
	render() {
		return (
			<LayoutMessage showBack hideActions>
				<Text style={[GlobalStyles.text, styles.text]}>
					Enter a registered business phone or cell phone number that is in file with
					Lexor.
				</Text>
				<Text style={[GlobalStyles.text, styles.text]}>
					Phone numbers that are not registered with Lexor will require verification with
					our customer care team.
				</Text>
				<Text style={[GlobalStyles.text, styles.text]}>
					It is important to register and your information are correct in order for our
					customer care team to can assist you promptly.
				</Text>
				<Text style={[GlobalStyles.text, styles.text]}>
					Any information that is inconsistant, please call or request a change in the
					memo box when requesting a service.
				</Text>
			</LayoutMessage>
		);
	}
}

const styles = {
	text: {
		fontSize: GlobalStyles.getAdjustedFontSize(18),
		marginTop: 10
	}
};
