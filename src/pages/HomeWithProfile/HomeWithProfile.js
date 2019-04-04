import React, { Component } from 'react';
import { ScrollView, View, Text, ListView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { ButtonIcon, Header } from '../../components';

export default class HomeWithProfile extends Component {

	constructor(props) {
	    super(props);
	    this.state =  {
	      dataSource: new ListView.DataSource({
	        rowHasChanged: (r1, r2) => r1 !== r2
	      }).cloneWithRows([
	        	
	      ])
	    };
	  }


    renderSectionHeader () {
    	return (
    		<View style={styles.sectionHeader}>
	    		<Text style={styles.sectionHeaderText}>Case #</Text>
	    		<Text style={styles.sectionHeaderText}>Days Open</Text>
	    		<Text style={styles.sectionHeaderText}>Status</Text>
    		</View>
		);
    }

    onButtonPressScanSerialToRegister () {
		this.props.scanSerialToRegister();
	};

	render () {
		return (
			<ListView 
				ref="ListView"
				contentContainerStyle={styles.container}
				dataSource={this.state.dataSource}
				enableEmptySections={true}
				renderRow={(rowData) => (
					<View key={rowData} style={ styles.row }>
			            <Text style={ styles.rowText }>
			              { rowData }
			            </Text>
			            <Text style={ styles.rowText }>
			              { rowData }
			            </Text>
			            <Text style={ styles.rowText }>
			              { rowData }
			            </Text>
			        </View>
				)}
				renderSectionHeader={this.renderSectionHeader}

				renderScrollComponent={props => (
					<ParallaxScrollView
				      backgroundColor="#383b42"
				      contentBackgroundColor="#383b42"
				      parallaxHeaderHeight={600}
				      contentContainerStyle={{height: 600}}
				      fadeOutForeground={false}
				      renderForeground={() => (
				      	<View style={{flex: 1}}>
							<Header style={{flex: .5}} 
									sourceLogoHeader={require('../../images/lexor_logo_black.png')}
									sourceBackgroundHeader={require('../../images/background_header_1.jpg')}
									textBanner='Welcome to Lexor Customer Care'/>
							<View style={{flex: .5, backgroundColor: '#383b42'}}>
								<View style={{flex: .8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
									<Grid>
										<Row style={{height: 100}}>
											<ButtonIcon icon="ios-person-add">Request Service</ButtonIcon>
											<View style={styles.lineUp} />
										</Row>
										<View style={styles.lineFlat} />
										<Row style={{height: 100}}>
											<ButtonIcon icon="md-person">Profile</ButtonIcon>
											<View style={styles.lineUp} />
										</Row>
									</Grid>
									<Grid>
										<Row style={{height: 100}}>
											<ButtonIcon icon="ios-cart">Purchase Part</ButtonIcon>
										</Row>
										<View style={styles.lineFlat} />
										<Row style={{height: 100}}>
											<ButtonIcon icon="ios-list-box">History</ButtonIcon>
										</Row>
									</Grid>
								</View>
								<View style={styles.lineFlat} />
								<View style={{flex: .2}}>
									<Text style={{textAlign: 'center', color: '#95989a', fontSize: 18}}>Pending Cases</Text>
								</View>
							</View>
				     	</View>
				      )}/>
				)}/>
		);
	}
}


const styles = {
    container: {
		backgroundColor: '#383b42',
		flexDirection: 'row',
        flexWrap: 'wrap'
	},
    row: {
	    backgroundColor: '#383b42',
	    flex: 1, 
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	rowText: {
	    color: '#95989a',
	    fontSize: 18,
	    paddingLeft: 10,
	    paddingRight: 10
	},
	sectionHeader: {
		flex: 1, 
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	sectionHeaderText: {
		fontSize: 18,
	    color: '#ffffff',
	    paddingLeft: 10,
	    paddingRight: 10
	},
	lineUp: {
		backgroundColor: '#2d2e2e',
		height: 60,
    width: 1,
    marginTop: 20,
    marginBottom: 10
	},
	lineFlat: {
		backgroundColor: '#2d2e2e',
		height: 1,
    width: null	,
    margin: 10,
    marginTop: 10,
	}
};
