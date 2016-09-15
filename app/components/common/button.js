import React, { PropTypes } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: colors.red,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 45,
        paddingRight: 45,
        borderRadius: 14
    },
    textStyle: {
        color: '#FFF',
        fontSize: 14
    }
});

const Button = (props) => {
    const buttonStyle = styles.buttonStyle;
    styles.textStyle.fontSize = props.textSize ? props.textSize : styles.textStyle.fontSize;
    buttonStyle.borderRadius = props.textSize ? props.textSize : buttonStyle.borderRadius;

    buttonStyle.paddingTop = props.paddingTopBottom ? props.paddingTopBottom : buttonStyle.paddingTop;
    buttonStyle.paddingBottom = props.paddingTopBottom ? props.paddingTopBottom : buttonStyle.paddingBottom;

    buttonStyle.paddingLeft = props.paddingLeftRight ? props.paddingLeftRight : buttonStyle.paddingLeft;
    buttonStyle.paddingRight = props.paddingLeftRight ? props.paddingLeftRight : buttonStyle.paddingRight;

    return (
        <TouchableHighlight underlayColor="#FFF" onPress={props.handlePress}>
            <View style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Follow +</Text>
            </View>
        </TouchableHighlight>
    );
};

Button.propTypes = {
    textSize: PropTypes.number,
    paddingTopBottom: PropTypes.number,
    paddingLeftRight: PropTypes.number,
    borderRadius: PropTypes.number,
    handlePress: PropTypes.func
};

export default Button;