import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import RecipeThumb from './recipeThumb';
import thumbPNG1 from '../../assets/recipes/thumb1.png';
import thumbPNG2 from '../../assets/recipes/thumb2.jpg';
import thumbPNG3 from '../../assets/recipes/thumb3.jpg';
import thumbPNG4 from '../../assets/recipes/thumb4.jpg';
import thumbPNG5 from '../../assets/recipes/thumb5.jpg';
import thumbPNG6 from '../../assets/recipes/thumb6.jpg';
import thumbPNG7 from '../../assets/recipes/thumb7.jpg';
import thumbPNG8 from '../../assets/recipes/thumb8.jpg';
import thumbPNG9 from '../../assets/recipes/thumb9.jpg';
import thumbPNG10 from '../../assets/recipes/thumb10.jpg';
import thumbPNG11 from '../../assets/recipes/thumb11.jpg';
import thumbPNG12 from '../../assets/recipes/thumb12.jpg';
import thumbPNG13 from '../../assets/recipes/thumb13.jpg';
import thumbPNG14 from '../../assets/recipes/thumb14.jpg';
import thumbPNG15 from '../../assets/recipes/thumb15.jpg';
import thumbPNG16 from '../../assets/recipes/thumb16.jpg';

var THUMBS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

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

const images = [
    thumbPNG1,
    thumbPNG2,
    thumbPNG3,
    thumbPNG4,
    thumbPNG5,
    thumbPNG6,
    thumbPNG7,
    thumbPNG8,
    thumbPNG9,
    thumbPNG10,
    thumbPNG11,
    thumbPNG12,
    thumbPNG13,
    thumbPNG14,
    thumbPNG15,
    thumbPNG16
];

export default class ScrollableRecipes extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

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
                            title={titles[this.getRandomArbitrary(0, titles.length - 1)]}
                            uri={images[this.getRandomArbitrary(0, images.length - 1)]}
                            publisher={publishers[this.getRandomArbitrary(0, publishers.length - 1)]} />)
                    }
                </ScrollView>
            </View>
        );
    }
}