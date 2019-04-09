import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import GlobalStyles from '../constants/GlobalStyles';

export class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={[styles.buttonStyle, this.props.buttonStyle]}>
                <Text style={[styles.textStyle, this.props.textStyle]}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: Colors.TEXT,
        fontSize: GlobalStyles.getAdjustedFontSize(15),
        fontWeight: '600',
        paddingTop: 8,
        paddingBottom: 5
    },
    buttonStyle: {
        height: 40,
        alignSelf: 'stretch',

        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.TEXT,
        marginLeft: 10,
        marginRight: 10
    }
};
