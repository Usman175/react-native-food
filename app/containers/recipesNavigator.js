import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    View,
    Text,
    Navigator
} from 'react-native';
import Recipes from './recipes';
import { viewRecipeDetailAction } from '../actions/recipesAction';
import RecipeDetail from './recipeDetail';

class RecipesNavigator extends Component {
    constructor(props) {
        super(props);
        this.navigator = null;
        this.routes = [
            {title: 'Home', index: 0},
            {title: 'Recipe Detail', index: 1}
        ];
        this.index = 1;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.showRecipeDetailView) {
            this.navigator.push(this.routes[1]);
        } else {
            this.navigator.pop();
        }
    }

    renderScene(route, navigator) {
        this.navigator = navigator;
        this.route = route;

        if (route.index === 0) {
            return <Recipes showRecommended={this.props.showRecommended} />;
        } else {
            return <RecipeDetail source="recipes" />;
        }
    }

    render() {
        const routes = this.routes;

        return (
            <Navigator
                initialRouteStack={routes}
                initialRoute={routes[0]}
                renderScene={this.renderScene.bind(this)} />
        );
    }
}

function mapStateToProps(state) {
    return {
        showRecipeDetailView: state.recipesState.showRecipeDetailView,
        showRecommended: state.recipesState.showRecommended,
        dateTime: state.recipesState.dateTime
    }
}

function mapDispatchToProps(dispatch) {
    return {
        viewRecipeDetailAction: bindActionCreators(viewRecipeDetailAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesNavigator);
