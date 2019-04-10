import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { ButtonIcon, Header, LineFlat, LineUp } from '../../components';
import GlobalStyles from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';

export default class HomeWithProfile extends Component {
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

	handlePressRequestService = () => {
		Actions.scanSerialToRegister();
	};

	handlePressProfile = () => {
		Actions.customerProfile();
	};

	handlePressHistory = () => {
		Actions.noHistory();
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
				<View style={{ flex: 0.5, backgroundColor: Colors.BACKGROUND }}>
					<View
						style={{
							flex: 0.8,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-around'
						}}>
						<Grid>
							<Row style={{ height: 100 }}>
								<ButtonIcon
									icon="ios-person-add"
									onPress={this.handlePressRequestService}>
									Request Service
								</ButtonIcon>
								<LineUp />
							</Row>
							<LineFlat />
							<Row style={{ height: 100 }}>
								<ButtonIcon icon="md-person" onPress={this.handlePressProfile}>
									Profile
								</ButtonIcon>
								<LineUp />
							</Row>
						</Grid>
						<Grid>
							<Row style={{ height: 100 }}>
								<ButtonIcon
									icon="ios-cart"
									onPress={this.handlePressRequestService}>
									Purchase Part
								</ButtonIcon>
							</Row>
							<LineFlat />
							<Row style={{ height: 100 }}>
								<ButtonIcon icon="ios-list-box" onPress={this.handlePressHistory}>
									History
								</ButtonIcon>
							</Row>
						</Grid>
					</View>
					<LineFlat />
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
		justifyContent: 'space-between'
	},
	sectionHeaderText: {
		fontSize: GlobalStyles.getAdjustedFontSize(18),
		color: '#ffffff',
		paddingLeft: 10,
		paddingRight: 10
	}
};
