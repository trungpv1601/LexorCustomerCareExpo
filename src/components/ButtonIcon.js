import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import GlobalStyles from '../constants/GlobalStyles';

export class ButtonIcon extends Component {
	render() {
		return (
			<TouchableOpacity
				onPress={this.props.onPress}
				style={[styles.buttonStyle, this.props.style]}>
				<Icon
					style={{ alignSelf: 'center' }}
					name={this.props.icon}
					size={60}
					color={this.props.iconColor || '#fff'}
				/>
				<Text style={[styles.textStyle, this.props.textStyle]}>{this.props.children}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = {
	textStyle: {
		textAlign: 'center',
		color: Colors.TEXT,
		fontSize: GlobalStyles.getAdjustedFontSize(18)
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'center',
		backgroundColor: Colors.BACKGROUND,
		borderColor: Colors.TEXT,
		padding: 10,
		marginTop: 10,
		marginBottom: 10
	}
};
