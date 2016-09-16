import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Image
} from 'react-native';
import { BlurView } from 'react-native-blur';
import Question1PNG from '../assets/questions/Question1.png';
import Question2PNG from '../assets/questions/Question2.png';
import Question3PNG from '../assets/questions/Question3.png';
import Dimensions from 'Dimensions';

const { width, height } = Dimensions.get('window');

export default class Questions extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            container: {
                position: 'absolute',
                top: -20,
                left: 0,
                width: width
            },
            blurContainer: {
                flex: 1,
                height: 440,
                bottom: 0,
                left: 0,
                position: 'absolute'
            }
        };

        this.state = {
            index: 0
        }
    }

    handlePress = () => {
        this.setState({
            index: this.state.index + 1
        })
    }

    render() {
        return <View style={this.styles.container}>
            <View style={{ backgroundColor: '#FFF'}}>
                {(this.state.index === 0) ?<TouchableHighlight onPress={this.handlePress}>
                    <Image source={Question1PNG} resize={true} resizeMode="cover" style={{width, height}} />
                </TouchableHighlight> : null}

                {(this.state.index === 1) ?<TouchableHighlight onPress={this.handlePress}>
                    <Image source={Question2PNG} resize={true} resizeMode="cover" style={{width, height}} />
                </TouchableHighlight> : null}

                {(this.state.index === 2) ?<TouchableHighlight onPress={this.handlePress}>
                    <Image source={Question3PNG} resize={true} resizeMode="cover" style={{width, height}} />
                </TouchableHighlight> : null}
                <BlurView blurType="dark" style={this.styles.blurContainer} />
                <Text />
            </View>
        </View>;
    }
}