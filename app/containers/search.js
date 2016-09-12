import React, { Component, PropsType } from 'react';
import {
    StyleSheet,
    ListView,
    View,
    Modal,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import GridView from 'react-native-grid-view';
import SearchBar from 'react-native-search-bar';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            modalVisible: false
        };
        this.styles = {
            container: {
                flex: 1
            },
            gridContainer: {
                //opacity: .8
            },
            recipeContainerLeft: {
                backgroundColor: 'red',
                flex: 1,
                marginRight: 5,
                marginLeft: 11,
                marginBottom: 10,
                height: 218
            },
            recipeContainerRight: {
                backgroundColor: 'red',
                flex: 1,
                marginLeft: 5,
                marginRight: 11,
                marginBottom: 10,
                height: 218
            }
        }
    }

    renderItem(item, key) {
        let style = (key === 0) ? this.styles.recipeContainerLeft : this.styles.recipeContainerRight;
        if (item === 1 || item === 2) {
            style = { ...style, marginBottom: 10, marginTop: 10 };
        }

        return (
            <View key={key} style={style}>
                <Text>Bill</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={this.styles.container}>
                <SearchBar
                    placeholder='Search'
                    showsCancelButton={true}
                    onBlur={() => this.refs.searchBar.unFocus()}
                    onSearchButtonPress={() => this.refs.searchBar.unFocus()}
                    ref='searchBar' />

                <GridView
                    style={this.styles.gridContainer}
                    items={[1,2,3,4,5,6]}
                    itemsPerRow={2}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        );
    }
}

//export default connect()(Search);