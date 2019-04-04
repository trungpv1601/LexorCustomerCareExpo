import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';
import Colors from '../constants/Colors';

export class Header extends Component {
	render () {
		const sourceBackgroundHeader = this.props.sourceBackgroundHeader || require('../images/background_header.jpg');
		const sourceLogoHeader = this.props.sourceLogoHeader || require('../images/lexor_logo_black.png');
		const textBanner = this.props.textBanner || 'Welcome to Lexor Customer Care';

		return (
			<View style={[ styles.headerStyle, this.props.style]}>
		        <StatusBar
		           backgroundColor={Colors.BACKGROUND}
		           barStyle="light-content"
		        />
		        <View style={styles.viewImageStyle}>
		            <Image 
		            	resizeMode="cover"
		              	style={styles.imageStyle} 
		              	source={sourceBackgroundHeader} />
		        </View>
		        <View style={styles.viewBanner}>
	              <Image 
	                style={styles.viewBannerImage}
	                source={sourceLogoHeader} />
	              <Text style={styles.viewBannerText}>{textBanner}</Text>
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
	viewImageStyle: {
		flex: .8
	},
	imageStyle: {
	  	flex:1, 
	  	height: null, 
	  	width: null 
	},
	viewBanner: {
		paddingTop: 5, 
		paddingBottom: 5, 
		marginTop: -45, 
		marginLeft: 20, 
		marginRight: 20, 
		width: null, 
		height: null, 
		backgroundColor: '#ffffff', 
		borderRadius: 3, 
		flexDirection: 'column', 
		alignItems: 'center', 
		justifyContent: 'space-around'
	},
	viewBannerImage: {
		width: 170, 
		height: 50, 
		marginTop: 10, 
		marginBottom: 10
	},
	viewBannerText: {
		fontSize: 20, 
		textAlign: 'center', 
		color: Colors.BACKGROUND, 
		marginBottom: 10
	}
};