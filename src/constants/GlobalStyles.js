import { Dimensions } from 'react-native';
import Colors from './Colors';

const { width } = Dimensions.get('window');

getAdjustedFontSize = (size) => {
	return (parseInt(size) * width * (1.8 - 0.002 * width)) / 400;
};

export default (GlobalStyles = {
	text: {
		color: Colors.TEXT,
		marginLeft: 10,
		fontSize: getAdjustedFontSize(16)
	},
	getAdjustedFontSize
});
