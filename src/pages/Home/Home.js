import React, { Component } from 'react';
import { ScrollView, FlatList, View, Text } from 'react-native';
import { ButtonIcon, Header, LineFlat, LineUp } from '../../components';
import GlobalStyles from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					case: '1000',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1001',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1002',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1003',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1004',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1005',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1006',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1007',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1008',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1009',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1010',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1011',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1012',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1013',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1014',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1015',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1016',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1017',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1018',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1019',
					date: '01/01/2019',
					status: true
				},
				{
					case: '1020',
					date: '01/01/2019',
					status: true
				}
			]
		};
	}

	renderSectionHeader() {
		return (
			<View style={styles.sectionHeader}>
				<Text style={styles.sectionHeaderText}>Case #</Text>
				<Text style={styles.sectionHeaderText}>Days Open</Text>
				<Text style={styles.sectionHeaderText}>Status</Text>
			</View>
		);
	}

	onButtonPressScanSerialToRegister = () => {
		this.props.scanSerialToRegister();
	};

	onButtonPressRegister = () => {
		this.props.register();
	};

	render() {
		return (
			<ScrollView backgroundColor="#383b42" contentContainerStyle={styles.container}>
				<Header
					style={{ flex: 0.5 }}
					sourceLogoHeader={require('../../images/lexor_logo_black.png')}
					sourceBackgroundHeader={require('../../images/background_header_1.jpg')}
					textBanner="Welcome to Lexor Customer Care"
				/>
				<View
					style={{
						flex: 0.5,
						backgroundColor: Colors.BACKGROUND
					}}>
					<View
						style={{
							flex: 0.8,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-around'
						}}>
						<ButtonIcon icon="ios-person-add" onPress={this.onButtonPressRegister}>
							Register
						</ButtonIcon>
						<LineUp />
						<ButtonIcon
							icon="ios-barcode"
							onPress={this.onButtonPressScanSerialToRegister}>
							Scan Serial to Register
						</ButtonIcon>
					</View>
					<LineFlat size={1.5} />
					<View style={{ flex: 0.2 }}>
						<Text
							style={{
								textAlign: 'center',
								color: '#95989a',
								fontSize: GlobalStyles.getAdjustedFontSize(18),
								margin: 20
							}}>
							Pending Cases
						</Text>
					</View>
					<FlatList
						data={this.state.data}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<View key={item} style={styles.row}>
								<Text style={styles.rowText}>{item.case}</Text>
								<Text style={styles.rowText}>{item.date}</Text>
								<Text style={styles.rowText}>Pending</Text>
							</View>
						)}
						keyExtractor={(item) => item.case}
						ListHeaderComponent={this.renderSectionHeader}
					/>
				</View>
			</ScrollView>
		);
	}
}

const styles = {
	container: {
		justifyContent: 'space-between',
		backgroundColor: Colors.BACKGROUND
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	rowText: {
		color: '#95989a',
		fontSize: GlobalStyles.getAdjustedFontSize(18),
		paddingLeft: 10,
		paddingRight: 10
	},
	sectionHeader: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	sectionHeaderText: {
		fontSize: GlobalStyles.getAdjustedFontSize(18),
		color: '#ffffff',
		paddingLeft: 10,
		paddingRight: 10
	}
};
