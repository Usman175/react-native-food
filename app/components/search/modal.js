import React, { PropTypes } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import Dimensions from 'Dimensions';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    modal: {
        flex: 1,
        position: 'absolute',
        marginTop: 44,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        width: width,
        height: height,
        top: 0,
        left: 0
    }
});

const Modal = (props) => {
    return props.visible ?
        <TouchableOpacity
            onPress={() => {
            props.searchBar.unFocus();
        }} style={styles.modal}>
            <View />
        </TouchableOpacity> : null;
};

Modal.propTypes = {
    visible: PropTypes.bool,
    searchBar: PropTypes.object
};

export default Modal;