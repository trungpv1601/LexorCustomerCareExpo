import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

export class Link extends Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<Text style={[styles.linkPhone, this.props.style]}>{this.props.children}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = {
	linkPhone: {
		color: Colors.LINK,
		textDecorationLine: 'underline'
	}
};
