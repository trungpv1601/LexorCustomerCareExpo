import React, { Component } from 'react';
import { View, Image, ImageBackground, StatusBar } from 'react-native';
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
					<ImageBackground
						style={styles.imageBackgroundStyle}
						source={sourceBackgroundHeader}>
						<Image style={styles.imageLogo} source={sourceLogoHeader} />
					</ImageBackground>
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
		flex: 1
	},
	imageBackgroundStyle: {
		flex: 1,
		height: '100%',
		width: '100%'
	},
	imageLogo: {
		position: 'absolute',
		width: 170,
		height: 50,
		marginTop: 30,
		marginLeft: 10
	}
};
