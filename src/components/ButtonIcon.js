import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

export class ButtonIcon extends Component {
    render () {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[styles.buttonStyle, this.props.style]}>
                <Icon style={{alignSelf: 'center'}} name={this.props.icon} size={50} color={this.props.iconColor || '#fff'} />
                <Text style={[styles.textStyle, this.props.textStyle]}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
  textStyle: {
    textAlign: 'center',
    color: Colors.TEXT,
    fontSize: 16
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
    borderColor: Colors.TEXT,
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  }
};