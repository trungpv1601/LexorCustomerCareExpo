import React from 'react';
import { View } from 'react-native';
import Colors from '../constants/Colors';

export const LineFlat = (props) => {
	const height = {
		height: props.size || 1
	};
	return <View style={[styles.lineFlat, height]} />;
};

const styles = {
	lineFlat: {
		backgroundColor: Colors.BACKGROUND_LINE,
		width: null,
		margin: 30,
		marginTop: 10,
		marginBottom: 0
	}
};
