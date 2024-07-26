import Svg, { Path, Ellipse } from 'react-native-svg';
import React from 'react';

export function PersonIcon(props) {
    return (
        <Svg width="20" height="20" viewBox="0 0 22 22" fill="none" >
            <Path d="M20.3773 20.9987V18.7765C20.3773 16.3219 18.2847 14.332 15.7034 14.332H6.35555C3.77422 14.332 1.68164 16.3219 1.68164 18.7765V20.9987" stroke={props.color ? props.color : "#C2C2C2"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <Ellipse cx="11.0294" cy="5.44444" rx="4.67391" ry="4.44444" stroke={props.color ? props.color : "#C2C2C2"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>

    );
}






