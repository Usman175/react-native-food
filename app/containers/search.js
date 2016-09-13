import React, { Component, PropsType } from 'react';
import {
    StyleSheet,
    ListView,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import GridView from 'react-native-grid-view';
import SearchBar from 'react-native-search-bar';
import Modal from '../components/search/modal';
import RecipeThumbPlus from '../components/common/recipeThumbPlus';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            modalVisible: false,
            modalVisible: false
        };
        this.styles = {
            container: {
                flex: 1
            },
            gridContainer: {
                //opacity: .8
            }
        }
    }

    renderItem(item, key) {
        return (
            <RecipeThumbPlus item={item} key={key} itemKey={key} />
        );
    }

    toggleModalVisible(value) {
        this.setState({
            modalVisible: value
        });
    }

    render() {
        return (
            <View style={this.styles.container}>
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
                    }}
                    ref='searchBar' />

                <GridView
                    style={this.styles.gridContainer}
                    items={[1,2,3,4,5,6]}
                    itemsPerRow={2}
                    renderItem={this.renderItem.bind(this)}
                />

                { this.state.modalVisible ? <Modal visible={this.state.modalVisible} searchBar={this.refs.searchBar} /> : null }
            </View>
        );
    }
}

//export default connect()(Search);