import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        flex: 1,
        flexDirection: 'row'
    }
});


const Element = () =>
    <Provider store={store}>
        <View style={styles.container}>
            <Routes />
        </View>
    </Provider>;

export default Element;