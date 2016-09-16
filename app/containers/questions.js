import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { BlurView } from 'react-native-blur';
import Question1PNG from '../assets/questions/question1.png';
import Question2PNG from '../assets/questions/question2.png';
import Question3PNG from '../assets/questions/question3.png';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

export default class Questions extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            container: {
                position: 'absolute',
                top: 0,
                left: 0
            },
            blurContainer: {
                flex: 1,
                height: 440,
                width: width,
                bottom: 0,
                left: 0,
                position: 'absolute'
            }
        }
    }

    render() {
        return <View style={this.styles.container}>
            <View>
                <Image source={Question1PNG} />
                <BlurView blurType="dark" style={this.styles.blurContainer} />
                <Text />
            </View>
        </View>;
    }
}