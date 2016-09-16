import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import Button from '../common/button';
import colors from '../../styles/colors';

const data = [
    { amount: '1 tbsp', name: 'rice bran oil'},
    { amount: '1', name: 'medium red onion'},
    { amount: '1 tbsp', name: '(170g), sliced thinly'},
    { amount: '1/4 cup', name: '(75g) yellow curry paste'},
    { amount: '1/2 cup', name: 'garlic, crushed'},
    { amount: '2 tbsp', name: 'stick fresh lemon grass'},
    { amount: '1', name: 'bruisedfresh kaffir lime'},
    { amount: '1', name: '(410ml) coconut milk'},
    { amount: '1 tbsp', name: '(250ml) water'}
];

export default class Ingredients extends Component {
    static propTypes = {
        addIngredients: PropTypes.func
    };

    addIngredients = () => {
        console.log(this.props);
        this.props.addIngredients(data);
    };

    constructor(props) {
        super(props);
        this.styles = {
            container: {
                flexDirection: 'column',
                paddingRight: 10,
                paddingLeft: 10
            },
            textContainer: {
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(200, 199, 204, 1)',
                flex: 1,
                flexDirection: 'row'
            },
            text: {
                fontSize: 18,
                flex: 1,
                height: 40,
                marginTop: 15
            },
            amountText: {
                fontWeight: 'bold',
                marginLeft: 19
            },
            nameText: {
                flex: 2,
                fontWeight: '100'
            }
        };
    }

    render() {
        return (
            <View style={this.styles.container}>
                {data.map((item, i) =>
                    <View key={i} style={this.styles.textContainer}>
                        <Text style={[this.styles.text, this.styles.amountText]}>{item.amount}</Text>
                        <Text style={[this.styles.text, this.styles.nameText]}>{item.name}</Text>
                    </View>
                )}
                <Button
                    buttonStyle={{
                        marginTop: 20,
                        marginBottom: 20,
                        marginLeft: 60,
                        marginRight: 60,
                        backgroundColor: colors.red,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 45,
                        paddingRight: 45,
                        borderRadius: 25
                    }}
                    textStyle={{
                        textAlign: 'center',
                        color: '#FFF',
                        fontSize: 14
                    }}
                    text="Checkout List +"
                    handlePress={ this.addIngredients }
                    />
            </View>
        );
    }
}