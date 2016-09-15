import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import Fav from '../../assets/recipeDetail/fav.png';
import Stars from '../common/starts';
const { BlurView, VibrancyView } = require('react-native-blur');

const styles = StyleSheet.create({
    fav: {
        position: 'absolute',
        top: 0,
        left: 20
    },
    textContainer: {
        padding: 15,
        marginTop: -100,
        height: 100,
        flex: 1
    },
    title: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: '300'
    },
    subTitle: {
        fontSize: 13,
        color: '#FFF'
    },
    subtitleContainer: {
        flex: 1,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    starContainer: {
        marginTop: 16,
        flex: 1,
        flexDirection: 'row-reverse'
    },
    amountText: {
        color: '#FFF',
        marginLeft: 2,
        marginTop: 2,
        fontSize: 10
    }
});

const Hero = () =>
    <View>
        <Image source={{uri: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2014/11/28/RealLivingBR116425/chinese-hoisin-ribs.jpg?width=1229&height=768&mode=crop&quality=75'}} style={{height: 450}} />
        <Image style={styles.fav} source={Fav} />
        <BlurView style={styles.textContainer} blurType="dark">
            <Text style={styles.title}>Sri Lankan potato and pea curry</Text>
            <View style={styles.subtitleContainer}>
                <View>
                    <Text style={styles.subTitle}>20 mins prep • 20 mins cock</Text>
                    <Text style={styles.subTitle}>Serve 4</Text>
                </View>
                <View style={styles.starContainer}>
                    <Text style={styles.amountText}>120</Text>
                    <Stars amount={4} />
                </View>
            </View>
        </BlurView>
    </View>;

export default Hero;