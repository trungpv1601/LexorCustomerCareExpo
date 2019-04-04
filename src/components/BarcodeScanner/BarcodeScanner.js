import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
	
export class BarcodeScanner extends Component {
	constructor(props) {
	    super(props);

	    this.camera = null;

	    this.state = {
	      camera: {
	        aspect: Camera.constants.Aspect.fill,
	        type: Camera.constants.Type.back,
	        orientation: Camera.constants.Orientation.auto,
	        torchMode: Camera.constants.FlashMode.off,
	      }
	    };
	  }

	  switchType = () => {
	    let newType;
	    const { back, front } = Camera.constants.Type;

	    if (this.state.camera.type === back) {
	      newType = front;
	    } else if (this.state.camera.type === front) {
	      newType = back;
	    }

	    this.setState({
	      camera: {
	        ...this.state.camera,
	        type: newType,
	      },
	    });
	  }

	  get typeIcon() {
	    let icon;
	    const { back, front } = Camera.constants.Type;

	    if (this.state.camera.type === back) {
	      icon = require('./assets/ic_camera_rear_white.png');
	    } else if (this.state.camera.type === front) {
	      icon = require('./assets/ic_camera_front_white.png');
	    }

	    return icon;
	  }

	  switchFlash = () => {
	    let newFlashMode;
	    const { on, off } = Camera.constants.FlashMode;

	    if (this.state.camera.torchMode === on) {
	      newFlashMode = off;
	    } else if (this.state.camera.torchMode === off) {
	      newFlashMode = on;
	    }

	    this.setState({
	      camera: {
	        ...this.state.camera,
	        torchMode: newFlashMode,
	      },
	    });
	  }

	  get flashIcon() {
	    let icon;
	    const { on, off } = Camera.constants.FlashMode;

	    if (this.state.camera.torchMode === on) {
	      icon = require('./assets/ic_flash_on_white.png');
	    } else if (this.state.camera.torchMode === off) {
	      icon = require('./assets/ic_flash_off_white.png');
	    }

	    return icon;
	  }

	  onBarCodeRead(code) {
	  	Actions.customerInfo({ data: code.data })
	  }

	  render() {
	    return (
	      <View style={styles.container}>
	        <StatusBar
	          animated
	          hidden
	        />
	        <Camera
	          ref={(cam) => {
	            this.camera = cam;
	          }}
	          style={styles.preview}
	          aspect={this.state.camera.aspect}
	          type={this.state.camera.type}
	          onBarCodeRead={this.onBarCodeRead}
	          torchMode={this.state.camera.torchMode}/>
	        <View style={[styles.overlay, styles.topOverlay]}>
	          <TouchableOpacity
	            style={styles.typeButton}
	            onPress={this.switchType}>
	            <Image
	              source={this.typeIcon}
	            />
	          </TouchableOpacity>
	          <TouchableOpacity
	            style={styles.flashButton}
	            onPress={this.switchFlash}>
	            <Image
	              source={this.flashIcon}
	            />
	          </TouchableOpacity>
	        </View>
	        <View style={[styles.overlay, styles.bottomOverlay]}>
	          <TouchableOpacity
	                onPress={Actions.pop}>
	              <Icon name="md-arrow-back" size={50} color="#ffffff"/>
	          </TouchableOpacity>
	        </View>
	      </View>
	    );
	}
}


const styles = {
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  typeButton: {
    padding: 5,
  },
  flashButton: {
    padding: 5,
  },
  buttonsSpace: {
    width: 10,
  },
};