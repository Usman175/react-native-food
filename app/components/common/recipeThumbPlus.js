import React, { Component, PropTypes } from 'react';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import {
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';
import { viewRecipeDetailAction } from '../../actions/searchAction';
import colors from '../../styles/colors';
import Stars from './starts';
import images from '../../constants/images';
import checklist from '../../assets/search/checklistRed.png';
import mykitchen from '../../assets/search/addMyKitchen.png';
import getRandomArbitrary from '../../utils/getRandomArbitary';

class RecipeThumbPlus extends Component {
    static propTypes = {
        type: PropTypes.oneOf(['checklist', 'myKitchen'])
    };

    static defaultProps = {
        type: 'myKitchen'
    };

    constructor(props) {
        super(props);
        this.styles = {
            recipeContainerLeft: {
                marginRight: 5,
                marginLeft: 8,
                marginBottom: 10,
                alignItems: 'stretch',
                height: 218
            },
            recipeContainerRight: {
                marginLeft: 5,
                marginRight: 8,
                marginBottom: 10,
                height: 218
            },
            container: {
                flex: 1,
                //shadowColor: "#000000",
                //shadowOpacity: 0.2,
                //shadowRadius: 1,
                //shadowOffset: {
                //    height: 1,
                //    width: 0
                //},
                borderWidth: 1,
                borderColor: '#EAEAEA'
            },
            image: {
                width: null,
                height: 160
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
            },
            checklist: {
                position: 'absolute',
                left: -1,
                top: -1
            }
        }
    }

    onPressButton() {
        this.props.viewRecipeDetailAction(true);
    }

    render() {
        const { item, itemKey, type } = this.props

        let style = (itemKey === 0) ? this.styles.recipeContainerLeft : this.styles.recipeContainerRight;
        if (item === 1 || item === 2) {
            style = { ...style, marginBottom: 10, marginTop: 10 };
        }

        return (
            <TouchableHighlight style={{flex: 1}} onPress={this.onPressButton.bind(this)} underlayColor="#FFF">
                <View style={[style, this.styles.container]}>
                    <View>
                        <Image source={images[getRandomArbitrary(0, 10)]} style={this.styles.image} />
                        <Text style={this.styles.title}>Indian Beef Curry</Text>
                        <Text style={this.styles.subTitle}>15 mins prep • 20 mins cock</Text>
                    </View>

                    <TouchableHighlight style={this.styles.checklist} onPress={this.onPressButton} underlayColor="#FFF">
                        <Image source={(type === 'myKitchen') ? mykitchen : checklist } />
                    </TouchableHighlight>
                    <Stars amount={5} />
                </View>
            </TouchableHighlight>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        viewRecipeDetailAction: bindActionCreators(viewRecipeDetailAction, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(RecipeThumbPlus);