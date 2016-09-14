import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import RecipeThumb from './recipeThumb';
import images from '../../constants/images';
import getRandomArbitrary from '../../utils/getRandomArbitary';

const THUMBS = [1, 2, 3, 4, 5, 6];

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#FFF',
        height: 300
    },
    horizontalScrollView: {
        height: 188
     },
    container: {
        padding: 10,
        paddingRight: 0,
        paddingBottom: 0
    },
    text: {
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 'normal'
    }
});

const publishers = [
    'Australian Women\'s day',
    'Women\'s day',
    'Dolly',
    'Home to Love',
    'Misson',
    'Harper Bazaar',
    'Gourmet Traveller'
];

const titles = [
    'Pumpkin and eggplant massaman curry​',
    '​Indian beef curry cups​',
    '​Sri Lankan potato and pea curry​',
    '​Vegetarian Thai yellow curry​',
    '​Lava cauldron curry​',
    '​Curried vegetable soup​',
    '​Red tofu curry​',
    '​Dhal curry with chutney yoghurt​',
    '​Slow-cooker pork and lemon grass curry​',
    '​Peri peri coconut chicken curry​',
    '​Red curry lamb shanks​',
    '​20 easy vegetarian curry recipes​',
    '​Pea and potato curry​',
    '​Curried chicken free-form tart​',
    '​Peppered pork curry​',
    '​Red pork with lychee curry​',
    '​Split pea and capsicum curry​',
    '​Lamb, kumara and almond curry​',
    '​Coconut curried beef​',
    '​All the classic curry recipes​',
    '​Prawn curry​',
    '​Chicken curry and naan​'
];

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
                    {THUMBS.map((uri, i) =>
                        <RecipeThumb
                            key={i}
                            title={titles[getRandomArbitrary(0, titles.length - 1)]}
                            uri={images[getRandomArbitrary(0, images.length - 1)]}
                            publisher={publishers[getRandomArbitrary(0, publishers.length - 1)]} />)
                    }
                </ScrollView>
            </View>
        );
    }
}