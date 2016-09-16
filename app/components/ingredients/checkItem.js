import React, { Component, PropTypes } from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import Checkbox from '../../assets/ingredients/checkbox.png';
import Tick from '../../assets/ingredients/tick.png';
import SortableTab from '../../assets/ingredients/sorttab.png';

class CheckItem extends Component {
    static propTypes = {
        onToggle: PropTypes.func,
        index: PropTypes.any,
        checked: PropTypes.bool,
        children: PropTypes.any
    };

    toggleCheck = () => {
        this.props.onToggle(this.props.index);
    };

    render() {
        console.log('render');
        const styles = {
            container: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'stretch',
                paddingTop: 5,
                paddingBottom: 5
            },
            checkbox: {
                width: 30,
                height: 30,
                position: 'relative',
                marginRight: 10
            },
            textContainer: {
                flex: 1,
                position: 'relative',
                borderBottomWidth: 1,
                borderColor: '#C8C7CC',
                paddingTop: 5
            },
            tick: {
                position: 'absolute',
                top: 7,
                left: 5
            },
            sortableTab: {
                position: 'absolute',
                right: 0,
                top: 2
            }
        };

        return (
            <View style={ styles.container }>
                <TouchableHighlight onPress={ this.toggleCheck } underlayColor="#ffffff">
                    <View style={ styles.checkbox }>
                        <Image source={ Checkbox } />
                        { this.props.checked && <Image style={ styles.tick } source={ Tick } /> }
                    </View>
                </TouchableHighlight>
                <View style={ styles.textContainer } >
                    <Text style={{ marginTop: 5 }}>{ this.props.children }</Text>
                    <Image style={ styles.sortableTab } source={ SortableTab } />
                </View>
            </View>
        );
    }
};

export default CheckItem;