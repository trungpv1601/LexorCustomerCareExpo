import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LayoutMessage } from '../../layouts';
import GlobalStyles from '../../constants/GlobalStyles';

export default class NoHistory extends Component {
	handlePressHome = () => {
		Actions.homeWithProfile();
	};

	render() {
		return (
			<LayoutMessage onPressHome={this.handlePressHome} hideTitle>
				<Text style={[GlobalStyles.text, styles.text]}>Sorry you no have history.</Text>
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
