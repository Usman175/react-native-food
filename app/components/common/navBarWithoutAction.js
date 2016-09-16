import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
    SegmentedControlIOS
} from 'react-native';
import BackPNG from '../../assets/search/back.png';
import SharePNG from '../../assets/search/share.png';
import colors from '../../styles/colors';
import { viewRecipeDetailAction as SearchViewRecipeDetailAction } from '../../actions/searchAction.js';
import { viewRecipeDetailAction as RecipeViewRecipeDetailAction } from '../../actions/recipesAction.js';

const styles = StyleSheet.create({
    container: {
        height: 44,
        backgroundColor: 'rgba(238, 237, 237, 1)',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backContainer: {
        width: 40,
        marginTop: 12,
        marginLeft: 10,
        flexDirection: 'row',
        opacity: 0
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
        marginRight: 10,
        opacity: 0
    }
});

class NavBar extends Component {
    handlePress() {
        if (this.props.source === 'search') {
            this.props.SearchViewRecipeDetailAction(false);
        } else {
            this.props.RecipeViewRecipeDetailAction(false);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight underlayColor={null} onPress={this.handlePress.bind(this)}>
                    <View style={styles.backContainer}>
                        <Image source={BackPNG} />
                        <Text style={styles.backText}>Back</Text>
                    </View>
                </TouchableHighlight>
                <SegmentedControlIOS
                    tintColor={colors.red}
                    style={{flex: 1, marginTop: 8}}
                    values={['To do', 'Done']}
                    selectedIndex={0}
                    onChange={(event) => {
                        this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                    }}
                />
                <TouchableHighlight underlayColor={null} onPress={this.handlePress}>
                    <Image style={styles.shareIcon} source={SharePNG} />
                </TouchableHighlight>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        SearchViewRecipeDetailAction: bindActionCreators(SearchViewRecipeDetailAction, dispatch),
        RecipeViewRecipeDetailAction: bindActionCreators(RecipeViewRecipeDetailAction, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(NavBar);