import React, { Component } from 'react';
import {
	TouchableWithoutFeedback,
	View,
	Text,
	Image,
	TouchableOpacity,
	Linking,
	TextInput,
	KeyboardAvoidingView
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { ButtonIcon, Link, Button } from '../../components';
import GlobalStyles from '../../constants/GlobalStyles';

export default class CustomerMessage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feedback: ''
		};
	}

	callCustomerCare(url) {
		Linking.canOpenURL(url).then((supported) => {
			if (supported) {
				Linking.openURL(url);
			} else {
				console.log("Don't know how to open URI: " + url);
			}
		});
	}

	render() {
		return (
			<TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard}>
				<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
					<KeyboardAvoidingView style={styles.viewContent} behavior="padding" enabled>
						<View style={styles.viewLogo}>
							<Image
								style={styles.imageLogo}
								source={require('../../images/lexor_logo_black.png')}
							/>
						</View>
						<View style={styles.viewInformation}>
							<Text style={GlobalStyles.text}>
								Business Name: Purely Polish Nails
							</Text>
							<Text style={GlobalStyles.text}>Address: 9658 Beach Blvd,</Text>
							<Text style={GlobalStyles.text}>Westminster, CA 92342</Text>
							<Text style={GlobalStyles.text}>Customer Name: Thanh Nguyen</Text>
							<Text style={GlobalStyles.text}>Business #: 714-595-6279</Text>
							<Text style={GlobalStyles.text}>Mobile #: 714-564-9865</Text>
							<Text style={GlobalStyles.text}>Email: ThanhN@PPNails.com</Text>
						</View>
					</KeyboardAvoidingView>
					<KeyboardAvoidingView style={styles.viewConfirm} behavior="padding" enabled>
						<View style={styles.lineFlat} />
						<Text style={GlobalStyles.text}>
							Describe a brief problem of your product.
						</Text>
						<Text style={GlobalStyles.text}>
							Add photos & video for better understanding.
						</Text>
						<Text style={[GlobalStyles.text, styles.textToCustomerCare]}>
							To Customer Care
						</Text>
						<View style={styles.lineFlat} />
						<TextInput
							multiline={true}
							style={styles.multiline}
							numberOfLines={4}
							onChangeText={(text) => {
								this.setState({ feedback: text });
							}}
							value={this.state.feedback}
						/>
						<TouchableOpacity style={styles.touchAddPhotosVideo}>
							<Icon name="ios-share" size={25} color={Colors.LINK} />
							<Text style={[GlobalStyles.text, styles.textAddPhotosVideo]}>
								Add photos & video
							</Text>
						</TouchableOpacity>
						<Grid style={styles.gridButton}>
							<Col>
								<Button>Cancel</Button>
							</Col>
							<Col>
								<Button>Send</Button>
							</Col>
						</Grid>
					</KeyboardAvoidingView>
					<KeyboardSpacer />
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	viewContent: {
		flex: 0.35
		// flex: 1
	},
	viewConfirm: {
		flex: 0.65,
		// flex: 1,
		backgroundColor: Colors.BACKGROUND
	},
	textAddPhotosVideo: {
		color: '#fff',
		marginLeft: 10,
		marginTop: 7
	},
	touchAddPhotosVideo: {
		height: 30,
		flexDirection: 'row',
		marginBottom: 10,
		alignSelf: 'flex-start',
		paddingLeft: 10
	},
	gridButton: {
		flex: 1,
		height: 35
	},
	multiline: {
		flex: 1,
		fontSize: GlobalStyles.getAdjustedFontSize(16),
		padding: 4,
		borderWidth: 1,
		borderColor: Colors.TEXT,
		backgroundColor: '#fff',
		borderRadius: 5,
		margin: 10
	},
	imageLogo: {
		width: 140,
		height: 41
	},
	viewLogo: {
		padding: 10,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	viewInformation: {
		// flex: 0.75,
		flex: 1,
		paddingTop: 10
	},
	textToCustomerCare: {
		color: '#fff',
		fontWeight: 'bold',
		alignSelf: 'center',
		fontSize: GlobalStyles.getAdjustedFontSize(18),
		marginTop: 10
	},
	lineFlat: {
		backgroundColor: Colors.BACKGROUND_LINE,
		height: 1,
		width: null,
		margin: 10
	}
};
