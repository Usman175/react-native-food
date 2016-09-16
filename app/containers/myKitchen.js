import React, { Component, PropsType } from 'react';
import {
    StyleSheet,
    ListView,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GridView from 'react-native-grid-view';
import SearchBar from 'react-native-search-bar';
import Modal from '../components/search/modal';
import RecipeThumbPlus from '../components/common/recipeThumbPlus';
import { showRecommended } from '../actions/recipesAction';
import NavBar from '../components/common/navBarWithCreate';

class MyKitchen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            modalVisible: false,
            showResult: false
        };
        this.styles = {
            container: {
                flex: 1
            },
            gridContainer: {
                flex: 1
            }
        }
    }

    renderItem(item, key) {
        return (
            <RecipeThumbPlus type="checklist" item={item} key={key} itemKey={key} />
        );
    }

    toggleModalVisible(value) {
        this.setState({
            modalVisible: value
        });
    }

    render() {
        const { showResult } = this.state;
        return (
            <View style={this.styles.container}>
                <NavBar />
                <SearchBar
                    placeholder='Search'
                    showsCancelButton={true}
                    onBlur={() => {
                        this.toggleModalVisible(false);
                    }}
                    onFocus={() => {
                        this.toggleModalVisible(true);
                    }}
                    onCancelButtonPress={() => {
                        this.toggleModalVisible(false)
                    }}
                    onSearchButtonPress={() => {
                        this.toggleModalVisible(false);
                        this.refs.searchBar.unFocus();
                        this.setState({
                            showResult: true
                        });
                        this.props.showRecommended();
                    }}
                    ref='searchBar' />

                <GridView
                    style={this.styles.gridContainer}
                    items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
                    itemsPerRow={2}
                    renderItem={this.renderItem.bind(this)}
                />

                { this.state.modalVisible ? <Modal visible={this.state.modalVisible} searchBar={this.refs.searchBar} /> : null }
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showRecommended: bindActionCreators(showRecommended, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(MyKitchen);