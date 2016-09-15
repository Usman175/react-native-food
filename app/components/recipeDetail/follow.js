import React from 'react';
import {
    Image,
    View,
    StyleSheet
} from 'react-native';
import Button from '../common/button';
import Follower from '../../assets/recipeDetail/follower.png';

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
            <Button handlePress={() => {}} />
        </View>
    )
};

export default Follow;