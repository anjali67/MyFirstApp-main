







import Svg, { Path } from 'react-native-svg';
import React from 'react';

export function MapIcon(props) {
    return (
        <Svg width="24" height="26" viewBox="0 0 26 22" fill="none" >
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M1.60352 5V21L8.87405 17L17.1832 21L24.4538 17V1L17.1832 5L8.87405 1L1.60352 5V5Z" stroke={props.color ? props.color : "#C2C2C2"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M8.87479 1V17" stroke={props.color ? props.color : "#C2C2C2"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M17.1834 5V21" stroke={props.color ? props.color : "#C2C2C2"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>




    );
}






