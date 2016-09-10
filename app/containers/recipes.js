import React, { Component } from 'react';
import Carousel from 'react-native-looped-carousel';
import Dimensions from 'Dimensions';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import HeroGallery from '../components/recipes/heroGallery';
import ScrollableRecipes from '../components/recipes/scrollableRecipes';

// Assets
import hero1PNG from '../assets/recipes/hero1.png';
import hero2PNG from '../assets/recipes/hero2.png';
import hero3PNG from '../assets/recipes/hero3.png';
import hero4PNG from '../assets/recipes/hero4.png';

export default class Recipes extends Component {
    constructor(props) {
        super(props);
        const { width } = Dimensions.get('window');
        this.state = {
            width
        };
        this.heroRecipes = [
            {
                img: hero1PNG,
                description: 'Chicken and tomato pesto lasagne recipe.'
            },
            {
                img: hero2PNG,
                description: 'Smoked ocean trout and asparagus frittata with rocket pesto recipe.'
            },
            {
                img: hero3PNG,
                description: 'Avocado pesto with prawns and pasta recipe.'
            },
            {
                img: hero4PNG,
                description: 'Spinach, pesto and parmesan lasagne recipe.'
            }
        ];
    }

    onLayoutDidChange(e) {
        var layout = e.nativeEvent.layout;
        this.setState({size: {width: layout.width, height: 160}});
    }

    render() {
        return (
            <View style={{flex: 1}} onLayout={this.onLayoutDidChange.bind(this)}>
                <Carousel autoplay={false} style={this.state.size}>
                    {this.heroRecipes.map((item, i) => {
                        return (
                            <HeroGallery
                                key={i}
                                img={item.img}
                                description={item.description}
                                />
                        );
                    })}
                </Carousel>

                <ScrollableRecipes title="Recipe you followed" />

                <ScrollableRecipes title="You may love these" />

                <ScrollableRecipes title="New recipes" />
            </View>
        );
    }
}
