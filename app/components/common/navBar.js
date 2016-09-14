import React, { Component, PropTypes } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import BackPNG from '../../assets/search/back.png';
import SharePNG from '../../assets/search/share.png';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
   container: {
       flex: 1,
       height: 44,
       backgroundColor: 'rgba(238, 237, 237, 1)',
       flexDirection: 'row',
       justifyContent: 'space-between',
    },
    backContainer: {
        width: 40,
        marginTop: 12,
        marginLeft: 10,
        flexDirection: 'row'
    },
    backText: {
        color: colors.red,
        fontSize: 17,
        marginLeft: 5
    },
    title: {
        marginTop: 11.75,
        fontSize: 17,
        fontWeight: '600'
    },
    shareIcon: {
        marginTop: 13,
        marginRight: 10
    }
});

export default class NavBar extends Component {
    handlePress() {
        console.log('hit');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.handlePress}>
                    <View style={styles.backContainer}>
                        <Image source={BackPNG} />
                        <Text style={styles.backText}>Back</Text>
                    </View>
                </TouchableHighlight>
                <Text style={styles.title}>Recipe</Text>
                <TouchableHighlight onPress={this.handlePress}>
                    <Image style={styles.shareIcon} source={SharePNG} />
                </TouchableHighlight>
            </View>
        )
    }
}