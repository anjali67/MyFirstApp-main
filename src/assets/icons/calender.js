



import Svg, { Path, Rect } from 'react-native-svg';
import React from 'react';

export function CalenderIcon(props) {
    return (
        <Svg width="22" height="24" viewBox="0 0 24 22" fill="none" >
            <Rect x="1.70117" y="3" width="20.7729" height="18" rx="2" stroke={props.color ? props.color : "#C2C2C2"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M16.704 1V5" stroke={props.color ? props.color : "#C2C2C2"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M7.47156 1V5" stroke={props.color ? props.color : "#C2C2C2"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M1.70117 9H22.4741" stroke={props.color ? props.color : "#C2C2C2"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>

    );
}





