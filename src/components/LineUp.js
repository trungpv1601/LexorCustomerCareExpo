import React from 'react';
import { View } from 'react-native';
import Colors from '../constants/Colors';

export const LineUp = (props) => {
	const width = {
		width: props.size || 1
	};
	return <View style={[styles.lineUp, width]} />;
};

const styles = {
	lineUp: {
		backgroundColor: Colors.BACKGROUND_LINE,
		height: 70,
		marginTop: 20,
		marginBottom: 10
	}
};
