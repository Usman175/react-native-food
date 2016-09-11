import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import color from '../../styles/colors';
import thumbPNG from '../../assets/recipes/thumb1.png';

const styles = StyleSheet.create({
    container: {
        marginRight: 10
    },
    img: {
        width: 125,
        height: 115
    },
    textContainer: {
        padding: 7
    },
    text: {
        textAlign: 'left'
    },
    heading: {
        color: color.darkGrey,
        fontSize: 13
    },
    subHeading: {
        color: color.lightGrey,
        fontSize: 11
    }
});

export default class RecipeThumb extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    onPressButton() {
        console.log('hit');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.onPressButton} underlayColor="#FFF">
                    <View>
                        <Image style={styles.img} source={thumbPNG} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.text, styles.heading]}>Recipe Name</Text>
                            <Text style={[styles.text, styles.subHeading]}>Recipe Description</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
