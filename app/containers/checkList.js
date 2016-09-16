import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    View,
    ScrollView,
    Text,
    ListView
} from 'react-native';
import NavBar from '../components/common/navBar.js';
import CheckItem from '../components/ingredients/checkItem';
import { toggleIngredientAction } from '../actions/checkListAction';

class CheckList extends Component {
    static propTypes = {
        source: PropTypes.string,
        checkList: PropTypes.array
    };

    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        console.log(this.props.checkList);
        this.state = {
            dataSource: ds.cloneWithRows(this.props.checkList),
            list: this.props.checkList
        };
    }

    componentWillReceiveProps(nextProps) {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.setState({
            dataSource: ds.cloneWithRows(nextProps.checkList),
            list: nextProps.checkList
        });
    }

    render() {
        const styles = {
            container: {
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'rgba(245, 252, 255, 1)',
                paddingTop: 22,
                paddingLeft: 15,
                paddingRight:15
            },
            noIngredientText: {
                textAlign: 'center'
            }
        };

        const noIngredientText = 'Your checklist is empty.\n\n' +
            'Ingredients that you have added from your favourite recipe/s will appear here';

        return (
            <View style={{ flex: 1 }}>
                <NavBar source={this.props.source} />
                <ScrollView style={ styles.container }>
                    { this.state.list.length ? (
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(data, j, i) => {
                                return (
                                    <CheckItem
                                        key={ i }
                                        index={ i }
                                        onToggle={ this.props.toggleCheck } checked={ data.checked }>
                                        {data.amount} - {data.name}
                                    </CheckItem>
                                );
                             }}
                    />) : (<Text style={ styles.noIngredientText }>{ noIngredientText }</Text>) }
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        checkList: state.checkListState.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleCheck: bindActionCreators(toggleIngredientAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckList);