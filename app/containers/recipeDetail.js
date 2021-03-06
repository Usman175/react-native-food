import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
import Ingredients from '../components/recipeDetail/ingredients';
import colors from '../styles/colors';
import { addIngredientAction } from '../actions/checkListAction';

class RecipeDetail extends Component {
    static propTypes = {
        source: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.styles = {
            container: {
                flex: 1
            },
            scrollContainer: {
                marginBottom: 50,
                backgroundColor: 'rgba(245, 252, 255, 1)'
            },
            segmentControl: {
                margin: 12
            }
        }
    }

    render() {
        return (
            <View style={this.styles.container}>
                <NavBar source={this.props.source} />
                <ScrollView style={this.styles.scrollContainer}>
                    <Hero />
                    <Follow />

                    <View style={this.styles.segmentControl}>
                        <SegmentedControlIOS tintColor={colors.red} values={['Ingredients', 'Steps', 'Comments']} selectedIndex={0} />
                    </View>

                    <Ingredients addIngredients={ this.props.addIngredients } />
                </ScrollView>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addIngredients: bindActionCreators(addIngredientAction, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(RecipeDetail);