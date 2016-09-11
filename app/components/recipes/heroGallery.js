import React, { PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

const styles = StyleSheet.create({
    textView: {
        height: 55,
        marginTop: 107,
        flexDirection: 'column',
        backgroundColor: 'rgba(86,86,86, 0.45)'
    },
    text: {
        fontSize: 12,
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        color: 'white'
    }
});

const HeroGallery = (props) =>
    <View>
        <Image source={props.img}>
            <View style={styles.textView}>
                <Text style={styles.text} ellipsizeMode="tail" numberOfLines={2}>
                    {props.description}
                </Text>
            </View>
        </Image>
    </View>;

HeroGallery.propTypes = {
    img: PropTypes.number,
    description: PropTypes.string
};

HeroGallery.displayName = 'HeroGallery';

export default HeroGallery;