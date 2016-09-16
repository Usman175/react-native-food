import React from 'react';
import {
    Image,
    View,
    StyleSheet
} from 'react-native';
import Button from '../common/button';
import Follower from '../../assets/recipeDetail/follower.png';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 7.5,
        paddingBottom: 7.5,
        paddingLeft: 17,
        paddingRight: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#C8C7CC',
        borderBottomWidth: 1,
        height: 45
    },
    logo: {
        marginTop: 4
    }
});

const Follow = () => {
    return (
        <View style={styles.container}>
            <Image source={Follower} style={styles.logo} />
            <Button
                handlePress={() => {}}
                buttonStyle={{
                    backgroundColor: colors.red,
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingLeft: 45,
                    paddingRight: 45,
                    borderRadius: 14
                }}
                textStyle={{
                    textAlign: 'center',
                    color: '#FFF',
                    fontSize: 14
                }}
                text="Follow +"
            />
        </View>
    )
};

export default Follow;