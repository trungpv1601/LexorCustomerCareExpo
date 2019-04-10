import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, StatusBar } from 'react-native';
import Colors from '../constants/Colors';
import GlobalStyles from '../constants/GlobalStyles';

export class Header extends Component {
	render() {
		const sourceBackgroundHeader =
			this.props.sourceBackgroundHeader || require('../images/background_header.jpg');
		const sourceLogoHeader =
			this.props.sourceLogoHeader || require('../images/lexor_logo_black.png');
		const textBanner = this.props.textBanner || 'Welcome to Lexor Customer Care';

		return (
			<View style={[styles.headerStyle, this.props.style]}>
				<StatusBar backgroundColor={Colors.BACKGROUND} barStyle="light-content" />
				<ImageBackground style={styles.imageStyle} source={sourceBackgroundHeader} />
				<View style={styles.viewBanner}>
					<Image
						style={styles.viewBannerImage}
						resizeMode="contain"
						source={sourceLogoHeader}
					/>
					<Text style={styles.viewBannerText}>{textBanner}</Text>
				</View>
			</View>
		);
	}
}

const styles = {
	headerStyle: {
		flexDirection: 'column',
		backgroundColor: Colors.BACKGROUND,
		justifyContent: 'center'
	},
	imageStyle: {
		height: 260,
		width: null
	},
	viewBanner: {
		paddingTop: 5,
		paddingBottom: 5,
		marginTop: -55,
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: '#ffffff',
		borderRadius: 3
	},
	viewBannerImage: {
		width: null,
		height: 60,
		marginTop: 10,
		marginBottom: 20
	},
	viewBannerText: {
		fontSize: GlobalStyles.getAdjustedFontSize(20),
		textAlign: 'center',
		color: Colors.BACKGROUND,
		margin: 10
	}
};
