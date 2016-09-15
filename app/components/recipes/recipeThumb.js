import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import color from '../../styles/colors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { viewRecipeDetailAction } from '../../actions/recipesAction';

const styles = StyleSheet.create({
    container: {
        marginRight: 10
    },
    img: {
        width: 125,
        height: 115
    },
    textContainer: {
        width: 125,
        padding: 7
    },
    text: {
        textAlign: 'left'
    },
    heading: {
        color: color.darkGrey,
        fontSize: 13
    },
    subHeading: {
        color: color.lightGrey,
        fontSize: 11
    }
});

class RecipeThumb extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        const { viewRecipeDetailAction, uri, publisher, title } = this.props;

        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => viewRecipeDetailAction(true)} underlayColor="#FFF">
                    <View>
                        <Image style={styles.img} source={uri} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.text, styles.heading]} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
                            <Text style={[styles.text, styles.subHeading]} numberOfLines={2} ellipsizeMode="tail">{publisher}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        viewRecipeDetailAction: bindActionCreators(viewRecipeDetailAction, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(RecipeThumb);
