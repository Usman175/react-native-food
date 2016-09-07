import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';

const Element = () =>
    <Provider store={store}>
        <View>
            <Text>Test</Text>
        </View>
    </Provider>;

export default Element;