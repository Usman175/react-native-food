import React, { Component, PropTypes } from 'react';
import {
    View,
    Image,
    ScrollView,
    Text,
    SegmentedControlIOS
} from 'react-native';
import NavBar from '../components/common/navBar.js';
import Follow from '../components/recipeDetail/follow';
import Hero from '../components/recipeDetail/hero';
import colors from '../styles/colors';

export default class RecipeDetail extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            container: {
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'rgba(245, 252, 255, 1)'
            },
            segmentControl: {
                margin: 12
            }
        }
    }
    render() {
        const leftButtonConfig = {
            title: 'Back',
            handler: function onNext() {
                alert('hello!');
            }
        };

        return (
            <ScrollView style={this.styles.container}>
                <NavBar />
                <Hero />
                <Follow />

                <View style={this.styles.segmentControl}>
                    <SegmentedControlIOS tintColor={colors.red} values={['Ingredients', 'Steps', 'Comments']} selectedIndex={0} />
                </View>
            </ScrollView>
        )
    }
}