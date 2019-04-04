import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { BarcodeScanner } from '../../components';

export default class ScanSerialToRegister extends Component {

	render () {
		return (
			<View style={styles.container}>
        <BarcodeScanner />
      </View>
		);
	}
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
};
