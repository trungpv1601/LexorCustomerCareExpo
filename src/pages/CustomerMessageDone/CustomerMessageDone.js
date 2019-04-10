import React, { Component } from 'react';
import { Text } from 'react-native';
import { LayoutMessage } from '../../layouts';
import GlobalStyles from '../../constants/GlobalStyles';

export default class CustomerMessageDone extends Component {
	render() {
		return (
			<LayoutMessage>
				<Text style={[GlobalStyles.text, styles.text]}>
					Thank you. A Lexor representative will contact you in 24 hours to assist you.
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
