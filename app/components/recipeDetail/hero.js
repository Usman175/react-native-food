import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import Stars from '../common/starts';

const Hero = () =>
    <View>
        <Image source={{uri: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2014/11/28/RealLivingBR116425/chinese-hoisin-ribs.jpg?width=1229&height=768&mode=crop&quality=75'}} style={{height: 450}} />
        <View>
            <Text>Title</Text>
            <View>
                <View>
                    <Text>Sub Heading</Text>
                    <Text>Serve 4</Text>
                </View>
                <View>
                    <Stars amount={4} />
                </View>
            </View>
        </View>
    </View>;

export default Hero;