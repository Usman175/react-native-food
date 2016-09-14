import React, { PropTypes } from 'react';
import {
    View,
    Image
} from 'react-native';
import smallStar from '../../assets/search/star.png';

const Stars = (props) => {
    let i = 0;
    return (
        <View style={{ flexDirection: 'row', marginTop: 2, marginLeft: 7}}>
            {[...Array(props.amount)].map((x, i) =>
                <Image source={smallStar} style={{marginRight: 2}} key={i} />
            )}
        </View>
    );
};

Stars.propTypes = {
    amount: PropTypes.number
};

export default Stars;