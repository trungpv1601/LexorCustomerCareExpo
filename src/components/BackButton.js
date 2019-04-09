import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

export class BackButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[styles.style, this.props.style]} onPress={Actions.pop}>
                <Icon
                    name={this.props.iconName || 'md-arrow-back'}
                    size={this.props.iconSize || 30}
                    color={this.props.iconColor || Colors.TEXT}
                    style={[styles.iconStyle, this.props.iconStyle]}
                />
            </TouchableOpacity>
        );
    }
}

const styles = {
    style: {
        alignSelf: 'flex-start',
        left: 20,
        top: 25
    },
    iconStyle: {
        margin: 5
    }
};
