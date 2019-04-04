import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, Image, TouchableOpacity, Linking, TextInput } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { ButtonIcon, Link, Button } from '../../components';
import GlobalStyles from '../../constants/GlobalStyles';

export default class CustomerMessage extends Component {
	
	callCustomerCare (url) {
		Linking.canOpenURL(url).then(supported => {
        if (supported) {
            Linking.openURL(url);
        } else {
            console.log('Don\'t know how to open URI: ' + url);
        }
        });
	}

	render() {
		return (
			<TouchableWithoutFeedback style={{flex:1}} onPress={dismissKeyboard}>
				<View style={styles.container}>
					<View style={styles.viewContent}>
						<View style={styles.viewLogo}>
							<Image 
								style={styles.imageLogo}
								source={require('../../images/lexor_logo_black.png')} />
						</View>
						<View style={styles.viewInformation}>
							<Text style={GlobalStyles.text}>Business Name: Purely Polish Nails</Text>
							<Text style={GlobalStyles.text}>Address: 9658 Beach Blvd,</Text>
							<Text style={GlobalStyles.text}>Westminster, CA 92342</Text>
							<Text style={GlobalStyles.text}>Customer Name: Thanh Nguyen</Text>
							<Text style={GlobalStyles.text}>Business #: 714-595-6279</Text>
							<Text style={GlobalStyles.text}>Mobile #: 714-564-9865</Text>
							<Text style={GlobalStyles.text}>Email: ThanhN@PPNails.com</Text>
						</View>
					</View>
					<View style={styles.viewConfirm}>
						<View style={styles.viewConfirmButtonIcon}>
							<View style={styles.viewMessage}>
								<Text style={GlobalStyles.text}>Describe a brief problem of your product.</Text>
								<Text style={GlobalStyles.text}>Add photos & video for better understanding.</Text>
							</View>
							<View style={styles.viewSendMessage}>
								<View style={styles.viewSendMessageTitle}>
									<Text style={[GlobalStyles.text, styles.textToCustomerCare]}>To Customer Care</Text>
									<View style={styles.lineFlat} />
								</View>
								<View style={styles.viewSendMessageBody}>
									<TextInput
									multiline={true}
									style={styles.multiline}
									onChangeText={(text) => {
										this.setState({text});
									}}>
									</TextInput>
									<TouchableOpacity style={styles.touchAddPhotosVideo}>
										<Icon name='ios-share-outline' size={25} color='#007aff' />
										<Text style={[GlobalStyles.text, styles.textAddPhotosVideo]}>Add photos & video</Text>
									</TouchableOpacity>
									<Grid style={styles.gridButton}>
										<Col>
											<Button>Cancel</Button>
										</Col>
										<Col>
											<Button>Send</Button>
										</Col>
									</Grid>
								</View>
							</View>
						</View>
					</View>
					<KeyboardSpacer/>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	container: {
		flex: 1
	},
	headerLogo: {
		flex: .4
	}, 
	viewContent: {
		flex: .35, 
	},
	viewConfirm: {
		flex: .65, 
		backgroundColor: '#383b42'
	},
	viewConfirmText: {
		flex: .2, 
		flexDirection: 'row', 
		justifyContent: 'space-around', 
		alignItems: 'center'
	},
	viewMessage: {
		flex: .1,
		margin: 10
	},
	viewSendMessage: {
		flex: .9,
		margin: 10,
		flexDirection: 'column',
	},
	viewSendMessageTitle: {
		flex: .1
	},
	viewSendMessageBody: {
		flex: .9
	},
	confirmText: {
		color: '#95989a'
	},
	viewConfirmButtonIcon: {
		flex: 1
	},
	buttonIconText: {
		fontSize: 15
	},
	textAddPhotosVideo: {
		color: '#fff',
		marginLeft: 10,
		marginTop: 7,
	},
	touchAddPhotosVideo: {
		height: 30,
		flexDirection: 'row',
		marginBottom: 10,
		alignSelf: 'flex-start',
		paddingLeft: 10
	},
	gridButton: {
		height: 35
	},
	linkPhone: {
		fontSize: 18,
	},
	multiline: {
		flex: 1,
		fontSize: 16,
		padding: 4,
		marginBottom: 10,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: Colors.TEXT,
		marginTop: 10,
		borderRadius: 5
	},
	imageLogo: {
		width: 140, 
		height: 41, 
	},
	viewLogo: {
		flex: .25,
		flexDirection: 'row',
		justifyContent: 'center',
    	alignItems: 'center',
		paddingTop: 20
	},
	viewInformation: {
		flex: .75,
		paddingLeft: 20,
		paddingTop: 10
	},
	textToCustomerCare: {
		color: '#fff',
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	lineFlat: {
		backgroundColor: '#2d2e2e',
		height: 1,
    	width: null,
    	margin: 10
	},
};