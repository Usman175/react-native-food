import React, { Component } from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import colors from '../../styles/colors';
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

export default class RecipeThumbPlus extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            recipeContainerLeft: {
                flex: 1,
                marginRight: 5,
                marginLeft: 11,
                marginBottom: 10,
                alignItems: 'stretch',
                height: 218
            },
            recipeContainerRight: {
                flex: 1,
                marginLeft: 5,
                marginRight: 11,
                marginBottom: 10,
                height: 218
            },
            container: {
                shadowColor: "#000000",
                shadowOpacity: 0.2,
                shadowRadius: 1,
                shadowOffset: {
                    height: 1,
                    width: 0
                }
            },
            image: {
                width: null,
                height: 150
            },
            title: {
                marginTop: 5,
                fontSize: 13,
                marginLeft: 8,
                marginRight: 8,
                color: colors.darkGrey
            },
            subTitle: {
                marginLeft: 8,
                marginRight: 8,
                fontSize: 11,
                color: colors.lightGrey
            }
        }
    }

    render() {
        const { item, itemKey } = this.props;

        let style = (itemKey === 0) ? this.styles.recipeContainerLeft : this.styles.recipeContainerRight;
        if (item === 1 || item === 2) {
            style = { ...style, marginBottom: 10, marginTop: 10 };
        }

        return (
            <View style={[style, this.styles.container]}>
                <Image source={thumbPNG1} style={this.styles.image} />
                <Text style={this.styles.title}>Indian Beef Curry</Text>
                <Text style={this.styles.subTitle}>15 mins prep • 20 mins cock</Text>
                <View></View>
            </View>
        );
    }
}