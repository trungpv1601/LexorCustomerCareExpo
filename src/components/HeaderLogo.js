import React, { Component } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import Colors from '../constants/Colors';

export class HeaderLogo extends Component {
	render() {
		const sourceBackgroundHeader =
			this.props.sourceBackgroundHeader || require('../images/background_header.jpg');
		const sourceLogoHeader =
			this.props.sourceLogoHeader || require('../images/lexor_logo_black.png');

		return (
			<View style={[styles.headerStyle, this.props.style]}>
				<StatusBar backgroundColor={Colors.BACKGROUND} barStyle="light-content" />
				<View style={styles.viewStyle}>
					<Image
						resizeMode="cover"
						style={styles.imageBackgroundStyle}
						source={sourceBackgroundHeader}
					/>
					<Image style={styles.imageLogo} source={sourceLogoHeader} />
				</View>
			</View>
		);
	}
}

const styles = {
	headerStyle: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: Colors.BACKGROUND,
		justifyContent: 'center'
	},
	viewStyle: {
		flex: 0.8
	},
	imageBackgroundStyle: {
		flex: 1,
		height: null,
		width: null
	},
	imageLogo: {
		position: 'absolute',
		width: 170,
		height: 50,
		marginTop: 30,
		marginLeft: 10
	}
};
