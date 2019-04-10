import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import GlobalStyles from '../constants/GlobalStyles';
import Colors from '../constants/Colors';
import { LineFlat, ButtonIcon, Footer, BackButton } from '../components';

const RenderHeader = (props) => {
	const title = props.title || 'Info';
	if (props.hideTitle) {
		return <View style={styles.headerNoneTitle} />;
	} else {
		if (props.showBack) {
			return (
				<View>
					<BackButton />
					<View style={styles.header}>
						<Text style={[GlobalStyles.text, styles.headerText]}>{title}</Text>
					</View>
					<LineFlat />
				</View>
			);
		} else {
			return (
				<View>
					<View style={styles.header}>
						<Text style={[GlobalStyles.text, styles.headerText]}>{title}</Text>
					</View>
					<LineFlat />
				</View>
			);
		}
	}
};

const RenderActions = (props) => {
	if (!props.hideActions) {
		return (
			<Grid style={styles.viewActions}>
				<Col style={{ height: 130 }}>
					<ButtonIcon
						icon="ios-home"
						onPress={props.onPressHome || props.handlePressHome}>
						Home
					</ButtonIcon>
				</Col>
			</Grid>
		);
	}
	return <View />;
};

export class LayoutMessage extends React.Component {
	constructor(props) {
		super(props);
	}

	handlePressHome = () => {
		Actions.home();
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor={Colors.BACKGROUND} barStyle="light-content" />
				<RenderHeader {...this.props} />
				<View style={styles.content}>
					<ScrollView>{this.props.children}</ScrollView>
					<RenderActions {...this.props} handlePressHome={this.handlePressHome} />
				</View>
				<Footer />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: Colors.BACKGROUND
	},
	header: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 36
	},
	headerNoneTitle: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 60
	},
	headerText: {
		fontSize: GlobalStyles.getAdjustedFontSize(20)
	},
	content: {
		flex: 1,
		backgroundColor: Colors.BACKGROUND,
		alignItems: 'center',
		marginLeft: 20,
		marginRight: 20
	},
	viewActions: {
		justifyContent: 'center',
		alignItems: 'center'
	}
};
