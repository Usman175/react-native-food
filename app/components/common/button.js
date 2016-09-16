import React, { PropTypes } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

const Button = (props) => {
    return (
        <TouchableHighlight underlayColor="#FFF" onPress={props.handlePress} style={props.containerStyle}>
            <View style={props.buttonStyle}>
                <Text style={props.textStyle}>{props.text}</Text>
            </View>
        </TouchableHighlight>
    );
};

Button.propTypes = {
    buttonStyle: PropTypes.object,
    textStyle: PropTypes.object,
    handlePress: PropTypes.func,
    text: PropTypes.string
};

export default Button;