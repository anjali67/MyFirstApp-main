






import Svg, { Path, Rect } from 'react-native-svg';
import React from 'react';

export function HomeIcon(props) {
    return (
        <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M18.6261 8.33333L11.0093 1L3.39258 8.33333V21H18.6261V8.33333Z" fill={props.color ? props.color : "#C2C2C2"} stroke={props.color ? props.color : "#C2C2C2"} strokeWidth="1.6" strokeLinejoin="round" />
            <Rect x="7.54688" y="13" width="6.92432" height="8" fill="white" stroke={props.color ? props.color : "#C2C2C2"} strokeWidth="1.6" strokeLinejoin="round" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.623047 11L11.0095 1L21.396 11" fill={props.color ? props.color : "#C2C2C2"} />
            <Path d="M0.623047 11L11.0095 1L21.396 11" stroke={props.color ? props.color : "#C2C2C2"} strokeWidth="1.6" strokeLinejoin="round" />
        </Svg>


    );
}






