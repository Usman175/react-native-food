import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import colors from '../../styles/colors.js';

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    },
    heading: {
        marginTop: 120,
        fontSize: 17,
        fontWeight: '100'
    },
    subHeading: {
        fontSize: 18,
        lineHeight: 40,
        color: colors.red
    }
});

const PopularSearchTerms = () => {
    const terms = [
        'Pasta',
        'Gluten Free',
        'Breakfast',
        'Dinner',
        'Dessert',
        'Healthy',
        'Chicken'
    ];

    return (
        <View>
            <Text style={[styles.text, styles.heading]}>&#9829; Popular Search</Text>
            {terms.map((item, i) => {
                return <Text style={[styles.text, styles.subHeading]} key={i}>{item}</Text>;
            })}
        </View>
    );
};

export default PopularSearchTerms;