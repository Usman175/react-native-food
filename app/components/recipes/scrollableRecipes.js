import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import RecipeThumb from './recipeThumb';

var THUMBS = [1,2,3,4,5,6,7,8,9,10,11,12];

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#FFF',
        height: 300
    },
    horizontalScrollView: {
        height: 182
    },
    container: {
        padding: 10,
        paddingRight: 0,
        paddingBottom: 0
    },
    text: {
        marginBottom: 10,
        fontSize: 17,
        fontWeight: 'bold'
    }
});

export default class ScrollableRecipes extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{ this.props.title }</Text>
                <ScrollView
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    style={[styles.scrollView, styles.horizontalScrollView]}>
                    {THUMBS.map((uri, i) => <RecipeThumb key={i} uri={uri} />)}
                </ScrollView>
            </View>
        );
    }
}